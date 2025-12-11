<script lang="ts" setup></script>

<template>
  <a
    href="https://forms.gle/2e3GoPMxkrLGgWte8"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed inline-block bottom-2 right-2 lg:bottom-4 lg:right-4 z-40 group animate-bounce hover:animate-none"
  >
    <div class="absolute right-0 bottom-0 flex flex-col justify-center items-center gap-1">
      <div
        class="relative w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-linear-to-br from-[#00E0AF] to-[#7764FC] shadow-2xl group-hover:shadow-cyan-200 transition-shadow"
      >
        <img
          src="@/assets/images/robot-cute-1.png"
          alt="robot"
          class="absolute top-1/2 left-1/2 w-10 h-10 md:w-14 md:h-14 group-hover:scale-105 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h6
        class="bg-clip-text text-transparent bg-linear-to-br from-[#7764FC] to-[#62E5F6] font-bold text-xs md:text-sm"
      >
        點擊有好康
      </h6>
    </div>
    <div
      class="absolute bottom-16 md:bottom-21 right-0 banner-heading text-shadow-lg py-3 px-6 max-w-64 md:max-w-xs bg-linear-to-br from-[#0070F8]/90 via-black/90 to-black/80 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity after:absolute after:content-[''] after:w-15 after:h-1 after:rounded-full after:bg-linear-to-r after:from-[#00E0AF] after:to-[#62E5F6] after:top-0 after:-translate-y-1/2 after:left-1/10"
    >
      <p
        class="inline-block text-gray-200 font-normal HPEGraphikRegular text-xs md:text-sm leading-normal before:right-1/5 before:bottom-0 before:absolute before:w-0 before:h-0 before:border-solid before:border-t-8 before:border-r-8 before:border-b-0 before:translate-y-full before:border-l-8 before:border-t-[#01A982] before:border-r-transparent before:border-b-transparent before:border-l-transparent"
      >
        填寫問卷、玩互動卡牌診斷占卜，並瀏覽下方資訊，將有機會參與抽獎活動
      </p>
    </div>
  </a>
</template>
