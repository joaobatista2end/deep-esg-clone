// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-lucide-icons',
    'vue3-carousel-nuxt',
  ],
});