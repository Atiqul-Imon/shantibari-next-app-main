const members = require('./lib/data/founders.js').default;
const lawyerData = require('./lib/data/lawyers.js').default;
const psychiatristData = require('./lib/data/psychiatrists.js').default;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://shantibaribd.org',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/dashboard', '/login', '/register'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/login', '/register'],
      },
    ],
  },
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  additionalPaths: async (config) => {
    const result = [];
    
    // Add founder pages
    const founderIds = [1, 2, 3, 4, 5];
    founderIds.forEach((id) => {
      result.push({
        loc: `/founder/${id}`,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    // Add lawyer pages
    const lawyerIds = [1, 2, 3];
    lawyerIds.forEach((id) => {
      result.push({
        loc: `/lawyers/${id}`,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    // Add psychiatrist/psychologist pages
    const psychiatristSlugs = [
      'dr-helal-uddin-ahmed',
      'dr-nasim-jahan',
      'razia-sultana-rima',
      'm-s-mahmuda',
      'tanzina-chowdhury',
      'arpita-das'
    ];
    
    psychiatristSlugs.forEach((slug) => {
      result.push({
        loc: `/psychiatristandpsychologist/${slug}`,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    // Add advisor pages
    const advisorIds = [1, 2];
    advisorIds.forEach((id) => {
      result.push({
        loc: `/advisor/${id}`,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });
    
    return result;
  },
};