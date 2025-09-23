import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// ✅ Always read API key from env
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    // Parse body safely
    const body = await req.json()
    const { name, email, message } = body || {}

    // ✅ 1. Validate input (basic sanitization)
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) // simple email regex
    ) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 })
    }

    // ✅ 2. Limit message length (to prevent abuse / spam)
    if (message.length > 2000) {
      return NextResponse.json({ success: false, error: 'Message too long' }, { status: 400 })
    }

    // ✅ 3. Escape dangerous characters (basic sanitization)
    const safeName = name.replace(/[<>&'"]/g, '')
    const safeEmail = email.replace(/[<>&'"]/g, '')
    const safeMessage = message.replace(/[<>&'"]/g, '')

    // ✅ 4. Send email using safe values
    await resend.emails.send({
      from: 'onboarding@resend.dev', // must be verified sender
      to: 'usamasaleem0148@gmail.com', // your receiving email
      subject: `New contact form submission from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      replyTo: safeEmail, // user’s email
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
