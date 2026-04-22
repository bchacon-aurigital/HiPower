import ServiciosClientPage from './client-page';

export const metadata = {
  metadataBase: new URL('https://www.hipowercr.com/'),
  title: 'Energía Solar, BESS y Microrredes para Industria | HiPower',
  description: 'Soluciones de energía solar, almacenamiento (BESS) y microrredes para operaciones industriales. +15 años de experiencia y proyectos en todo Costa Rica.',

  // Canonical URL for this specific page
  alternates: {
    canonical: "https://www.hipowercr.com/servicios/"
  },

  openGraph: {
    title: 'Energía Solar, BESS y Microrredes para Industria | HiPower',
    description: 'Soluciones de energía solar, almacenamiento (BESS) y microrredes para operaciones industriales. +15 años de experiencia y proyectos en todo Costa Rica.',
    url: 'https://www.hipowercr.com/servicios/',
    siteName: 'HiPower - Energía Solar y Almacenamiento',
    images: [
      {
        url: 'https://www.hipowercr.com/HeroBG.png', // Use absolute URL
        width: 1200,
        height: 630,
        alt: 'Servicios de energía solar en Costa Rica',
      },
    ],
    locale: 'es_ES',
    type: 'website'
  },
  
  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Energía Solar, BESS y Microrredes para Industria | HiPower',
    description: 'Soluciones de energía solar, almacenamiento (BESS) y microrredes para operaciones industriales. +15 años de experiencia y proyectos en todo Costa Rica.',
    images: ['https://www.hipowercr.com/HeroBG.png'],
    creator: '@hipowercr',
    site: '@hipowercr'
  }
};

export default function ServiciosPage() {
  return <ServiciosClientPage />;
}