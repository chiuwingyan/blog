module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/font-awesome.min.css' }
    ]
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      console.log('test')
          let position = {};
          if (to.hash) {
            // scroll to anchor by returning the selector
            console.log('hash',to.hash)
            position = { selector: to.hash }
          }
          return position;
        }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      
      if (isDev && isClient) {
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader');
        vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!sass-loader';

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    prefix: '/api/',
    proxy: true,
    //baseURL: 'http://192.168.1.4:8181'
  },
  proxy: { '/api/': { target: 'http://192.168.1.3:8181', pathRewrite: { '^/api/': '' } } }

}

