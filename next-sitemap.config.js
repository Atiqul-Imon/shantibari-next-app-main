const members = require('./lib/data/founders.js').default;
const lawyerData = require('./lib/data/lawyers.js').default;
const psychiatristData = require('./lib/data/psychiatrists.js').default;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shantibaribd.org', 
  generateRobotsTxt: true, 
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
    const founderPaths = members.map(member => ({
      loc: `/founder/${member.id}`,
      changefreq: 'yearly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const lawyerPaths = Object.keys(lawyerData).map(id => ({
        loc: `/lawyers/${id}`,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
    }));

    const psychiatristPaths = Object.keys(psychiatristData).map(slug => ({
        loc: `/psychiatristandpsychologist/${slug}`,
        changefreq: 'yearly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
    }));

    return [...founderPaths, ...lawyerPaths, ...psychiatristPaths];
  },
};