<script lang="ts" setup>
  import LoaderSvg from '@/assets/svg/loader.svg?skipsvgo'

  type CardInfo = {
    title: string
    firstText: string
    secondText: string
    subtitle: string
    description: string
    optionId: string
  }

  const cardData: CardInfo[] = [
    {
      title: '資料管理混亂',
      firstText: 'Data',
      secondText: 'Data',
      subtitle: '資料散落各處，治理效率下降',
      description: '企業資料散布在不同系統、找不到關鍵資訊、備份時間冗長',
      optionId: 'A'
    },
    {
      title: '資安防護缺口',
      firstText: 'Cyber',
      secondText: 'Resilience',
      subtitle: '勒索病毒威脅加劇，沒有 NIST 2.0 架構造成現有防護措施漏洞頻現',
      description: '擔心勒索病毒攻擊、確保資料安全合規、快速災難復原',
      optionId: 'B'
    },
    {
      title: '虛擬化成本暴增',
      firstText: 'VMware',
      secondText: 'Alternative',
      subtitle: 'VMware 授權費暴漲，IT 預算吃緊難以為繼',
      description: 'VMware 授權費暴漲、尋找高效能替代方案、控制總擁有成本',
      optionId: 'C'
    },
    {
      title: 'AI 效能瓶頸',
      firstText: 'AI',
      secondText: 'AI',
      subtitle: 'AI 專案進展緩慢，昂貴 GPU 使用率低落',
      description: 'GPU 使用率低落、AI 訓練速度慢、資料讀取成為瓶頸',
      optionId: 'D'
    }
  ]

  enum GameStep {
    Initial = 0,
    Started = 1,
    CardReady = 2,
    SelectFinish = 3,
    Loading = 4,
    Completed = 5
  }

  const gameStep = ref<GameStep>(GameStep.Initial)
  const cardStep = ref<number>(-1)
  let intervalId: number | undefined
  const loadingPercent = ref<number>(0)
  const loadingTextArray = ref<string[]>(['正在分析您的儲存環境...', '找出潛在風險點...'])

  const startGame = () => {
    gameStep.value = GameStep.Started
  }

  const restartGame = () => {
    gameStep.value = GameStep.Initial
    cardStep.value = -1
    loadingPercent.value = 0
    cardSelected.splice(0, cardSelected.length)
    if (intervalId) clearInterval(intervalId)
  }

  watch(gameStep, () => {
    if (gameStep.value === GameStep.Started) {
      intervalId = setInterval(() => {
        if (cardStep.value < 4) {
          cardStep.value += 1
        } else {
          gameStep.value = GameStep.CardReady
          if (intervalId) clearInterval(intervalId)
          cardStep.value = 0
        }
      }, 200)
    }

    if (gameStep.value === GameStep.Loading) {
      let percent = 0
      intervalId = setInterval(() => {
        if (percent < 100) {
          percent += 1
          loadingPercent.value = percent
        } else {
          gameStep.value = GameStep.Completed
          if (intervalId) clearInterval(intervalId)
        }
      }, 30)
    }
  })

  const cardSelected = reactive<string[]>([])

  const selectCard = (optionId: string) => {
    if (gameStep.value !== GameStep.CardReady) return
    if (!cardSelected.includes(optionId)) {
      cardSelected.push(optionId)
    } else {
      const index = cardSelected.indexOf(optionId)
      if (index > -1) {
        cardSelected.splice(index, 1)
      }
    }
  }

  const optionConfirm = () => {
    if (cardSelected.length === 0) {
      alert('請至少選擇一張卡片')
      return
    }
    gameStep.value = GameStep.SelectFinish
    setTimeout(() => {
      gameStep.value = GameStep.Loading
    }, 500)
  }
</script>

<template>
  <section
    class="w-full relative overflow-hidden before:absolute before:w-full before:min-h-[13vw] before:top-0 before:left-0 before:bg-linear-to-b before:from-[#292D3A] before:to-transparent before:content-[''] before:z-10 after:absolute after:w-full after:min-h-[13vw] after:bottom-0 after:left-0 after:bg-linear-to-t after:from-[#3E4350] after:to-transparent after:content-[''] after:z-10"
  >
    <video class="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoplay loop muted playsinline width="100%">
      <source src="@/assets/images/wave-bg.mp4" type="video/mp4" />
      您的瀏覽器不支援影片播放
    </video>
    <div class="relative w-full h-full flex items-center justify-center z-20">
      <div class="w-0 md:w-3/10 2xl:w-1/4 h-full"></div>
      <div class="w-full md:w-7/10 2xl:w-3/4 h-full px-6 sm:px-12 md:px-6 lg:px-8 xl:px-12 py-20">
        <div class="w-full">
          <div
            class="ai-heading inline-block pr-8 pl-40 lg:pl-30 py-3 bg-linear-to-b from-black/50 to-[#292D3A]/30 backdrop-blur-xs rounded-2xl"
          >
            <img src="@/assets/images/robot.png" alt="robot" class="absolute left-4 bottom-0 w-30 lg:w-24" />
            <h2 class="text-white text-xl lg:text-2xl 2xl:text-3xl font-bold">
              <span
                class="text-3xl lg:text-4xl 2xl:text-5xl bg-clip-text text-transparent bg-linear-to-br from-[#01A982] to-[#62E5F6] HPEGraphikBold"
                >30</span
              >
              秒為您剖析 <span class="HPEGraphikBold">HPE</span> 將如何解決您企業正面臨的資料韌性挑戰
            </h2>
            <h5 class="text-sm md:text-base lg:text-lg text-[#E6E8E9] mt-1 ml-1">
              點選 <span class="HPEGraphikRegular">1-4</span> 張卡片（可複選），根據選擇組合，跳出對應診斷結果
            </h5>
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <div v-if="gameStep < GameStep.Loading" class="mt-15 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- 卡片範例（複製 4 次） -->
            <GameSectionCard
              v-for="(item, index) in cardData"
              :key="item.firstText"
              :index="index"
              :game-step="gameStep"
              :card-step="cardStep"
              :card-selected="cardSelected"
              @click="selectCard(item.optionId)"
            >
              <template #title>{{ item.title }}</template>
              <template #subtitle>{{ item.subtitle }}</template>
              <template #firstText>{{ item.firstText }}</template>
              <template #secondText>{{ item.secondText }}</template>
              <template #description>{{ item.description }}</template>
            </GameSectionCard>
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div
            v-if="gameStep === GameStep.Loading"
            class="w-full flex flex-col justify-center items-center py-[8vw] mt-15"
          >
            <h6 class="text-white text-lg xl:text-xl flex justify-center items-center gap-2 tracking-wide">
              <LoaderSvg class="w-6 h-6 xl:w-8 xl:h-8 animate-spin" />
              {{ loadingTextArray[Math.floor(loadingPercent / 50)] }}
            </h6>
            <div
              class="w-2/5 h-6 mt-6 rounded-full bg-linear-to-tr from-[#0070F8]/70 via-[#292D3A]/50 to-[#292D3A]/50 p-1.5"
            >
              <div class="relative w-full h-full">
                <div
                  class="absolute left-0 h-full rounded-full bg-linear-to-b to-[#007d60] via-[#8cffe6] from-[#00E0AF] animate-loadProgress"
                  :style="`width: ${loadingPercent}%`"
                ></div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <template v-if="gameStep === GameStep.Completed">
            <GameAnswer :answer="'A1'" />
          </template>
        </transition>

        <div class="w-full flex justify-center items-center mt-15">
          <template v-if="gameStep <= GameStep.Started">
            <button
              type="button"
              class="submit-button relative inline-flex justify-center items-center gap-1 text-white text-shadow-sm/20 font-semibold px-20 py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
              :class="{ 'pointer-events-none disabled': gameStep === GameStep.Started }"
              @click="startGame"
            >
              <span class="text-lg">開始測驗</span>
            </button>
          </template>
          <transition name="fade" mode="out-in">
            <template v-if="gameStep === GameStep.CardReady">
              <div
                class="flex justify-center items-center gap-2 bg-linear-to-br from-[#0070F8]/50 via-[#292D3A]/50 to-[#292D3A]/50 pr-2 pl-6 py-2 rounded-full"
              >
                <h5 class="text-base text-gray-200">
                  <template v-if="!cardSelected.length">
                    請點選 <span class="HPEGraphikRegular">1-4</span> 張卡片（可複選）
                  </template>
                  <template v-else-if="cardSelected.length"
                    >已選擇 <span class="HPEGraphikRegular">{{ cardSelected.length }}</span> 張卡片
                  </template>
                </h5>
                <button
                  type="button"
                  class="submit-button relative inline-flex justify-center items-center gap-1 text-white text-shadow-sm/20 font-semibold px-6 py-1 z-10 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
                  :class="{ 'pointer-events-none disabled': cardSelected.length === 0 }"
                  @click="optionConfirm"
                >
                  <span class="text-lg">確認</span>
                </button>
              </div>
            </template>
          </transition>
          <transition name="fade" mode="out-in">
            <template v-if="gameStep === GameStep.Completed">
              <button
                type="button"
                class="submit-button relative inline-flex justify-center items-center gap-1 text-white text-shadow-sm/20 font-semibold px-20 py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
                @click="restartGame"
              >
                <span class="text-lg">重新測驗</span>
              </button>
            </template>
          </transition>
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

  .submit-button {
    &:before {
      background: linear-gradient(90deg, #01a982, #00e0af 25%, #62e5f6 50%, #0070f8);
      background-size: 300% auto; // 背景尺寸設定 3 倍大
      transition: all 0.2s; // 漸變效果與時間
    }

    &:hover:before {
      // 重新調整背景尺寸與定位
      background-position: 100% 0;
      background-size: 200% auto;
    }

    &:active:before {
      background: linear-gradient(90deg, #01a982, #00e0af 25%, #0070f8 50%, #7764fc);
      background-position: 100% 0;
      background-size: 200% auto;
    }

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
