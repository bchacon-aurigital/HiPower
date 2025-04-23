'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics({ measurementId = 'G-F79B9ETYTY' }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    
    function gtag() {
      dataLayer.push(arguments);
    }
    
    gtag('js', new Date());
    gtag('config', measurementId);
  }, [measurementId]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
} 