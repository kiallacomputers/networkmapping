export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],
  css: ['~/assets/css/main.css'],
  supabase: { redirect: false },
  app: { head: { title: 'School Network Mapping', meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }] } }
})
