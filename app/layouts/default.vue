<script setup lang="ts">
  import { useGlobalLoading } from '@/composables/useGlobalLoading'
  const { loading } = useGlobalLoading()
  loading.value = true

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })

  const config = useRuntimeConfig()

  useSeoMeta({
    title: config.public.title,
    description: config.public.description,
    ogTitle: config.public.title,
    ogDescription: config.public.description
  })
</script>

<template>
  <div>
    <AppLoading />
    <BasicModal />
    <slot />
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
</style>
