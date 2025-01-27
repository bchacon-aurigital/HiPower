
import "./globals.css";

export const metadata = {
  title: "Abraham Studio | Barbería y estética masculina",
  description: "En Abraham Studio, encontrarás la comunidad necesaria para ayudarte a lucir y sentirte en tu mejor momento.",
  keywords: "barbería, estética, abraham studio, cortes, cuidado, barbero, afeitado, estilo, masculina, masculino",
  openGraph: {
    title: "Abraham Studio | Barbería y estética masculina",
    description: "En Abraham Studio, encontrarás la comunidad necesaria para ayudarte a lucir y sentirte en tu mejor momento.",
    url: "https://hipower.aurigital.com/",
    siteName: "Abraham Studio | Barbería y estética masculina",
    images: [
      {
        url: "/HeroBG.png", 
        width: 1200,
        height: 630,
        alt: "Abraham Barber Shop"
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
    "@type": "BarberShop",
    "name": "Abraham Studio | Barbería y estética masculina",
    "image": "https://hipower.aurigital.com/HeroBG.png", 
    "url": "https://hipower.aurigital.com/",
    "telephone": "+50684249981",       
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "San Rafael",
      "addressLocality": "Escazú",
      "addressRegion": "San Jose",
      "addressCountry": "Costa Rica"
    },
    "openingHours": "Mo-Fr 08:00-21:00",    
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/abraham.corelladuran.5/",
      "https://www.instagram.com/abraham_corella/#"
    ]
  };


export default function RootLayout({ children }) {
  return (
    <html lang="es"> 
    <body>  
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </body>
  </html>
);
}
