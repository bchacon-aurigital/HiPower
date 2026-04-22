import ProyectosClientPage from './client-page';

export const metadata = {
  metadataBase: new URL('https://www.hipowercr.com/'),
  title: 'Proyectos de Energía Solar, BESS y Microrredes | HiPower',
  description: 'Nuestros proyectos de energía solar, microrredes y BESS ejecutados en operaciones industriales y del sector eléctrico en Costa Rica. +15 años de trayectoria.',

  // Canonical URL for this specific page
  alternates: {
    canonical: "https://www.hipowercr.com/proyectos/"
  },

  openGraph: {
    title: 'Proyectos de Energía Solar, BESS y Microrredes | HiPower',
    description: 'Nuestros proyectos de energía solar, microrredes y BESS ejecutados en operaciones industriales y del sector eléctrico en Costa Rica. +15 años de trayectoria.',
    url: 'https://www.hipowercr.com/proyectos/',
    siteName: 'HiPower - Energía Solar y Almacenamiento',
    images: [
      {
        url: 'https://www.hipowercr.com/HeroBG.png', // Use absolute URL
        width: 1200,
        height: 630,
        alt: 'Proyectos de energía solar en Costa Rica',
      },
    ],
    locale: 'es_ES',
    type: 'website'
  },
  
  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos de Energía Solar, BESS y Microrredes | HiPower',
    description: 'Nuestros proyectos de energía solar, microrredes y BESS ejecutados en operaciones industriales y del sector eléctrico en Costa Rica. +15 años de trayectoria.',
    images: ['https://www.hipowercr.com/HeroBG.png'],
    creator: '@hipowercr',
    site: '@hipowercr'
  }
};

export default function ProyectosPage() {
  return <ProyectosClientPage />;
}