// layout.tsx or layout.jsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import './globals.css'

export const metadata: Metadata = {
  title: 'Digilink IT Solutions',
  description: 'Providing IT services, cloud solutions, and digital support for your business.',
  generator: 'Digilink IT Solutions',
  icons: {
    icon: '/favicon.ico', // <-- Path to your icon file in /public folder
   
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
