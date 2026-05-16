import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  // Lazy init so the module can load without RESEND_API_KEY present
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await req.json()
    const { name, fullName, email, company, projectType, budget, timeline, description, message } = body || {}
    const senderName = fullName || name

    if (
      typeof senderName !== 'string' ||
      typeof email !== 'string' ||
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 })
    }

    const safeStr = (v: unknown): string =>
      typeof v === 'string' ? v.replace(/[<>&'"]/g, '').slice(0, 2000) : ''

    const safeName = safeStr(senderName)
    const safeEmail = safeStr(email)
    const lines = [
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      company ? `Company: ${safeStr(company)}` : '',
      projectType ? `Project Type: ${safeStr(projectType)}` : '',
      budget ? `Budget: ${safeStr(budget)}` : '',
      timeline ? `Timeline: ${safeStr(timeline)}` : '',
      description
        ? `\nDescription:\n${safeStr(description)}`
        : message
          ? `\nMessage:\n${safeStr(message)}`
          : '',
    ].filter(Boolean)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'muhammad@usamadev.com',
      subject: `New project brief from ${safeName}`,
      text: lines.join('\n'),
      replyTo: safeEmail,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
