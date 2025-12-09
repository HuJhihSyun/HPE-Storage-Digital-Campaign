import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  runtimeConfig: {
    public: {
      title: '迎戰AI時代，先解決CIO最頭痛的三件事',
      description: '√ 新型態VM虛擬私有雲 √ 資安數據保護100% √ AI數據平台',
      copyright: '© Copyright 2025 Hewlett Packard Enterprise Development LP'
    }
  },

  app: {
    baseURL: import.meta.env.PROD ? '/HPE-Storage-Digital-Campaign/' : '/',
    buildAssetsDir: '/static/',

    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AYe0AP+ItAD/h7QA/4e0AP+ItAD/h7QA/4e0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4i0AP+HtAD/h7QA/4e0AP+ItAD/h7QA/4e0AP+HtAD/iLQA/4e0AP+HtAD/h7QA/4e0AP////8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wGHtAD/h7QA/4e0AP+HtAD/////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8Bh7QA/4i0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4i0AP+HtAD/iLQA/4i0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4e0AP+HtAD/h7QA/4e0AP+HtAD/iLQA/4e0AP+ItAD/h7QA/4e0AP+HtAD/iLQA/4e0AP+HtAD/h7QA/4e0AP+HtAD/iLQA/////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w=='
        }
      ]

      // script: [
      //   {
      //     key: 'gtmHead',
      //     innerHTML: `
      //     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      //     })(window,document,'script','dataLayer','GTM-KN9XZ9K7');
      //     `
      //   }
      // ]
    }
  },

  modules: ['nuxt-svgo-loader', '@vueuse/nuxt']
})
