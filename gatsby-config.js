module.exports = {
  siteMetadata: {
    title: `Blog | Ashwini Munji`,
    name: `Blog - Ashwini`,
    siteUrl: `https://blog.nimu.work`,
    description: `Personal blog of Ashwini Munji Diddigi`,
    hero: {
      heading: `Studio Nimu`,
      maxWidth: 10,
    },
    social: [
      {
        name:`ashwinimunji`,
        url:`https://www.nimu.work`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ashwinimunji`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ashwinimunji`,
      },
      
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
