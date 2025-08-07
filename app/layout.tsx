import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: {
    default: 'Developers Code - Consultoría Tecnológica y Desarrollo de Software a Medida en México',
    template: '%s | Developers Code'
  },
  description: 'Consultoría tecnológica profesional y desarrollo de software a medida en México. Sitios web, sistemas empresariales, mantenimiento y soporte técnico. +2 años de experiencia.',
  keywords: [
    'consultoría tecnológica México',
    'desarrollo de software a medida',
    'desarrollo web profesional',
    'agencia desarrollo México',
    'mantenimiento sistemas',
    'software empresarial',
    'sitios web corporativos',
    'asesoría tecnológica',
    'desarrollo Next.js React',
    'sistemas POS México'
  ],
  authors: [{ name: 'Developers Code' }],
  creator: 'Developers Code',
  publisher: 'Developers Code',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://developers-code.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Developers Code - Consultoría Tecnológica y Desarrollo de Software',
    description: 'Transformamos ideas en realidad digital. Consultoría tecnológica, desarrollo web y software a medida en México.',
    url: 'https://developers-code.vercel.app/',
    siteName: 'Developers Code',
    images: [
      {
        url: '/og-image.jpg', // Crear esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: 'Developers Code - Consultoría Tecnológica México',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developers Code - Consultoría Tecnológica México',
    description: 'Desarrollo de software a medida, sitios web profesionales y consultoría tecnológica en México.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Rg4JxcHngV7l7Vgp5FxunGnphIgBy-0IyKp29YJ3Nws',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX">
      <head>
        {/* Schema.org para Organización */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Developers Code",
              "description": "Consultoría tecnológica y desarrollo de software a medida",
              "url": "https://developers-code.vercel.app/",
              "logo": "https://developers-code.vercel.app/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+52-228-317-5642",
                "contactType": "customer service",
                "areaServed": "MX",
                "availableLanguage": "Spanish"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coatepec",
                "addressRegion": "Veracruz",
                "addressCountry": "MX"
              },
              "sameAs": [
                "https://linkedin.com/company/developers-code",
              ]
            })
          }}
        />
        {/* Schema.org para Servicios */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Desarrollo de Software a Medida",
              "provider": {
                "@type": "Organization",
                "name": "Developers Code"
              },
              "areaServed": "Mexico",
              "serviceType": "Consultoría Tecnológica",
              "description": "Desarrollo de software personalizado, sitios web profesionales y consultoría tecnológica"
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}