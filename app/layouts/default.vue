<script setup lang="ts">
  import { useGlobalLoading } from '@/composables/useGlobalLoading'
  const { loading } = useGlobalLoading()

  const config = useRuntimeConfig()

  useSeoMeta({
    title: config.public.title,
    description: config.public.description,
    ogTitle: config.public.title,
    ogDescription: config.public.description
  })

  const isInitial = ref(true)

  onMounted(() => {
    isInitial.value = false
  })
</script>

<template>
  <div>
    <transition name="fade" mode="out-in">
      <InitialLoading v-if="isInitial" />
    </transition>
    <transition name="fade" mode="out-in">
      <AppLoading />
    </transition>
    <transition name="fade" mode="out-in">
      <BasicModal />
    </transition>
    <slot />
    <footer class="w-full bg-black flex justify-end lg:justify-center items-center py-3 px-6 lg:px-8 xl:px-12">
      <p class="text-white text-xs HPEGraphikRegular">{{ config.public.copyright }}</p>
    </footer>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #292d3a;
    font-family: HPEGraphikRegular, '微軟正黑體', sans-serif;
  }

  .HPEGraphikBold {
    font-family: HPEGraphikBold, '微軟正黑體', sans-serif;
    font-weight: bold;
  }

  .HPEGraphikSemiBold {
    font-family: HPEGraphikSemiBold, '微軟正黑體', sans-serif;
    font-weight: 600;
  }

  .HPEGraphikMedium {
    font-family: HPEGraphikMedium, '微軟正黑體', sans-serif;
    font-weight: 500;
  }

  .HPEGraphikRegular {
    font-family: HPEGraphikRegular, '微軟正黑體', sans-serif;
    font-weight: normal;
  }

  .HPEGraphikLight {
    font-family: HPEGraphikLight, '微軟正黑體', sans-serif;
    font-weight: 300;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
