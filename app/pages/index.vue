<script setup lang="ts">
  import bannerBgLeft from '@/assets/images/banner-bg-left.svg?skipsvgo'
  import bannerBgRight from '@/assets/images/banner-bg-right.svg?skipsvgo'

  const featureData = [
    {
      title: '資料管理混亂',
      subtitle: 'Data',
      description: '資料散落各處，治理效率下降'
    },
    {
      title: '資安防護缺口',
      subtitle: 'Cyber Resilience',
      description: '勒索病毒威脅加劇，沒有 NIST 2.0 架構造成現有防護措施漏洞'
    },
    {
      title: '虛擬化成本暴增',
      subtitle: 'VMware Alternative',
      description: 'VMware 授權費暴漲，IT 預算吃緊難以為繼'
    },
    {
      title: 'AI 效能瓶頸',
      subtitle: 'AI',
      description: 'AI 專案進展緩慢，昂貴GPU使用率低落'
    }
  ]
</script>

<template>
  <div>
    <header class="relative w-full h-[56vw] bg-linear-to-bl from-[#00E0AF] from-5% via-[#01A982] via-30% to-[#292D3A]">
      <bannerBgRight class="absolute h-full right-0 top-1/2 -translate-y-1/2" />
      <bannerBgLeft class="absolute h-full left-0 top-1/2 -translate-y-1/2" />
      <div class="absolute w-full min-h-[13vw] bottom-0 left-0 bg-linear-to-t from-[#292D3A] to-transparent">
        <div class="w-full h-full flex items-center justify-center">
          <div class="w-3/10 2xl:w-1/4 h-full border border-white border-dashed"></div>
          <div class="w-7/10 2xl:w-3/4 px-6 h-full border border-white border-dashed">
            <h1
              class="text-white text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4 HPEGraphikBold leading-tight text-shadow-lg/30 tracking-wide"
            >
              企業數位轉型， <br />從解決 4 大儲存挑戰開始
            </h1>
            <h2
              class="mb-16 bg-clip-text text-transparent bg-linear-to-br from-[#00E0AF] to-[#62E5F6] to-70% text-xl lg:text-2xl 2xl:text-3xl font-semibold HPEGraphikSemiBold leading-tight text-shadow-lg tracking-wide"
            >
              HPE Storage 全方位解決方案，讓您的 IT 基礎設施準備好迎接 AI 時代
            </h2>
          </div>
        </div>
      </div>
    </header>

    <section class="relative overflow-hidden pb-10">
      <ClientOnly>
        <DotCanvasBackground class="absolute h-full z-10" />
      </ClientOnly>
      <div class="relative w-full h-full flex items-center justify-center z-20 pointer-events-none">
        <div class="w-3/10 2xl:w-1/4 h-full border border-white border-dashed"></div>
        <div class="w-7/10 2xl:w-3/4 h-full px-12 border border-white border-dashed">
          <MenuPanel />
          <h2 class="mt-30 text-white text-xl lg:text-2xl 2xl:text-3xl font-bold">
            這些資料管理挑戰，是不是讓您非常頭痛？
          </h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <FeaturePanel v-for="(feature, index) in featureData" :key="index">
              <template #title>{{ feature.title }}</template>
              <template #subtitle>{{ feature.subtitle }}</template>
              <template #description>{{ feature.description }}</template>
            </FeaturePanel>
          </div>
        </div>
      </div>
    </section>

    <GameSection />

    <section class="relative overflow-hidden pb-10 bg-[url(@/assets/images/bg-1.jpg)] bg-cover bg-top">
      <div class="relative w-full h-full flex items-center justify-center z-20 pointer-events-none">
        <div class="w-3/10 2xl:w-1/4 h-full border border-white border-dashed"></div>
        <div class="w-7/10 2xl:w-3/4 h-full px-12 border border-white border-dashed">
          <h2 class="mt-30 text-white text-xl lg:text-2xl 2xl:text-3xl font-bold">
            這些資料管理挑戰，是不是讓您非常頭痛？
          </h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <FeaturePanel v-for="(feature, index) in featureData" :key="index">
              <template #title>{{ feature.title }}</template>
              <template #subtitle>{{ feature.subtitle }}</template>
              <template #description>{{ feature.description }}</template>
            </FeaturePanel>
          </div>
        </div>
      </div>
    </section>

    <ClientOnly>
      <SubmitFormPanel />
    </ClientOnly>
  </div>
</template>
