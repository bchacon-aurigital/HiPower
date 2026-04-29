// app/layout.js - Versión Optimizada
import "./globals.css";
import { ContactModalProvider } from "./context/ContactModalContext";
import AOSProvider from "./components/AOSProvider";
import EngagementTracker from "./components/EngagementTracker";

export const metadata = {
  metadataBase: new URL("https://www.hipowercr.com/"),
  title: "Energía Solar y Sistemas de Almacenamiento BESS| HiPower",
  description: "Diseñamos soluciones de energía solar, microrredes y almacenamiento para operaciones industriales. Asegura tu continuidad operativa y reduce costos energéticos.",

  alternates: {
    canonical: "https://www.hipowercr.com/"
  },

  keywords: "energía solar, almacenamiento energético, paneles solares, Costa Rica, HiPower, energía renovable, ahorro energético",

  openGraph: {
    title: "Energía Solar y Sistemas de Almacenamiento BESS| HiPower",
    description: "Diseñamos soluciones de energía solar, microrredes y almacenamiento para operaciones industriales. Asegura tu continuidad operativa y reduce costos energéticos.",
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
  description: "Diseñamos soluciones de energía solar, microrredes y almacenamiento para operaciones industriales. Asegura tu continuidad operativa y reduce costos energéticos.",
  award: ["NABCEP Certified", "SEI Trained", "OSHA Compliant"],
  addressCountry: "CR"
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
            })(window,document,'script','dataLayer','GTM-5ZKZ99DB');`,
          }}
        />

        {/* Google Analytics G-THELB7S56G */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-THELB7S56G" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-THELB7S56G');`,
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
          href="/assets/fonts/Futura Bold font.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//js.hsforms.net" />
        <link rel="preconnect" href="https://js.hsforms.net" />
        <link rel="dns-prefetch" href="//forms.hsforms.com" />
        <link rel="preconnect" href="https://forms.hsforms.com" />
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

        <EngagementTracker />
        <AOSProvider>
          <ContactModalProvider>
            {children}
          </ContactModalProvider>
        </AOSProvider>

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <script
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