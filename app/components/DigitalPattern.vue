<script lang="ts" setup>
  const second = ref(0)

  onMounted(() => {
    setInterval(() => {
      second.value += 1
    }, 1000)
  })
</script>

<template>
  <ul class="inline-flex justify-start items-center gap-1 skew-x-25 pointer-events-none">
    <li
      v-for="index in 12"
      :key="index"
      class="digital-item relative outline-0 border-0 w-1.5 h-3 md:w-2 md:h-4 before:absolute before:content-[''] before:bottom-0 before:top-0 before:left-0 before:right-0 before:p-px"
      :class="{
        'bg-linear-to-b from-[#00e0af] to-[#62e5f6]': index <= (second % 12) + 1 && index > (second % 12) - 5
      }"
    ></li>
  </ul>
</template>

<style lang="scss">
  .digital-item {
    &:before {
      background: linear-gradient(180deg, #00e0af, #62e5f6);
      z-index: -1;

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
