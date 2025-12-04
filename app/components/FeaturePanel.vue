<script lang="ts" setup>
  import { Vue3Lottie } from 'vue3-lottie'
</script>

<template>
  <div class="feature-panel px-4 pt-10 pb-4 bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl">
    <!-- <video src="@/assets/images/feature-ai.webm" width="100%" autoplay="true" controls="true"></video> -->
    <!-- <img src="@/assets/images/banner.jpg" alt="" /> -->
    <!-- <client-only>
      <Vue3Lottie
        class="data-section-content-image-content"
        animationLink="https://hujhihsyun.github.io/SASE-Digital-Campaign/images/solution-computer.json"
      />
    </client-only> -->
    <h3
      class="text-xl font-semibold bg-clip-text text-transparent bg-linear-to-bl from-[#0070F8] to-[#62E5F6] HPEGraphikSemiBold"
    >
      <slot name="title" />
    </h3>
    <h4 class="text-xs text-[#62E5F6] HPEGraphikRegular"><slot name="subtitle" /></h4>
    <p class="mt-2 text-base text-white HPEGraphikRegular"><slot name="description" /></p>
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
