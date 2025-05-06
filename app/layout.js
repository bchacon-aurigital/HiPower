import "./globals.css";
import { LoadingProvider } from './context/LoadingContext';
import { ContactModalProvider } from './context/ContactModalContext';

export const metadata = {
  metadataBase: new URL('https://hipowercr.com/'),
  title: 'Energía solar y almacenamiento para empresas | HiPower',
  description: 'Ahorra energía, evitá cortes y optimizá tu operación. Con 14 años de experiencia, lideramos proyectos solares exitosos en todo Costa Rica.',
  keywords: "energía solar, paneles solares, almacenamiento de energía, energía renovable, sostenibilidad",
  openGraph: {
    title: "Energía solar y almacenamiento para empresas | HiPower",
    description: "Ahorra energía, evitá cortes y optimizá tu operación. Con 14 años de experiencia, lideramos proyectos solares exitosos en todo Costa Rica.",
    url: "https://hipowercr.com/",
    siteName: "Energía solar y almacenamiento para empresas | HiPower",
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
  "description": "Ahorra energía, evitá cortes y optimizá tu operación. Con 14 años de experiencia, lideramos proyectos solares exitosos en todo Costa Rica.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZKZ99DB');`
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZKZ99DB"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ContactModalProvider>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </ContactModalProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}