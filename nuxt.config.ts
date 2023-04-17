// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/_colors.scss" as *;'
            }
          }
        }
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    },
    app: {
        head: {
          title: '俺很好',
          meta: [
            {name: "keywords", content: "我很好,正能量" },
            // <meta name="description" content="My amazing site">
            { name: 'description', content: '做更好的自己.' }
          ],
        }
      }
})
