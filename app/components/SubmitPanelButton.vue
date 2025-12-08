<script lang="ts" setup>
  import editSvg from '@/assets/svg/edit.svg?skipsvgo'

  interface submitPanelButtonEmits {
    (event: 'openSubmitPanel'): void
  }

  const emit = defineEmits<submitPanelButtonEmits>()

  const openSubmitPanel = () => {
    emit('openSubmitPanel')
  }
</script>

<template>
  <button
    class="fixed top-4 right-4 inline-flex md:hidden justify-center items-center bg-linear-to-bl from-white/10 to-white/30 border border-white rounded-full py-1 px-3 backdrop-blur-sm z-100 cursor-pointer transition-all duration-300 ease-in-out"
    @click="openSubmitPanel"
  >
    <editSvg class="inline-block text-white w-5 h-5 mr-1 transition-all duration-300 ease-in-out" />
    <span class="text-white text-sm font-bold whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out"
      >填寫資料</span
    >
  </button>
</template>

<style lang="scss" scoped></style>
