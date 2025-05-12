import SobreNosotrosClientPage from './client-page';

export const metadata = {
  metadataBase: new URL('https://www.hipowercr.com/'),
  title: 'Sobre Nosotros | HiPower - Soluciones Energéticas Sostenibles en Costa Rica',
  description: 'Con más de 14 años de experiencia, diseñamos e instalamos proyectos solares que contribuyen a un futuro más limpio y sostenible en Costa Rica.',
  
  // Canonical URL for this specific page
  alternates: {
    canonical: "https://www.hipowercr.com/sobrenosotros/"
  },
  
  openGraph: {
    title: 'Sobre Nosotros | HiPower - Soluciones Energéticas Sostenibles en Costa Rica',
    description: 'Impulsamos el cambio hacia un futuro más limpio y sostenible. Más de 14 años diseñando, instalando y construyendo proyectos solares en Costa Rica.',
    url: 'https://www.hipowercr.com/sobrenosotros/',
    siteName: 'HiPower - Energía Solar y Almacenamiento',
    images: [
      {
        url: 'https://www.hipowercr.com/HeroBG.png', // Use absolute URL
        width: 1200,
        height: 630,
        alt: 'HiPower - Soluciones energéticas sostenibles en Costa Rica',
      },
    ],
    locale: 'es_ES',
    type: 'website'
  },
  
  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros | HiPower',
    description: 'Impulsamos el cambio hacia un futuro más limpio y sostenible con más de 14 años de experiencia en energía solar.',
    images: ['https://www.hipowercr.com/HeroBG.png'],
    creator: '@hipowercr',
    site: '@hipowercr'
  }
};

export default function SobreNosotrosPage() {
  return <SobreNosotrosClientPage />;
}