require ("dotenv").config({
  path: `.env${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "labb1blogg",
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `2hnrppdpi44w`,
      accessToken: `PnCuVEH1gxm-C0Bq0y0RbpeVsI7u9AyYyhcaeI60FSc`,
    
    },
   },
  ],
};

