<script lang="ts" setup>
  import LoaderSvg from '@/assets/svg/loader.svg?skipsvgo'

  type CardInfo = {
    title: string
    firstText: string
    secondText: string
    subtitle: string
    description: string
    problem?: Array<string>
    optionId: string
  }

  const cardData: CardInfo[] = [
    {
      title: '可用的數據資安防護',
      firstText: 'Cyber',
      secondText: 'Resilience',
      subtitle: '強化數位韌性，將資料恢復時間從數週縮短到數分鐘',
      description: '擔心勒索病毒攻擊、確保資料安全合規、快速災難復原',
      problem: ['資安', '備援'],
      optionId: 'B'
    },
    {
      title: '新型態虛擬化策略',
      firstText: 'VMware',
      secondText: 'Alternative',
      subtitle: '不必被單一方案綁定，重新評估虛擬化成本結構',
      description: 'VMware 授權費暴漲、尋找高效能替代方案、控制總擁有成本',
      problem: ['虛擬化', '成本'],
      optionId: 'C'
    },
    {
      title: 'AI 數據平台就緒',
      firstText: 'AI Data',
      secondText: 'Platform',
      subtitle: '為 AI 工作負載打造高效能儲存基礎建置',
      description: 'AI 應用加速落地，企業需要更完整的數據平台支援',
      problem: ['AI', '效能'],
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
  let intervalId: ReturnType<typeof setInterval> | undefined
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
    finalAnswer.value = ''
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

  const finalAnswer = ref<string>('')

  const optionConfirm = () => {
    if (cardSelected.length === 0) {
      alert('請至少選擇一張卡片')
      return
    }
    gameStep.value = GameStep.SelectFinish

    if (cardSelected.length === 1) {
      finalAnswer.value =
        cardSelected[0] === 'B' ? 'A2' : cardSelected[0] === 'C' ? 'A3' : cardSelected[0] === 'D' ? 'A4' : ''
    } else if (cardSelected.length === 2) {
      finalAnswer.value =
        cardSelected.includes('B') && cardSelected.includes('C')
          ? 'B4'
          : cardSelected.includes('B') && cardSelected.includes('D')
            ? 'B5'
            : cardSelected.includes('C') && cardSelected.includes('D')
              ? 'B6'
              : ''
    } else if (cardSelected.length === 3) {
      finalAnswer.value = 'C4'
    }

    setTimeout(() => {
      gameStep.value = GameStep.Loading
      document.getElementById(`game-section`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 500)
  }
</script>

<template>
  <section
    id="game-section"
    class="w-full relative overflow-hidden before:absolute before:w-full before:min-h-[13vw] before:top-0 before:left-0 before:bg-linear-to-b before:from-[#292D3A] before:to-transparent before:content-[''] before:z-10 after:absolute after:w-full after:min-h-[13vw] after:bottom-0 after:left-0 after:bg-linear-to-t after:from-[#3E4350] after:to-transparent after:content-[''] after:z-10"
  >
    <video class="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoplay loop muted playsinline width="100%">
      <source src="@/assets/images/wave-bg.webm" type="video/webm" />
      您的瀏覽器不支援影片播放
    </video>
    <div class="relative w-full h-full flex items-center justify-center z-20">
      <div class="w-0 md:w-3/10 2xl:w-1/4 h-full"></div>
      <div class="w-full md:w-7/10 2xl:w-3/4 h-full px-6 sm:px-12 md:px-6 lg:px-8 xl:px-12 py-20">
        <div class="w-full">
          <div
            class="ai-heading inline-block pr-4 sm:pr-8 pl-4 sm:pl-40 lg:pl-30 py-3 bg-linear-to-b from-black/50 to-[#292D3A]/30 backdrop-blur-xs rounded-2xl"
          >
            <img
              src="@/assets/images/robot.png"
              alt="robot"
              class="absolute hidden sm:block left-4 bottom-0 w-30 lg:w-24"
            />
            <h2 class="text-white font-bold">
              <span
                class="text-3xl lg:text-4xl 2xl:text-5xl mr-1 xl:mr-2 bg-clip-text text-transparent bg-linear-to-br from-[#01A982] to-[#62E5F6] HPEGraphikBold"
                >30</span
              >
              <span class="text-xl lg:text-2xl 2xl:text-3xl">秒快速診斷：</span>
              <span class="text-lg lg:text-xl 2xl:text-2xl">您的數據基礎架構準備好面對未來挑戰了嗎？</span>
            </h2>
            <h5 class="text-sm md:text-base lg:text-lg text-[#E6E8E9] mt-1 ml-1">
              點選 <span class="HPEGraphikRegular">1-3</span> 張卡片（可複選），根據選擇組合，跳出對應診斷結果
            </h5>
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <div
            v-if="gameStep < GameStep.Loading"
            class="mt-15 2xl:px-20 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4"
          >
            <GameSectionCard
              v-for="(item, index) in cardData"
              :key="item.firstText"
              :index="index"
              :game-step="gameStep"
              :card-step="cardStep"
              :card-selected="cardSelected"
              :problem="item.problem"
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
            class="w-full flex flex-col justify-center items-center py-[8vw] mt-14"
          >
            <img src="@/assets/images/robot-cute-2.png" alt="robot" class="w-20 h-20 lg:w-24 lg:h-24 animate-bounce" />
            <h6 class="text-white text-lg xl:text-xl flex justify-center items-center gap-2 tracking-wide">
              <LoaderSvg class="w-6 h-6 xl:w-8 xl:h-8 animate-spin" />
              {{ loadingTextArray[Math.floor(loadingPercent / 50)] }}
            </h6>
            <div
              class="w-4/5 md:w-2/5 h-6 mt-6 rounded-full bg-linear-to-tr from-[#0070F8]/70 via-[#292D3A]/50 to-[#292D3A]/50 p-1.5"
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
            <GameAnswer :answer="finalAnswer" />
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
                <h5 class="text-sm sm:text-base text-gray-200">
                  <template v-if="!cardSelected.length">
                    請點選 <span class="HPEGraphikRegular">1-3</span> 張卡片（可複選）
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
                  <span class="text-lg whitespace-nowrap">確認</span>
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
