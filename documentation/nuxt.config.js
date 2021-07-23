export default {
  ssr: false, // Comment out for deployment
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Muse Dashboard Documentation | Creative Tim',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo-ct-black.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true, },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
	'highlight.js/styles/a11y-light.css',
    '@/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/highlight',
    '@/plugins/clipboard2',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: { 
		// base: '/docs/', // Comment out in development
		trailingSlash: true,
		extendRoutes(routes, resolve) { // Add "/vue-ant-design-dashboard/" to each route's path.
			for( let i = 0 ; i < routes.length ; i++ ) {
				let path = routes[ i ].path ;

				if( path.endsWith("/") ) {
					path = path.substring(0, path.length - 1) ;
				}
				path += "/vue-ant-design-dashboard/" ;
				routes[ i ].path = path ;
			}
			routes.push({
				path: '/',
				name: 'Home',
				redirect: '/overview/vue-ant-design-dashboard/',
			})
		}
  	}
}
