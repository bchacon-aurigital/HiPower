// app/layout.js - Versión Optimizada
import "./globals.css";
import { ContactModalProvider } from "./context/ContactModalContext";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.hipowercr.com/"),
  title: "Energía solar y almacenamiento para empresas | HiPower",
  description: "Ahorra energía, evitá cortes y optimizá tu operación. Con 14 años de experiencia, lideramos proyectos solares exitosos en todo Costa Rica.",

  alternates: {
    canonical: "https://www.hipowercr.com/"
  },

  keywords: "energía solar, almacenamiento energético, paneles solares, Costa Rica, HiPower, energía renovable, ahorro energético",

  openGraph: {
    title: "Energía solar y almacenamiento para empresas | HiPower",
    description: "Ahorra energía, evitá cortes y optimizá tu operación. Con 14 años de experiencia, lideramos proyectos solares exitosos en todo Costa Rica.",
    url: "https://www.hipowercr.com/",
    siteName: "HiPower - Energía Solar y Almacenamiento",
    images: [
      {
        url: "https://www.hipowercr.com/HeroBG.png",
        width: 1200,
        height: 630,
        alt: "HiPower - Energía solar y almacenamiento para empresas en Costa Rica",
      },
    ],
    locale: "es_ES",
    type: "website"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HiPower",
  description: "Ahorra energía, evitá cortes y optimizá tu operación. Con 14 años de experiencia, lideramos proyectos solares exitosos en todo Costa Rica.",
  // ... resto del schema
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5ZKZ99DB');
            `,
          }}
        />

        <link
          rel="preload"
          href="/assets/homepage/HeroBG.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/assets/landing/LogoHiPower.svg"
          as="image"
          type="image/svg+xml"
        />

        <link
          rel="preload"
          href="/assets/fonts/Futura Bold font.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/assets/homepage/HPHeroVid.webm"
          as="video"
          type="video/webm"
          media="(min-width: 769px)"
        />

        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//js.hsforms.net" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="theme-color" content="#037F3F" />
        <meta name="msapplication-TileColor" content="#037F3F" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>

      <body>
        {/* GTM NoScript - mantener para compatibilidad */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZKZ99DB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ContactModalProvider>
          {children}
        </ContactModalProvider>

        {/* Schema JSON-LD con menor prioridad */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="lazyOnload" // Cargar cuando sea necesario
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <Script
          id="sw-register"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}