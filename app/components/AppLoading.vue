<script setup>
  import { useGlobalLoading } from '@/composables/useGlobalLoading'
  const { loading, message } = useGlobalLoading()
</script>

<template>
  <Teleport to="body">
    <ClientOnly>
      <transition name="fade" mode="out-in">
        <template v-if="loading">
          <div
            class="fixed w-full h-full z-100 flex flex-col items-center justify-center gap-4 before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-bl before:from-[#01A982] before:via-[#292D3A] before:to-[#292D3A] before:opacity-90"
          >
            <div class="global-loader relative w-16 h-16 rounded-full">
              <div
                class="global-loader-inner global-loader-inner-one absolute w-full h-full box-border rounded-full border-b-4 border-b-[#00E0AF] left-0 top-0 global-rotate-one"
              ></div>
              <div
                class="global-loader-inner global-loader-inner-two absolute w-full h-full box-border rounded-full border-r-4 border-r-[#00E0AF] right-0 top-0 global-rotate-two"
              ></div>
              <div
                class="global-loader-inner global-loader-inner-three absolute w-full h-full box-border rounded-full border-t-4 border-t-[#00E0AF] right-0 bottom-0 global-rotate-three"
              ></div>
            </div>
            <span v-if="message" class="text-slate-100 text-sm animate-pulse">{{ message }}</span>
          </div>
        </template>
      </transition>
    </ClientOnly>
  </Teleport>
</template>

<style lang="scss" scoped>
  .global-loader {
    &-inner {
      &-one {
        animation: global-rotate-one 1.6s linear infinite;
      }

      &-two {
        animation: global-rotate-two 1.6s linear infinite;
      }

      &-three {
        animation: global-rotate-three 1.6s linear infinite;
      }
    }
  }

  @keyframes global-rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes global-rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes global-rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
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
