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
            "Giovanni Oda's Portfolio - I'm a full stack software engineer with 5+ years of experience building websites and primarily web applications that leads to the success of the overall product."
        },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: "Giovanni Oda's Portfolio" },
        { hid: 'og-url', property: 'og:url', content: 'https://giovannioda.dev' },
        {
          hid: 'og-image',
          property: 'og:image',
          content: 'https://giovannioda.dev/imgs/giovanni-oda-social-card.jpg'
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content:
            "I'm a full stack software engineer with 5+ years of experience building websites and web applications."
        },

        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 't-domain', name: 'twitter:domain', content: 'giovannioda.dev' },
        { hid: 't-url', name: 'twitter:url', content: 'https://giovannioda.dev' },
        { hid: 't-title', name: 'twitter:title', content: "Giovanni Oda's Portfolio" },
        {
          hid: 't-image',
          property: 'twitter:image',
          content: 'https://giovannioda.dev/imgs/giovanni-oda-social-card.jpg'
        },
        {
          hid: 't-desc',
          property: 'twitter:description',
          content:
            "I'm a full stack software engineer with 5+ years of experience building websites and web applications."
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
