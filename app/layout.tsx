import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.usamadev.com"),

  title: {
    default: "Custom Web Development Services | Muhammad Usama Saleem",
    template: "%s | Muhammad Usama Saleem",
  },

  description:
    "Custom web development, SaaS development, and business software for startups and businesses. Full-stack development using React, Next.js, Node.js, Java, and Spring Boot.",

  authors: [
    {
      name: "Muhammad Usama Saleem",
      url: "https://www.usamadev.com",
    },
  ],

  creator: "Muhammad Usama Saleem",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.usamadev.com",
    siteName: "Muhammad Usama Saleem",
    title: "Custom Web Development Services | Muhammad Usama Saleem",
    description:
      "Custom web development, SaaS development, and business software for startups and businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Usama Saleem - Custom Web Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services | Muhammad Usama Saleem",
    description:
      "Custom web development, SaaS development, and business software for startups and businesses.",
    images: ["/og-image.png"],
    creator: "@engrmusamasaleem",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.usamadev.com/#website",
                  url: "https://www.usamadev.com",
                  name: "Muhammad Usama Saleem",
                  description:
                    "Custom web development, SaaS development, and business software for startups and businesses.",
                  publisher: {
                    "@id": "https://www.usamadev.com/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://www.usamadev.com/#person",
                  name: "Muhammad Usama Saleem",
                  url: "https://www.usamadev.com",
                  jobTitle: "Full-Stack Software Developer",
                  sameAs: [
                    "https://www.linkedin.com/in/engrmusamasaleem",
                    "https://github.com/UsamaSaleem148",
                    "https://upwork.com/freelancers/usamasaleem2",
                  ],
                },
              ],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
