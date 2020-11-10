module.exports = {
  pathPrefix: "/my_website_project",
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "classic",
      },
    },
  ],
  {
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
