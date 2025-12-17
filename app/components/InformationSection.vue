<script lang="ts" setup>
  import type { Component, FunctionalComponent } from 'vue'
  import buildingSvg from '@/assets/svg/building.svg?skipsvgo'
  import zapSvg from '@/assets/svg/zap.svg?skipsvgo'
  import shieldSvg from '@/assets/svg/shield.svg?skipsvgo'
  import rocketSvg from '@/assets/svg/rocket.svg?skipsvgo'
  import scrollTextSvg from '@/assets/svg/scroll-text.svg?skipsvgo'
  import databaseSvg from '@/assets/svg/database.svg?skipsvgo'
  import cogSvg from '@/assets/svg/cog.svg?skipsvgo'
  import bankSvg from '@/assets/svg/bank.svg?skipsvgo'
  import wifiSvg from '@/assets/svg/wifi.svg?skipsvgo'
  import youtubeSvg from '@/assets/svg/youtube.svg?skipsvgo'
  import story1Pic from '@/assets/images/story-1.jpg'
  import story2Pic from '@/assets/images/story-2.jpg'
  import story3Pic from '@/assets/images/story-3.jpg'

  import { useWindowSize } from '@vueuse/core'
  const { width } = useWindowSize()

  type ToolBoxItem = {
    id: string
    title: string
    description: string
    icon: FunctionalComponent | Component
    link?: string
  }

  const toolBoxData: ToolBoxItem[] = [
    {
      id: 'architecture-guide',
      title: '企業儲存架構設計指南',
      description: '系統工程師必備的架構規劃藍圖',
      icon: markRaw(scrollTextSvg),
      link: 'https://paths.ext.hpe.com/c/a50011727enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },
    {
      id: 'performance-benchmark',
      title: '高效能儲存效能基準',
      description: '數據說話的產品實力證明',
      icon: markRaw(zapSvg),
      link: 'https://paths.ext.hpe.com/c/a50011634enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },
    {
      id: 'data-protection-whitepaper',
      title: '企業級資料安全解決方案',
      description: '多層防護架構技術白皮書',
      icon: markRaw(shieldSvg),
      link: 'https://paths.ext.hpe.com/c/a50011636enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },
    {
      id: 'storage-for-ai-ml',
      title: 'AI/ML 工作負載儲存最佳化',
      description: '大數據時代的儲存加速方案',
      icon: markRaw(rocketSvg),
      link: 'https://paths.ext.hpe.com/c/a50011909enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },
    {
      id: 'digital-transformation-storage-strategy',
      title: '企業數位轉型儲存策略',
      description: '傳統 IT 向現代化架構轉型指南',
      icon: markRaw(buildingSvg),
      link: 'https://paths.ext.hpe.com/c/a50011908enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },
    {
      id: 'data-modernization-guide',
      title: '資料現代化轉型指南',
      description: '結構化資料升級的完整策略',
      icon: markRaw(databaseSvg),
      link: 'https://paths.ext.hpe.com/c/a00149502enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    }
  ]

  const techPackage: ToolBoxItem[] = [
    {
      id: 'storage-optimization',
      title: '創新儲存 9 招',
      description: '2 分鐘掌握未來儲存趨勢',
      icon: markRaw(databaseSvg),
      link: 'https://paths.ext.hpe.com/c/a00149500enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },
    {
      id: 'cyber-resilience',
      title: '資安防護寶典',
      description: '4 分鐘建立勒索病毒防線',
      icon: markRaw(shieldSvg),
      link: 'https://paths.ext.hpe.com/c/a00149503enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    }
  ]

  type SuccessStory = {
    id: string
    title: string
    description: string
    icon: FunctionalComponent | Component
    image: string
    link: string
  }

  const successStories: SuccessStory[] = [
    {
      id: 'story-3',
      title: 'HPE 攜手中華電信領先業界打造 IDC 災難備援服務',
      description: '將資料恢復時間從數週縮短到數分鐘，業務連續性的真實驗證',
      icon: markRaw(wifiSvg),
      image: story3Pic,
      link: 'https://www.idc.hinet.net/EnhancedService_Recovery.html',
    },
    {
      id: 'story-1',
      title: '驊陞科技｜35年製造老廠的 AI 智慧工廠轉型之路',
      description: '看傳統製造業如何建立能共同面對未來挑戰的數據夥伴關係',
      icon: markRaw(cogSvg),
      image: story1Pic,
      link: 'https://www.ithome.com.tw/pr/172244',
    },
    {
      id: 'story-2',
      title: '英國銀行混合雲轉型實錄',
      description: '個人化銀行服務的混合雲實踐之路',
      icon: markRaw(bankSvg),
      image: story2Pic,
      link: 'https://paths.ext.hpe.com/c/a50011607enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
    },

  ]
</script>

<template>
  <section class="relative overflow-hidden bg-[url(@/assets/images/bg-1.jpg)] bg-cover bg-top">
    <div class="relative w-full h-full flex items-center justify-center z-20">
      <div class="w-0 md:w-3/10 2xl:w-1/4 h-full"></div>
      <div class="w-full md:w-7/10 2xl:w-3/4 h-full px-6 sm:px-12 md:px-6 lg:px-8 xl:px-12">
        <div class="flex flex-col lg:flex-row justify-center items-start gap-8 2xl:gap-10 mt-10 mb-20 md:my-10 lg:my-20">
          <div class="w-full lg:w-1/3">
            <div class="w-full">
              <h4
                class="relative pl-4 text-white text-lg lg:text-xl 2xl:text-2xl font-bold before:absolute before:content-[''] before:w-1 before:h-full before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:left-0 leading-none"
              >
                實戰工具箱
                <span
                  class="text-[#00E0AF] text-xs HPEGraphikRegular ml-1 border border-[#00E0AF] rounded-full px-2 py-0.5 whitespace-nowrap"
                  >讓決策更簡單</span
                >
              </h4>
              <div
                class="basic-panel w-full mt-4 px-4 py-4 xl:px-6 xl:py-3 gap-4 xl:gap-6 bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl flex justify-center items-center overflow-hidden"
              >
                <div class="w-full flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
                  <a
                    v-for="(item, index) in toolBoxData"
                    :key="item.id"
                    :href="item.link"
                    target="_blank"
                    class="inline-flex justify-center items-start pl-4 lg:pl-0 py-3 gap-2 border-gray-500 hover:bg-white/10 hover:pl-5 lg:hover:px-2 cursor-pointer transition-all duration-200"
                    :class="{ 'border-r-0 sm:border-r lg:border-r-0': index % 2 === 0 && index < toolBoxData.length - 1, 'border-b': index < toolBoxData.length - 2 || index === 4 && (width >= 1024 || width < 640) }"
                  >
                    <component :is="item.icon" class="inline-block min-w-5 w-5 h-5 lg:min-w-6 lg:w-6 lg:h-6 mt-1 text-[#62E5F6]" />
                    <div class="w-full">
                      <h5
                        class="text-base xl:text-lg font-medium bg-clip-text text-transparent bg-linear-to-bl from-[#00E0AF] to-[#62E5F6] HPEGraphikMedium whitespace-nowrap"
                      >
                        {{ item.title }}
                      </h5>
                      <h6 class="text-xs xl:text-sm font-light text-white HPEGraphikRegular">
                        {{ item.description }}
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full mt-8 lg:mt-10">
              <h4
                class="relative pl-4 text-white text-lg lg:text-xl 2xl:text-2xl font-bold before:absolute before:content-[''] before:w-1 before:h-full before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:left-0 leading-none"
              >
                技術知識包
                <span
                  class="text-[#00E0AF] text-xs HPEGraphikRegular ml-1 border border-[#00E0AF] rounded-full px-2 py-0.5 whitespace-nowrap"
                  >複雜問題簡單說</span
                >
              </h4>
              <div
                class="basic-panel w-full mt-4 py-2 px-4 lg:py-1 xl:px-6 xl:py-3 gap-4 xl:gap-6 bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl flex justify-center items-center overflow-hidden"
              >
                <div class="w-full flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
                  <a
                    v-for="(item, index) in techPackage"
                    :key="item.id"
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex justify-center items-start px-4 lg:px-0 py-3 gap-2 border-gray-500 hover:bg-white/10 hover:px-5 lg:hover:px-2 cursor-pointer transition-all duration-200"
                    :class="{ 'border-r-0 sm:border-r lg:border-r-0': index % 2 === 0 && index < techPackage.length - 1, 'border-b sm:border-b-0 lg:border-b': index === 0 }"
                  >
                    <component :is="item.icon" class="inline-block min-w-5 w-5 h-5 lg:min-w-6 lg:w-6 lg:h-6 mt-1 text-[#62E5F6]" />
                    <div class="w-full">
                      <h5
                        class="text-base xl:text-lg font-medium bg-clip-text text-transparent bg-linear-to-bl from-[#00E0AF] to-[#62E5F6] HPEGraphikMedium whitespace-nowrap"
                      >
                        {{ item.title }}
                      </h5>
                      <h6 class="text-xs xl:text-sm font-light text-white HPEGraphikRegular">
                        {{ item.description }}
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-2/3">
            <div class="w-full">
              <h4
                class="relative pl-4 text-white text-lg lg:text-xl 2xl:text-2xl font-bold before:absolute before:content-[''] before:w-1 before:h-full before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:left-0 leading-none"
              >
                成功故事櫥窗
                <span
                  class="text-[#00E0AF] text-xs HPEGraphikRegular ml-1 border border-[#00E0AF] rounded-full px-2 py-0.5 whitespace-nowrap"
                  >同行都在這樣做</span
                >
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-3 mt-4 gap-2">
                <a
                  v-for="story in successStories"
                  :key="story.id"
                  :href="story.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="basic-panel inline-block w-full bg-linear-to-b from-black/50 to-[#292d3a]/50 backdrop-blur-xs rounded-2xl group"
                >
                  <img :src="story.image" class="relative aspect-3/2 w-full bg-gray-500/50 rounded-2xl">
                    <div
                      class="absolute left-2 top-2 w-7 h-7 p-1 aspect-square bg-linear-to-br from-[#00E0AF] to-[#62E5F6] group-hover:from-[#00E0AF] group-hover:to-[#0070F8] rounded-lg flex justify-center items-center"
                    >
                      <component :is="story.icon" class="inline-block w-full h-full text-white" />
                    </div>
                  </img>
                  <div class="w-full p-3">
                    <h5 class="text-sm sm:text-[13px] md:text-sm xl:text-[15px] font-medium HPEGraphikMedium bg-clip-text text-transparent bg-linear-to-bl from-[#00E0AF] to-[#62E5F6] group-hover:from-[#00E0AF] group-hover:to-[#0070F8]">
                      {{ story.title }}
                    </h5>
                    <h6 class="text-xs md:text-[13px] xl:text-sm font-light text-gray-200 group-hover:text-white HPEGraphikRegular mt-1">
                      {{ story.description }}
                    </h6>
                  </div>
                </a>
              </div>
            </div>
            <div class="w-full mt-8 lg:mt-10">
              <h4
                class="relative pl-4 text-white text-lg lg:text-xl 2xl:text-2xl font-bold before:absolute before:content-[''] before:w-1 before:h-full before:bg-linear-to-br before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:left-0 leading-none"
              >
                影音說書人
                <span
                  class="text-[#00E0AF] text-xs HPEGraphikRegular ml-1 border border-[#00E0AF] rounded-full px-2 py-0.5 whitespace-nowrap"
                  >複雜技術輕鬆看</span
                >
              </h4>
              <div
                class="relative mt-4 w-full rounded-2xl border border-[#05CC93] aspect-160/91 p-1.5 flex justify-center items-center before:absolute before:content-[''] before:w-15 before:h-1 before:rounded-full before:bg-linear-to-r before:from-[#00E0AF] before:to-[#62E5F6] before:top-0 before:-translate-y-0.5 before:right-1/10 after:absolute after:content-[''] after:w-20 after:h-1 after:rounded-full after:bg-linear-to-r after:from-[#00E0AF] after:to-[#62E5F6] after:bottom-0 after:translate-y-0.5 after:left-1/10"
              >
                <a href="https://paths.ext.hpe.com/c/v100008296enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500" target="_blank" class="relative inline-block w-full aspect-video group rounded-xl overflow-hidden before:absolute before:content-[''] before:w-full before:h-full before:bg-linear-to-b before:from-black/0 before:via-black/0 before:to-black/0 hover:before:to-black/50 group-hover:before:to-black/90 before:transition-all before:duration-200">
                  <img src="@/assets/images/video-cover.jpg" alt="Revolutionize Date Management with HPE Storage" width="100%" />
                  <div class="left-1/2 top-1/2 -translate-1/2 flex flex-col justify-center items-center absolute w-full gap-2">
                    <p class="text-white text-shadow-lg/20 group-hover:text-shadow-lg/30 text-lg lg:text-xl 2xl:text-2xl font-bold HPEGraphikSemiBold transition-all duration-75 z-10">1 分鐘看懂 HPE 如何革新資料管理</p>
                    <youtubeSvg class="w-12 h-12 lg:w-16 lg:h-16 text-[#00E0AF] group-hover:text-[#05CC93] text-shadow-white/20 transition-all duration-75 z-10" />
                  </div>
                </a>
              </div>
            </div>
            <div class="w-full mt-8 lg:mt-10">
              <a href="https://www.hpe.com/psnow/doc/a50003981enw" target="_blank"
            class="inline-block pl-4 pr-4 sm:pl-8 sm:pr-40 lg:pr-30 pb-3 pt-2 bg-linear-to-b from-[#01A982]/50 to-[#0070F8]/30 hover:from-[#01A982] hover:to-[#0070F8]/50 backdrop-blur-xs rounded-2xl border border-[#00E0AF] transition-all duration-200"
          >
            <img src="@/assets/images/robot-r.png" alt="robot" class="absolute hidden sm:block right-4 bottom-0 w-30 lg:w-24" />
            <h2 class="text-white text-sm sm:text-lg lg:text-xl 2xl:text-2xl font-bold">
              立即行動，搶先體驗業界唯一
              <span
                class="text-2xl lg:text-3xl 2xl:text-4xl bg-clip-text text-transparent bg-linear-to-b from-white to-[#D4D8DB] HPEGraphikSemiBold"
                >8</span
              >
              大資料保證
            </h2>
            <h5 class="text-xs md:text-sm lg:text-base text-[#E6E8E9] tracking-wide mt-1 ml-1">
              <span class="HPEGraphikRegular">HPE</span> 將為您提供現況評估與痛點診斷、客製化解決方案建議、<span class="HPEGraphikRegular">ROI</span> 試算與成本分析、成功案例分享
            </h5>
          </a>
          <h6 class="text-right text-[11px] sm:text-xs text-[#62E5F6] mt-2 text-shadow-2xs/30">加碼好康：完整參與卡牌占卜診斷、填寫問卷，科技好禮等你拿！</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
