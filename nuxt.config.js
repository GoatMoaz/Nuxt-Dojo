export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  app:{
    head:{
      title: 'Nuxt Dojo',
      meta:[
        {
          name: 'description',
          content: 'Everything you need to know about Nuxt.js',
        }
      ],
      link:[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  
})