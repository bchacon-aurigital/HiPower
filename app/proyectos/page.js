import ProyectosClientPage from './client-page';

export const metadata = {
  metadataBase: new URL('https://www.hipowercr.com/'),
  title: 'Proyectos de Energía Solar | HiPower - Soluciones Renovables en Costa Rica',
  description: 'Descubre nuestros proyectos de energía solar y almacenamiento en Costa Rica. Implementamos soluciones sostenibles para hogares, empresas e industrias.',
  
  // Canonical URL for this specific page
  alternates: {
    canonical: "https://www.hipowercr.com/proyectos/"
  },
  
  openGraph: {
    title: 'Proyectos de Energía Solar | HiPower - Soluciones Renovables en Costa Rica',
    description: 'Descubre nuestros proyectos de energía solar y almacenamiento en Costa Rica',
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
    title: 'Proyectos de Energía Solar | HiPower',
    description: 'Descubre nuestros proyectos de energía solar y almacenamiento en Costa Rica',
    images: ['https://www.hipowercr.com/HeroBG.png'],
    creator: '@hipowercr',
    site: '@hipowercr'
  }
};

export default function ProyectosPage() {
  return <ProyectosClientPage />;
}