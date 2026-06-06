import type { Metadata } from 'next';
import { Outfit, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-outfit' });
const ibm = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-ibm' });

export const metadata: Metadata = {
  metadataBase: new URL('https://apostasegura.live'),
  title: 'Aposta Segura — Ofertas de Casino Licenciadas SRIJ',
  description: 'Compare as melhores ofertas de boas-vindas de casinos licenciados pelo SRIJ em Portugal. Escolhas editoriais independentes para adultos 18+.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${outfit.variable} ${ibm.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Aposta Segura Lda',
              url: 'https://apostasegura.live',
              email: 'info@apostasegura.live',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Augusta 274',
                addressLocality: 'Lisboa',
                postalCode: '1100-053',
                addressCountry: 'PT',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
