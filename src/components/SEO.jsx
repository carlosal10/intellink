import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  lang = "en",
  type = "website",
  structuredData,
  alternates = [],
}) {
  return (
    <Helmet>
      {/* HTML Language */}
      <html lang={lang} />

      {/* Title + Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Hreflang Alternates */}
      {alternates.map((alt) => (
        <link
          key={alt.hreflang}
          rel="alternate"
          href={alt.href}
          hreflang={alt.hreflang}
        />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
