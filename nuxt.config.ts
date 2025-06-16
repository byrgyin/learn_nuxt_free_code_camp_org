// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  alias:{
    // "@": resolve(__dirname, '/'),
    assets: "/<rootDir>/assets",
  },

  css:[
    '~/assets/main.scss',
  ],

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