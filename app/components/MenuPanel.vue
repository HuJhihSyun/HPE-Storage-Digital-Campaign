<script setup lang="ts">
  interface MenuItems {
    name: string
    link: string
    id: string
    target?: string
  }

  const menuItems: MenuItems[] = [
    { name: '互動遊戲', link: '#', id: 'game', target: '_self' },
    { name: '點擊有好康', link: 'https://forms.gle/2e3GoPMxkrLGgWte8', id: 'lottery', target: '_blank' }
  ]

  // 活動開始時間 2025 年 12 月 29 日 12:00
  // 活動結束時間 2026 年 1 月 19 日 23:59
  const eventStartTime = new Date('2025-12-29T12:00:00')
  const eventEndTime = new Date('2026-01-19T23:59:59')
  const currentTime = ref(new Date())

  const isEventActive = computed(() => {
    return currentTime.value >= eventStartTime && currentTime.value <= eventEndTime
  })

  const targetTime = ref<Date | null>(null)
  targetTime.value = currentTime.value < eventStartTime ? eventStartTime : eventEndTime

  const diff = targetTime.value ? targetTime.value.getTime() - currentTime.value.getTime() : 0
  const days = ref(Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = ref(Math.floor((diff / (1000 * 60 * 60)) % 24))
  const minutes = ref(Math.floor((diff / (1000 * 60)) % 60))
  const seconds = ref(Math.floor((diff / 1000) % 60))

  const updateCountdown = () => {
    currentTime.value = new Date()
    const diff = targetTime.value ? targetTime.value.getTime() - currentTime.value.getTime() : 0

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
    minutes.value = Math.floor((diff / (1000 * 60)) % 60)
    seconds.value = Math.floor((diff / 1000) % 60)
  }

  onMounted(() => {
    setInterval(updateCountdown, 1000)
  })
</script>

<template>
  <nav
    class="inline-block bg-linear-to-bl from-white/10 to-white/30 border border-white rounded-full py-2 lg:py-4 px-4 lg:px-6 xl:px-10 backdrop-blur-sm"
  >
    <ul class="flex justify-center items-center text-sm md:text-base xl:text-lg divide-x divide-white gap-4">
      <li
        v-for="item in menuItems"
        :key="item.id"
        class="text-white hover:text-[#62E5F6] pr-4 whitespace-nowrap pointer-events-auto"
      >
        <a :href="item.link" :target="item.target" rel="noopener noreferrer">{{ item.name }}</a>
      </li>
      <li class="text-white pr-4 flex justify-center items-center gap-2">
        <span class="whitespace-nowrap">{{
          currentTime > eventEndTime ? '活動已結束' : isEventActive ? '距離結束' : '距離下一次好康抽獎'
        }}</span>
        <client-only>
          <div class="flex justify-center items-center gap-2 xl:gap-3">
            <span
              class="bg-clip-text text-transparent bg-linear-to-br from-[#01A982] to-[#62E5F6] sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl HPEGraphikBold whitespace-nowrap"
              >{{ days }}</span
            >
            天
            <span
              class="bg-clip-text text-transparent bg-linear-to-br from-[#01A982] to-[#62E5F6] sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl HPEGraphikBold whitespace-nowrap"
              >{{ hours }}</span
            >
            時
            <span
              class="bg-clip-text text-transparent bg-linear-to-br from-[#01A982] to-[#62E5F6] sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl HPEGraphikBold whitespace-nowrap"
              >{{ minutes }}</span
            >
            分
          </div>
        </client-only>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
