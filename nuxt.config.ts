// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  app: {
    head: {
      title: "Giovanni Oda's Portfolio",
      meta: [
        {
          name: 'description',
          content:
            "Giovanni Oda's Portfolio - I'm a full stack engineer focused web developer building web applications that leads to the success of the overall product."
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/imgs/giovanni-oda-favicon.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@100;300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    // private env keys
    sendGridKey: process.env.SENDGRID_API_KEY,
    public: {
      // public keys
      // firebase
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    }
  },
  nitro: {
    preset: 'firebase'
  }
});
