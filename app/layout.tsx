import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Developers Code',
  description: 'Consultoría y desarrollo de software a la medida',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/apple-touch-icon.png',
  },
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
