import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  contactPageData
} from "../../portfolio.js";

function SeoHeader() {
  // Vérifiez que socialMediaLinks est défini avant de l'utiliser
  const sameAs = socialMediaLinks
    ? socialMediaLinks
        .filter(
          (media) =>
            media.link && !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
        )
        .map((media) => media.link)
    : [];

  // Trouvez le lien mail, avec vérification de la présence de l'objet
  const mail = socialMediaLinks
    ? socialMediaLinks.find((media) => media.link.startsWith("mailto"))?.link?.substring("mailto:".length)
    : '';


  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData?.phoneSection?.subtitle,
    sameAs: sameAs
      ? {
          "@type": "Organization",
          
        }
      : undefined,
    address: contactPageData?.addressSection
      ? {
          "@type": "PostalAddress",
          addressLocality: contactPageData.addressSection.locality,
          addressRegion: contactPageData.addressSection.region,
          addressCountry: contactPageData.addressSection.country,
          postalCode: contactPageData.addressSection.postalCode,
          streetAddress: contactPageData.addressSection.streetAddress,
        }
      : undefined,
  };

  return (
    <Helmet>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
