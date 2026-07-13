"use client";

import Script from "next/script";

/**
 * Visitor tracking — dashboards are private to your accounts only.
 * - Vercel Analytics: enabled in layout via @vercel/analytics
 * - Cloudflare Web Analytics: set NEXT_PUBLIC_CF_BEACON_TOKEN (from Cloudflare → Web Analytics)
 * - Google Analytics 4: set NEXT_PUBLIC_GA_MEASUREMENT_ID (G-XXXXXXXX)
 */
export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}

export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  if (!token) return null;

  return (
    <Script
      id="cf-web-analytics"
      strategy="afterInteractive"
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
