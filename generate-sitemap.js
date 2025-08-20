const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const siteUrl = "https://www.intellink-nippon.co.jp";

// Define your site routes
const routes = [
  "/",
  "/about",
  "/services",
  "/insights",
  "/contact",
  "/sectors",
  "/recruitment",
  "/expertconnect",
  "/tradelink",
  "/marketlink",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });
  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log("✅ Simplified sitemap generated at public/sitemap.xml");
}

generateSitemap().catch(console.error);
