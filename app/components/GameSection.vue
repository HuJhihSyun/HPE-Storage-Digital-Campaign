<script lang="ts" setup>
  const featureData = [
    {
      title: '資料管理混亂',
      firstText: 'Data',
      secondText: 'Data',
      subtitle: '資料散落各處，治理效率下降',
      description: '企業資料散布在不同系統、找不到關鍵資訊、備份時間冗長'
    },
    {
      title: '資安防護缺口',
      firstText: 'Cyber',
      secondText: 'Resilience',
      subtitle: '勒索病毒威脅加劇，沒有 NIST 2.0 架構造成現有防護措施漏洞頻現',
      description: '擔心勒索病毒攻擊、確保資料安全合規、快速災難復原'
    },
    {
      title: '虛擬化成本暴增',
      firstText: 'VMware',
      secondText: 'Alternative',
      subtitle: 'VMware 授權費暴漲，IT 預算吃緊難以為繼',
      description: 'VMware 授權費暴漲、尋找高效能替代方案、控制總擁有成本'
    },
    {
      title: 'AI 效能瓶頸',
      firstText: 'AI',
      secondText: 'AI',
      subtitle: 'AI 專案進展緩慢，昂貴 GPU 使用率低落',
      description: 'GPU 使用率低落、AI 訓練速度慢、資料讀取成為瓶頸'
    }
  ]
</script>

<template>
  <section
    class="w-full relative overflow-hidden before:absolute before:w-full before:min-h-[13vw] before:top-0 before:left-0 before:bg-linear-to-b before:from-[#292D3A] before:to-transparent before:content-[''] before:z-10"
  >
    <!-- <video src="@/assets/images/wave-bg.mp4" width="100%" autoplay="true" controls="false" loop="true"></video> -->
    <video class="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoplay loop muted playsinline width="100%">
      <source src="@/assets/images/wave-bg.mp4" type="video/mp4" />
      您的瀏覽器不支援影片播放
    </video>
    <div class="relative w-full h-full flex items-center justify-center z-20 pointer-events-none">
      <div class="w-3/10 2xl:w-1/4 h-full border border-white border-dashed"></div>
      <div class="w-7/10 2xl:w-3/4 h-full px-12 pb-10 border border-white border-dashed">
        <div class="w-full mt-20">
          <div
            class="ai-heading inline-block pr-8 pl-30 py-3 bg-linear-to-b from-black/50 to-[#292D3A]/30 backdrop-blur-xs rounded-2xl"
          >
            <img src="@/assets/images/robot.png" alt="robot" width="90" class="absolute left-5 bottom-0" />
            <h2 class="text-white text-xl lg:text-2xl 2xl:text-3xl font-bold">
              <span
                class="text-3xl lg:text-4xl 2xl:text-5xl bg-clip-text text-transparent bg-linear-to-br from-[#01A982] to-[#62E5F6] HPEGraphikBold"
                >30</span
              >
              秒為您剖析 <span class="HPEGraphikBold">HPE</span> 將如何解決您企業正面臨的資料韌性挑戰
            </h2>
            <h5 class="text-lg text-white mt-1 ml-1">
              點選 <span class="HPEGraphikRegular">1-4</span> 張卡片（可複選），根據選擇組合，跳出對應診斷結果
            </h5>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-4 gap-4">
          <!-- 卡片範例（複製 4 次） -->
          <GameSectionCard v-for="item in featureData" :key="item.firstText">
            <template #title>{{ item.title }}</template>
            <template #subtitle>{{ item.subtitle }}</template>
            <template #firstText>{{ item.firstText }}</template>
            <template #secondText>{{ item.secondText }}</template>
            <template #description>{{ item.description }}</template>
          </GameSectionCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .ai-heading {
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
      background: linear-gradient(90deg, #00e0af, #292d3a);
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
