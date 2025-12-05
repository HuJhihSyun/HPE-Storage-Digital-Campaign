# Setup
* Make sure to install dependencies: `pnpm install`
* Development Server: Start the development server on `http://localhost:3000` with `pnpm dev`
* Build the application for production with `pnpm build`
* Locally preview production build with `pnpm preview`

---

# HPE Guide Line

### Color
[Color](https://brandcentral.hpe.com/brand-central/content/color)

#### Primary colors
* White: #FFFFFF
* Black: #000000
* Midnight: #292D3A
* HPE Green: #01A982

#### Secondary colors
* Jade Green: #05CC93
* Mint Green: #00E0AF
* Cyan: #62E5F6
* Blue: #0070F8
* Purple: #7764FC

#### Neutrals
* Light Cloud: #F7F7F7
* Cloud: #E6E8E9
* Dark Cloud: #D4D8DB
* Slate: #B1B9BE

---

# Technical 套件或技術

### Nuxt Svgo Loader
* [Nuxt Svgo Loader](https://www.npmjs.com/package/nuxt-svgo-loader)
* SVG ICON Resource [Lucide](https://lucide.dev/)

### TailwindCss v4
[TailwindCss](https://tailwindcss.com/docs/installation/framework-guides/nuxt)

### vue3 + TypeScript With ESLint + Prettier
1. Install eslint `pnpm i -D eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin`
2. Install prettier `pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier`
3. Add file .eslintrc.cjs
4. Add file .prettierrc.cjs
5. Add file .vscode/settings.json
6. Add file .editorconfig

### VueUse
[VueUse](https://vueuse.org/guide/)
* useVModel: 組件的雙向綁定通常透過 v-model 來完成，更清楚地控制父子組件之間的資料流，並能根據需求對資料進行轉換或處理。
* useState: 輕量級全域狀態管理工具，底層是透過 Nuxt 提供的 useState API 封裝。用途類似小型應用中管理全域變數，不需額外像 Vuex、Pinia 完整的狀態管理框架

### .env 環境變數
nuxt.config.ts runtimeConfig => page: useRuntimeConfig()

### Swiper
[Swiper](https://swiperjs.com/vue): Installation `pnpm i swiper`與基本程式碼套用
[配置選項簡體中文版](https://www.swiper.com.cn/api/parameters/42.html)
Q. Too big/wide slider on initialization [#3599](https://github.com/nolimits4web/swiper/issues/3599)

---
