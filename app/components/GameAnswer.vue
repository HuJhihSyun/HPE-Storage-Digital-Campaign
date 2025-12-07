<script lang="ts" setup>
  interface answerProps {
    answer: string
  }
  const props = withDefaults(defineProps<answerProps>(), {
    answer: 'A1'
  })

  type Solution = {
    id: string
    title: string
    solution: string
    highlight: string
  }

  const solutionData = reactive<Solution[]>([
    {
      id: 'A1',
      title: '資料散落各處，治理效率低落',
      solution: 'HPE Storage 統一資料平台，實現集中管理',
      highlight: '提升 80% 資料檢索效率，減少 70% 儲存成本'
    },
    {
      id: 'A2',
      title: '資安防護存在缺口，急需加強',
      solution: '符合 NIST 2.0 五層防護資安框架架構，從識別到恢復，全面抵禦勒索病毒',
      highlight: '99.9% 防護成功率，RPO 接近零的災難恢復'
    },
    {
      id: 'A3',
      title: '虛擬化成本失控，急需替代方案',
      solution: 'HPE Morpheus VM Essentials，無痛VMware替代',
      highlight: '節省 90% 授權成本，效能提升30%'
    },
    {
      id: 'A4',
      title: 'AI 效能受限，GPU 使用率待提升',
      solution: 'HPE AI-Ready Storage，專為AI工作負載設計',
      highlight: 'GPU 使用率提升到 95%，AI 訓練速度翻倍'
    },
    {
      id: 'B1',
      title: '資料治理與安全防護並重',
      solution: '整合式資料保護平台，一站解決管理與安全',
      highlight: '統一管理降低 60% 維運成本，安全等級提升 200%'
    },
    {
      id: 'B2',
      title: '數據管理成本雙優化',
      solution: '統一資料平台降低複雜度與成本',
      highlight: '管理效率提升 80%，總成本節省 65%'
    },
    {
      id: 'B3',
      title: '資料管理遇上AI加速',
      solution: 'AI-Ready統一資料平台',
      highlight: '資料處理速度提升 3 倍，AI 專案上線時間縮短50%'
    },
    {
      id: 'B4',
      title: '安全與成本平衡之道',
      solution: '高安全性低成本儲存解決方案',
      highlight: '安全投資 ROI 提升 400%，防護成本降低 45%'
    },
    {
      id: 'B5',
      title: 'AI 時代的安全防護',
      solution: 'AI 驅動的安全儲存架構',
      highlight: 'AI 安全分析能力提升 5 倍，威脅識別準確率 99.8%'
    },
    {
      id: 'B6',
      title: '現代化轉型：成本控制與AI效能雙贏',
      solution: '高效能低成本存儲，專為新一代應用優化',
      highlight: '成本節省 90% 同時，AI 效能提升 3 倍'
    },
    {
      id: 'C1',
      title: '企業三大核心挑戰的整合解決方案',
      solution: '全方位儲存平台，同時解決效率、安全、成本',
      highlight: '整體 TCO 降低 75%，管理複雜度減少 80%'
    },
    {
      id: 'C2',
      title: '邁向智慧企業的全面升級',
      solution: 'AI 驅動安全智慧儲存平台',
      highlight: '企業數位轉型加速 200%，智慧化程度提升 10 倍'
    },
    {
      id: 'C3',
      title: '新一代企業數位基礎架構',
      solution: '兼顧效率、成本、AI 的未來儲存',
      highlight: 'AI Ready 基礎架構，投資回收期縮短 60%'
    },
    {
      id: 'C4',
      title: '現代化IT基礎建設完整藍圖',
      solution: '安全、經濟、智慧的儲存解決方案',
      highlight: '安全性 + 效能 + 成本三贏，未來擴展能力提升 500%'
    },
    {
      id: 'C5',
      title: '企業數位轉型的全方位儲存挑戰',
      solution: 'HPE Storage 端到端解決方案，一次解決所有問題',
      highlight: '全面數位轉型 → ROI 提升 500%'
    }
  ])

  const selectedSolution = computed(() => {
    return solutionData && solutionData.find((solution) => solution.id === props.answer)
  })
</script>

<template>
  <div
    class="w-full flex justify-center items-center py-4 pl-4 pr-4 lg:pr-6 xl:pr-8 mt-15 bg-linear-to-br from-black/50 to-[#292d3a]/50 backdrop-blur-xs border-[#F7F7F7] border rounded-2xl gap-4 lg:gap-6 xl:gap-8 after:absolute after:content-[''] after:w-1/10 after:h-1 after:rounded-full after:bg-linear-to-r after:from-[#00E0AF] after:to-[#62E5F6] after:top-0 after:-translate-y-1/2 after:left-1/10 before:absolute before:content-[''] before:w-1/5 before:h-1 before:rounded-full before:bg-linear-to-r before:from-[#00E0AF] before:to-[#62E5F6] before:bottom-0 before:translate-y-1/2 before:-translate-x-1/2 before:left-1/2"
  >
    <div class="w-2/5 aspect-3/2 bg-white rounded-xl"></div>
    <div v-if="selectedSolution" class="w-3/5">
      <DigitalPattern class="mb-4" />
      <h3
        class="font-bold HPEGraphikBold leading-tight tracking-wide flex items-center gap-2 pb-3 border-b border-[#D4D8DB]"
      >
        <span
          class="inline-block text-base lg:text-lg 2xl:text-xl bg-linear-to-br from-[#00E0AF] to-[#62E5F6] text-black leading-none px-3 py-1 rounded-full"
        >
          {{
            selectedSolution.id && selectedSolution.id.includes('A')
              ? '您的挑戰'
              : selectedSolution.id.includes('B')
                ? '雙重挑戰'
                : '三大挑戰'
          }}
        </span>
        <span class="text-shadow-lg/30 text-white text-lg lg:text-xl 2xl:text-2xl">{{ selectedSolution.title }}</span>
      </h3>
      <p class="mt-4 text-white text-sm lg:text-base 2xl:text-lg">{{ selectedSolution.solution }}</p>
      <div
        class="banner-heading text-base 2xl:text-lg font-medium HPEGraphikSemiBold text-shadow-lg tracking-wide py-1.5 px-2 mt-4 bg-linear-to-br from-[#0070F8]/20 via-black/20 to-black/0 rounded-full z-10 after:absolute after:content-[''] after:w-15 after:h-1 after:rounded-full after:bg-linear-to-r after:from-[#00E0AF] after:to-[#62E5F6] after:top-0 after:-translate-y-1/2 after:left-1/10"
      >
        <h4 class="inline-block bg-clip-text text-transparent bg-linear-to-br from-[#00E0AF] to-[#62E5F6] to-70%">
          {{ selectedSolution.highlight }}
        </h4>
      </div>
    </div>

    <div
      class="absolute bottom-0 right-0 w-1/8 h-4 bg-[#F7F7F7] before:absolute before:content-[''] before:top-0 before:left-0 before:-translate-x-full before:w-0 before:h-0 before:border-solid before:border-t-0 before:border-r-0 before:border-b-16 before:border-l-10 before:border-t-transparent before:border-r-transparent before:border-b-[#F7F7F7] before:border-l-transparent flex justify-center items-center rounded-br-xl"
    >
      <ul class="w-full h-4/5 flex items-center justify-center gap-0.5">
        <li
          v-for="index in 10"
          class="w-1/20 h-full -skew-x-25"
          :class="{ 'bg-[#B1B9BE]': index < 5, 'border border-[#B1B9BE]': index >= 5 }"
        ></li>
      </ul>
    </div>
    <div
      class="absolute top-0 right-1/4 w-1/16 h-3 bg-[#F7F7F7] flex justify-center items-center before:absolute before:content-[''] before:top-0 before:left-0 before:-translate-x-full before:w-0 before:h-0 before:border-solid before:border-t-12 before:border-r-0 before:border-b-0 before:border-l-5 before:border-t-[#F7F7F7] before:border-r-transparent before:border-b-transparent before:border-l-transparent after:absolute after:content-[''] after:top-0 after:right-0 after:translate-x-full after:w-0 after:h-0 after:border-solid after:border-t-12 after:border-r-5 after:border-b-0 after:border-l-0 after:border-t-[#F7F7F7] after:border-r-transparent after:border-b-transparent after:border-l-transparent"
    >
      <ul class="w-full h-full flex items-center justify-center gap-0.5">
        <li
          v-for="index in 7"
          class="w-1 h-1 rounded-full"
          :class="{ 'bg-[#B1B9BE]': index < 3, 'border border-[#B1B9BE]': index >= 3 }"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
