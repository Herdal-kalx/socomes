import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Providers } from '@/components/providers/Providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-opensans',
})

export const metadata: Metadata = {
  title: 'SOCOMES - Société Congolaise de Médecine Sexuelle',
  description: 'Plateforme officielle de la Société Congolaise de Médecine Sexuelle, dédiée à la santé sexuelle en République Démocratique du Congo.',
  keywords: 'SOCOMES, médecine sexuelle, santé sexuelle, Congo, RDC, consultations, santé',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} ${openSans.variable} font-opensans antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}