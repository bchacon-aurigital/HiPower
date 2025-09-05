export const metadata = {
  metadataBase: new URL('https://www.hipowercr.com/'),
  title: 'Landing Page | HiPower - Energía Solar y Almacenamiento',
  description: 'Descubre nuestras soluciones de energía solar y almacenamiento. Ahorra energía y optimiza tu operación con la experiencia de HiPower en Costa Rica.',
  
  alternates: {
    canonical: "https://www.hipowercr.com/landing/"
  },

  keywords: "energía solar, almacenamiento energético, paneles solares, Costa Rica, HiPower, landing page",

  openGraph: {
    title: 'Landing Page | HiPower - Energía Solar y Almacenamiento',
    description: 'Descubre nuestras soluciones de energía solar y almacenamiento. Ahorra energía y optimiza tu operación.',
    url: 'https://www.hipowercr.com/landing/',
    siteName: 'HiPower - Energía Solar y Almacenamiento',
    images: [
      {
        url: 'https://www.hipowercr.com/HeroBG.png',
        width: 1200,
        height: 630,
        alt: 'HiPower - Soluciones de energía solar en Costa Rica',
      },
    ],
    locale: 'es_ES',
    type: 'website'
  },
  
};

export default function LandingLayout({ children }) {
  return children;
} 