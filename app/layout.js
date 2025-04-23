import "./globals.css";
import { LoadingProvider } from './context/LoadingContext';
import { ContactModalProvider } from './context/ContactModalContext';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata = {
  title: 'Energía solar y almacenamiento para empresas generadoras de energía | HiPower',
  description: 'Empresa líder en soluciones solares en Costa Rica con más de 13 años de experiencia en energía renovable. Ofrecemos diseño e instalación de sistemas fotovoltaicos.',
  keywords: "energía solar, paneles solares, almacenamiento de energía, energía renovable, sostenibilidad",
  openGraph: {
    title: "HiPower | Energía Solar y Almacenamiento",
    description: "Empresa líder en soluciones solares en Costa Rica. Más de 13 años de experiencia en energía renovable.",
    url: "https://hipowercr.com/",
    siteName: "HiPower | Energía Solar y Almacenamiento",
    images: [
      {
        url: './HeroBG.png',
        width: 1200,
        height: 630,
        alt: "HiPower Energía Solar"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: "https://hipowercr.com/"
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hi Power",
  "description": "Empresa líder en soluciones solares en Costa Rica. Más de 13 años de experiencia en energía renovable.",
  "telephone": "+50640004990",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "150 mts sur del cementerio de San Luis",
    "addressLocality": "Santo Domingo",
    "addressRegion": "Heredia",
    "postalCode": "",
    "addressCountry": "CR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/hipowercr/",
    "https://www.youtube.com/@hipowercr",
    "https://www.facebook.com/hipowercr",
    "https://www.instagram.com/hipower.cr/"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Diseño e instalación de plantas solares fotovoltaicas a gran escala"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Implementación de Micro Redes (Microgrids)"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sistemas Off-Grid para autonomía energética"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sistemas de generación distribuida"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sistemas de almacenamiento de energía con baterías"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Consultoría y estudios de viabilidad energética"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Soporte técnico integral"
      }
    }
  ]
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
        <ContactModalProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </ContactModalProvider>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
