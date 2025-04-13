import "./globals.css";
import { LoadingProvider } from './context/LoadingContext';

export const metadata = {
  title: "HiPower | Energía Solar y Almacenamiento",
  description: "HiPower instala paneles solares para tener industrias autosostenibles y reducir el costo de facturación eléctrica, almacenar energía y reducir emisiones.",
  keywords: "energía solar, paneles solares, almacenamiento de energía, energía renovable, sostenibilidad",
  openGraph: {
    title: "HiPower | Energía Solar y Almacenamiento",
    description: "HiPower instala paneles solares para tener industrias autosostenibles y reducir el costo de facturación eléctrica, almacenar energía y reducir emisiones.",
    url: "https://hipower.aurigital.com/",
    siteName: "HiPower | Energía Solar y Almacenamiento",
    images: [
      {
        url: "/assets/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "HiPower Energía Solar"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: "https://hipower.aurigital.com/"
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HiPower | Energía Solar y Almacenamiento",
  "image": "https://hipower.aurigital.com/assets/images/hero-bg.jpg",
  "url": "https://hipower.aurigital.com/",
  "description": "HiPower instala paneles solares para tener industrias autosostenibles y reducir el costo de facturación eléctrica, almacenar energía y reducir emisiones."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
