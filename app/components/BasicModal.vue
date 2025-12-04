<script lang="ts" setup>
  import { onClickOutside } from '@vueuse/core'
  import { useBasicModal } from '@/composables/useBasicModal'

  const { isOpen, modalOptions, closeModal } = useBasicModal()

  const onConfirm = () => {
    modalOptions.value.onConfirm?.()
    closeModal()
  }

  const onCancel = () => {
    modalOptions.value.onCancel?.()
    closeModal()
  }

  const modalContentRef = ref<HTMLElement | null>(null)

  onClickOutside(modalContentRef, () => {
    if (isOpen.value) closeModal()
  })
</script>

<template>
  <Teleport to="body">
    <transition name="fade" mode="out-in">
      <template v-if="isOpen">
        <div class="fixed w-full h-full z-100 flex flex-col items-center justify-center gap-4">
          <div
            class="absolute w-full h-full bg-linear-to-bl from-[#01A982] via-[#292D3A] to-[#292D3A] opacity-90"
          ></div>
          <div ref="modalContentRef" class="bg-white rounded p-6 w-11/12 max-w-md shadow-lg z-110">
            <h2 class="text-[#292D3A] text-xl text-center md:text-left font-bold mb-4">{{ modalOptions.title }}</h2>
            <p class="text-black text-sm text-center md:text-left mb-6">{{ modalOptions.content }}</p>
            <div class="flex flex-col md:flex-row justify-end gap-2">
              <button
                type="button"
                class="relative flex justify-center items-center gap-1 w-full text-white bg-gray-400 hover:bg-gray-500 text-shadow-sm/20 font-semibold py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden"
                @click="onCancel"
              >
                <span class="text-lg">{{ modalOptions.cancelText || '取消' }}</span>
              </button>
              <button
                type="button"
                class="submit-button relative flex justify-center items-center gap-1 w-full text-white text-shadow-sm/20 font-semibold py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
                @click="onConfirm"
              >
                <span class="text-lg">{{ modalOptions.confirmText || '確定' }}</span>
              </button>
            </div>
          </div>
        </div>
      </template>
    </transition>
  </Teleport>
</template>

<style lang="scss" scoped>
  .submit-button {
    &:before {
      background: linear-gradient(90deg, #01a982, #00e0af 25%, #62e5f6 50%, #0070f8);
      background-size: 300% auto; // 背景尺寸設定 3 倍大
      transition: all 0.2s; // 漸變效果與時間
    }

    &:hover:before {
      // 重新調整背景尺寸與定位
      background-position: 100% 0;
      background-size: 200% auto;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
