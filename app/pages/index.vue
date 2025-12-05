<script setup lang="ts">
  import { Vue3Lottie } from 'vue3-lottie'
  import bannerBgLeft from '@/assets/images/banner-bg-left.svg?skipsvgo'
  import bannerBgRight from '@/assets/images/banner-bg-right.svg?skipsvgo'
  import bannerContent from '@/assets/images/banner-content.svg?skipsvgo'
  import bannerCircle from '@/assets/images/banner-circle.json'

  const featureData = [
    {
      id: 'security',
      title: '資安防護缺口',
      subtitle: 'Cyber Resilience',
      description: '勒索病毒威脅加劇，沒有 NIST 2.0 架構造成現有防護措施漏洞',
      content: '擔心勒索病毒攻擊、確保資料安全合規、快速災難復原'
    },
    {
      id: 'budget',
      title: '虛擬化成本暴增',
      subtitle: 'VMware Alternative',
      description: 'VMware 授權費暴漲，IT 預算吃緊難以為繼',
      content: 'VMware 授權費暴漲、尋找高效能替代方案、控制總擁有成本'
    },
    {
      id: 'ai',
      title: 'AI 效能瓶頸',
      subtitle: 'AI',
      description: 'AI 專案進展緩慢，昂貴GPU使用率低落',
      content: 'GPU 使用率低落、AI 訓練速度慢、資料讀取成為瓶頸'
    }
  ]
</script>

<template>
  <div>
    <header class="relative w-full h-[56vw] bg-linear-to-bl from-[#00E0AF] from-5% via-[#01A982] via-30% to-[#292D3A]">
      <bannerContent class="absolute w-1/2 top-[45%] right-1/20 -translate-y-1/2 z-20" />
      <client-only>
        <div class="absolute h-9/10 top-1/2 left-1/10 -translate-y-1/2 mix-blend-soft-light z-10">
          <Vue3Lottie :animationData="bannerCircle" direction="alternate" />
        </div>
      </client-only>
      <bannerBgRight class="absolute h-full right-0 top-1/2 -translate-y-1/2 mix-blend-color-dodge" />
      <bannerBgLeft class="absolute h-full left-0 top-1/2 -translate-y-1/2 mix-blend-color-dodge" />

      <div class="absolute w-full min-h-[13vw] bottom-0 left-0 bg-linear-to-t from-[#292D3A] to-transparent z-30">
        <div class="w-full h-full flex items-center justify-center">
          <div class="w-3/10 2xl:w-1/4 h-full"></div>
          <div class="w-7/10 2xl:w-3/4 px-6 xl:px-12 h-full">
            <h1
              class="text-white text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-5 HPEGraphikBold leading-tight text-shadow-lg/30 tracking-wide"
            >
              企業數位轉型， <br />從解決 4 大儲存挑戰開始
            </h1>
            <div
              class="banner-heading mb-16 text-xl lg:text-3xl 2xl:text-4xl font-semibold HPEGraphikSemiBold leading-tight text-shadow-lg tracking-wide py-3 px-6 w-4/5 bg-linear-to-br from-[#0070F8]/20 via-black/20 to-black/0 rounded-2xl after:absolute after:content-[''] after:w-15 after:h-1 after:rounded-full after:bg-linear-to-r after:from-[#00E0AF] after:to-[#62E5F6] after:top-0 after:-translate-y-1/2 after:left-1/10"
            >
              <h2 class="inline-block bg-clip-text text-transparent bg-linear-to-br from-[#00E0AF] to-[#62E5F6] to-70%">
                HPE Storage 全方位解決方案，讓您的 IT 基礎設施準備好迎接 AI 時代
              </h2>
            </div>
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
          <div class="flex justify-center items-center my-15">
            <h2
              class="relative w-1/3 text-white text-xl lg:text-2xl 2xl:text-3xl font-bold text-shadow-lg/30 leading-normal before:absolute before:content-[''] before:w-1/4 before:h-1 before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:-translate-y-1/2 before:left-0 pt-5 backdrop-blur-[2px]"
            >
              這些資料管理挑戰，<br />是不是讓您非常頭痛？
            </h2>
            <div class="w-2/3 flex flex-col justify-center items-center gap-8 mt-10">
              <FeaturePanel v-for="(feature, index) in featureData" :key="index" :id="feature.id">
                <template #title>{{ feature.title }}</template>
                <template #subtitle>{{ feature.subtitle }}</template>
                <template #description>{{ feature.description }}</template>
                <template #content>{{ feature.content }}</template>
              </FeaturePanel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GameSection />

    <section class="relative overflow-hidden pb-10 bg-[url(@/assets/images/bg-1.jpg)] bg-cover bg-top">
      <div class="relative w-full h-full flex items-center justify-center z-20 pointer-events-none">
        <div class="w-3/10 2xl:w-1/4 h-full border border-white border-dashed"></div>
        <div class="w-7/10 2xl:w-3/4 h-full px-12 border border-white border-dashed">
          <div class="flex justify-center items-start mt-20">
            <div class="w-1/3">
              <h4
                class="relative pl-4 text-white text-lg lg:text-xl 2xl:text-2xl font-bold before:absolute before:content-[''] before:w-1 before:h-full before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:left-0 leading-none"
              >
                實戰工具箱
                <span
                  class="text-[#00E0AF] text-xs HPEGraphikRegular ml-1 border border-[#00E0AF] rounded-full px-2 py-0.5"
                  >讓決策更簡單</span
                >
              </h4>
            </div>
            <div class="w-2/3">
              <h4
                class="relative pl-4 text-white text-lg lg:text-xl 2xl:text-2xl font-bold before:absolute before:content-[''] before:w-1 before:h-full before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:left-0 leading-none"
              >
                成功故事櫥窗
                <span
                  class="text-[#00E0AF] text-xs HPEGraphikRegular ml-1 border border-[#00E0AF] rounded-full px-2 py-0.5"
                  >同行都在這樣做</span
                >
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ClientOnly>
      <SubmitFormPanel />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
  .banner-heading {
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
      background: linear-gradient(90deg, #00e0af, rgba(#00e0af, 0));
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
