// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  app:{
    head:{
      title: 'Learn Nuxt',
      meta:[
        {
          name:'description',
          content:'Description this my NUXT'
        }
      ],
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  alias:{
    // "@": resolve(__dirname, '/'),
    assets: "/<rootDir>/assets",
  },
  css:[
    '~/assets/main.scss',
  ],
  ssr:false,
  modules: ["@nuxt/content", "@pinia/nuxt"],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        }
      }
    }
  }
})