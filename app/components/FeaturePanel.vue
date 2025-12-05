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
    class="feature-panel w-full px-6 xl:px-8 gap-4 xl:gap-6 bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl flex justify-center items-center"
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

<style lang="scss" scoped>
  .feature-panel {
    position: relative;
    outline: none;
    border: none;

    &:before {
      position: absolute;
      content: '';
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 16px;
      background: linear-gradient(180deg, #f7f7f7, #292d3a);
      padding: 1px;

      // gradient border with mask
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
</style>
