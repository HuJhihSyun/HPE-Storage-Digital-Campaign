<script lang="ts" setup>
  import { Vue3Lottie } from 'vue3-lottie'
  import featureSecurity from '@/assets/images/feature-security2.json'
  import featureAI from '@/assets/images/feature-ai.json'
  import featureBudget from '@/assets/images/feature-budget2.json'
  import dotsSvg from '@/assets/svg/dots.svg?skipsvgo'

  interface panelProps {
    id: string
  }
  const props = withDefaults(defineProps<panelProps>(), {
    id: ''
  })
</script>

<template>
  <div
    class="relative basic-panel w-full pb-2 sm:pb-0 px-6 xl:px-8 gap-4 xl:gap-6 bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl flex flex-col sm:flex-row justify-center items-center"
  >
    <div class="w-1/2 sm:w-1/4 -translate-y-4">
      <client-only>
        <div v-if="id === 'security'" class="aspect-8/9">
          <Vue3Lottie :animationData="featureSecurity" direction="forward" />
        </div>
        <div v-else-if="id === 'budget'" class="aspect-8/9">
          <Vue3Lottie :animationData="featureBudget" direction="forward" />
        </div>
        <div v-else-if="id === 'ai'" class="aspect-8/9">
          <Vue3Lottie :animationData="featureAI" direction="forward" />
        </div>
      </client-only>
    </div>
    <div class="w-full -mt-5 sm:mt-2">
      <h3
        class="text-lg xl:text-xl 2xl:text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-bl from-[#0070F8] to-[#62E5F6] HPEGraphikSemiBold"
      >
        <slot name="title" /><span
          class="block sm:inline-block text-sm sm:text-xs xl:text-sm text-[#62E5F6] HPEGraphikRegular sm:ml-2"
          ><slot name="subtitle"
        /></span>
      </h3>
      <h4 class="mt-1 text-sm xl:text-base 2xl:text-lg text-white HPEGraphikRegular mb-1 pb-1 border-b border-gray-500">
        <slot name="description" />
      </h4>
      <p class="mt-2 text-xs xl:text-sm text-gray-300 HPEGraphikRegular"><slot name="content" /></p>
    </div>
    <dotsSvg class="absolute top-3 right-3 xl:top-4 xl:right-4 w-12 h-12 xl:w-16 xl:h-16 pointer-events-none -z-1" />
  </div>
</template>
