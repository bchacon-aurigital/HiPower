import ServiciosClientPage from './client-page';

export const metadata = {
  metadataBase: new URL('https://www.hipowercr.com/'),
  title: 'Servicios de Energía Solar | HiPower - Soluciones Renovables en Costa Rica',
  description: 'Servicios especializados en energía solar y almacenamiento con más de 14 años de experiencia. Proyectos innovadores, rentables y con tecnología avanzada.',
  
  // Canonical URL for this specific page
  alternates: {
    canonical: "https://www.hipowercr.com/servicios/"
  },
  
  openGraph: {
    title: 'Servicios de Energía Solar | HiPower - Soluciones Renovables en Costa Rica',
    description: 'Servicios especializados en energía solar y almacenamiento con más de 14 años de experiencia.',
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
    title: 'Servicios de Energía Solar | HiPower',
    description: 'Servicios especializados en energía solar y almacenamiento con más de 14 años de experiencia.',
    images: ['https://www.hipowercr.com/HeroBG.png'],
    creator: '@hipowercr',
    site: '@hipowercr'
  }
};

export default function ServiciosPage() {
  return <ServiciosClientPage />;
}