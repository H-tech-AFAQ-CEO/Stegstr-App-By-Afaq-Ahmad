import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'stegstr.sh — FOSS steganography workbench',
  description: 'Encode encrypted messages into ordinary media and test their survival across platforms.',
  generator: 'stegstr.sh',
  icons: {
    icon: '/stegstr-mark.svg',
    apple: '/stegstr-mark.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e11',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
