'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics({ measurementId = 'G-F79B9ETYTY' }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', measurementId, {
            send_page_view: true,
            transport_type: 'beacon',
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        }}
      />
    </>
  );
} 