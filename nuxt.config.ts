// nuxt.config.ts
// https://v3.nuxtjs.org/api/configuration/nuxt.config
// import { resolve, dirname } from 'node:path';
// import { fileURLToPath } from 'url';
// import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite';
// import eslintPlugin from 'vite-plugin-eslint';
import en from './locales/en-US.json';
import ar from './locales/ar-EG.json';

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  modules: [
    '@pinia/nuxt',
    '@leanera/nuxt-i18n',
    // '@intlify/nuxt3'
  ],

  buildModules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Roboto: false,
      Dosis: [100, 300],
    },
  },

  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    messages: {
      en,
      ar,
    },
  },

  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'en',
  //     fallbackLocale: 'en',
  //     messages: { en, ar },
  //   },
  // },

  build: {
    transpile: ['vuetify/lib', 'responsivevoice'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },

    plugins: [
      // eslintPlugin(),
      // VueI18nVitePlugin({
      //   include: [
      //     resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
      //   ],
      // }),
    ],
  },
});
