<script setup></script>

<template>
  <div
    class="fixed w-full h-full z-100 flex flex-col items-center justify-center gap-4 before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-bl before:from-[#01A982]/90 before:to-[#292D3A]"
  >
    <div
      class="hpe-logo-loading relative w-40 h-10 outline-0 border-0 before:absolute before:content-[''] before:bottom-0 before:top-0 before:left-0 before:right-0 before:p-2.5"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
  .hpe-logo-loading {
    &:before {
      background: linear-gradient(90deg, #01a982, #00e0af 25%, #62e5f6 50%, #0070f8);
      background-size: 300% auto; // 背景尺寸設定 3 倍大

      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;

      animation: moveGradient 3s linear infinite alternate both;
    }

    @keyframes moveGradient {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 0;
      }
    }
  }
</style>
