/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://somerhaus.com',
  generateRobotsTxt: true, // (optional) generate robots.txt alongside sitemap.xml
  // Optionally, you can add more configuration here
}; 