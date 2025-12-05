<script lang="ts" setup>
  import { Vue3Lottie } from 'vue3-lottie'
  import featureSecurity from '@/assets/images/feature-security.json'
  import featureAI from '@/assets/images/feature-ai2.json'
  import featureBudget from '@/assets/images/feature-budget.json'

  interface panelProps {
    id: string
  }
  const props = withDefaults(defineProps<panelProps>(), {
    id: ''
  })
</script>

<template>
  <div
    class="basic-panel w-full px-6 xl:px-8 gap-4 xl:gap-6 bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl flex justify-center items-center"
  >
    <div class="w-1/4 -translate-y-4">
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
    <div class="w-full">
      <h3
        class="text-xl xl:text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-bl from-[#0070F8] to-[#62E5F6] HPEGraphikSemiBold"
      >
        <slot name="title" /><span class="text-xs xl:text-sm text-[#62E5F6] HPEGraphikRegular ml-2"
          ><slot name="subtitle"
        /></span>
      </h3>
      <!-- <h4 class="text-xs text-[#62E5F6] HPEGraphikRegular"><slot name="subtitle" /></h4> -->
      <h4 class="mt-1 text-base xl:text-lg text-white HPEGraphikRegular"><slot name="description" /></h4>
      <p class="mt-2 xl:text-sm text-gray-300 HPEGraphikRegular"><slot name="content" /></p>
    </div>
  </div>
</template>
