<script lang="ts" setup>
  import card1Img from '@/assets/images/card-1.jpg'
  import card2Img from '@/assets/images/card-2.jpg'
  import card3Img from '@/assets/images/card-3.jpg'

  interface cardProps {
    index: number
    gameStep: number
    cardStep: number
    cardSelected?: string[]
  }
  const props = withDefaults(defineProps<cardProps>(), {
    index: 0,
    gameStep: 0,
    cardStep: 0,
    cardSelected: () => []
  })

  const indexMap = ['B', 'C', 'D']

  const isCardSelected = computed(() => {
    const cardIndex = indexMap[props.index]
    return cardIndex !== undefined && props.cardSelected.includes(cardIndex)
  })
</script>

<template>
  <div
    class="card-wrap rounded-xl overflow-hidden group transition-all duration-200"
    :class="[
      gameStep === 0 ? `card-wrap-${index}` : '',
      {
        'hover:shadow-lg hover:shadow-cyan-500/80 hover:-translate-y-1': gameStep === 2 && !isCardSelected,
        'shadow-lg shadow-cyan-200/90 -translate-y-2 scale-[1.02]': isCardSelected
      }
    ]"
  >
    <div
      class="card w-full relative cursor-pointer"
      :class="{
        'group-hover:rotate-y-180': gameStep === 0,
        'rotate-y-180': (cardStep >= index && gameStep === 1) || gameStep === 2 || (gameStep === 3 && isCardSelected)
      }"
      data-index="1"
      tabindex="0"
      role="button"
      aria-pressed="false"
    >
      <div class="face front">
        <img src="@/assets/images/card-cover.jpg" alt="cover" width="100%" />
      </div>
      <div class="face back">
        <div class="inner w-full flex flex-col items-center justify-center h-full">
          <div class="relative w-full h-full rounded-md overflow-hidden p-2 2xl:p-3">
            <div class="relative w-full h-full rounded-md overflow-hidden pl-2 pr-6 py-2">
              <img
                :src="index == 0 ? card1Img : index == 1 ? card2Img : card3Img"
                alt="content"
                width="100%"
                class="absolute left-1/2 top-1/2 -translate-1/2 object-cover z-0"
              />
              <div class="relative w-full h-full flex flex-col items-center justify-end z-10">
                <h3
                  class="w-full text-lg sm:text-base lg:text-xl 2xl:text-2xl whitespace-nowrap text-[#00E0AF] text-shadow-lg/50 font-bold HPEGraphikSemiBold mb-0.5"
                >
                  <p v-if="index == 0" class="leading-none">100%</p>
                  <slot name="title"></slot>
                </h3>
                <div
                  class="w-full p-2 bg-linear-to-br from-[#02543F]/50 to-[#01A982]/50 rounded-lg border border-[#D4D8DB]/70"
                >
                  <h4 class="text-xs sm:text-[10px] lg:text-xs xl:text-sm 2xl:text-sm tracking-wide line-clamp-2">
                    <slot name="subtitle"></slot>
                  </h4>
                </div>
              </div>
              <h6
                class="absolute left-0 top-1/3 [writing-mode:vertical-lr] HPEGraphikBold text-xl 2xl:text-2xl text-transparent font-bold [text-stroke:1px_#01a982] [-webkit-text-stroke:1px_#01a982]"
              >
                <slot name="firstText"></slot>
              </h6>
              <h6
                class="absolute right-0 top-2 [writing-mode:vertical-rl] HPEGraphikBold text-xl 2xl:text-2xl text-transparent font-bold [text-stroke:1px_#01a982] [-webkit-text-stroke:1px_#01a982]"
              >
                <slot name="secondText"></slot>
              </h6>
            </div>
            <div
              class="absolute top-2 2xl:top-3 left-2 2xl:left-3 w-2 h-1/5 bg-linear-to-r to-[#02543F] from-[#02523E] before:absolute before:content-[''] before:bottom-0 before:left-0 before:translate-y-full before:w-0 before:h-0 before:border-solid before:border-t-5 before:border-r-8 before:border-b-0 before:border-l-0 before:border-t-[#02543F] before:border-r-transparent before:border-b-transparent before:border-l-transparent"
            >
              <ul class="w-full h-full flex flex-col items-center justify-center gap-1 -translate-x-1/2">
                <li
                  v-for="index in 5"
                  :key="index"
                  class="w-1 h-1 rounded-full"
                  :class="{ 'bg-[#378C72]': index < 3, 'border border-[#378C72]': index >= 3 }"
                ></li>
              </ul>
            </div>
            <div
              class="absolute bottom-0 right-2 2xl:right-3 w-4 h-1/2 bg-linear-to-r to-[#01a982] from-[#069E79] before:absolute before:content-[''] before:top-0 before:left-0 before:-translate-y-full before:w-0 before:h-0 before:border-solid before:border-t-0 before:border-r-0 before:border-b-10 before:border-l-20 before:border-t-transparent before:border-r-transparent before:border-b-[#069E79] before:border-l-transparent"
            >
              <ul class="w-3/4 2xl:w-4/5 h-full flex flex-col items-center justify-start mt-1 gap-1 translate-x-1/2">
                <li
                  v-for="index in 10"
                  :key="index"
                  class="w-full h-1/20 -skew-y-25"
                  :class="{ 'bg-[#05CC93]': index < 5, 'border border-[#05CC93]': index >= 5 }"
                ></li>
              </ul>
            </div>
          </div>
          <div class="w-full bg-linear-to-r from-[#024c39] to-[#01a982] px-3 pb-3">
            <div class="w-full border border-[#05CC93] rounded-lg py-1.5 px-2 bg-white/5">
              <p class="text-xs sm:text-[10px] lg:text-xs 2xl:text-sm text-white/90 font-normal line-clamp-2">
                <slot name="description"></slot>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /* 卡片外框 */
  .card-wrap {
    perspective: 1200px; /* 3D 視角 */

    &-0 {
      transform: translate(30%, 5%) rotate(-5deg);

      @media screen and (max-width: 639px) {
        transform: none;
      }
    }
    &-2 {
      transform: translate(-30%, 5%) rotate(5deg);

      @media screen and (max-width: 639px) {
        transform: none;
      }
    }
  }

  .card {
    // height: 160px;
    transform-style: preserve-3d;
    transition:
      transform 400ms cubic-bezier(0.2, 0.9, 0.2, 1),
      height 400ms cubic-bezier(0.2, 0.9, 0.2, 1),
      width 400ms cubic-bezier(0.2, 0.9, 0.2, 1);
    margin: 0 auto;
  }

  /* 翻牌內容面（前/後），共用樣式 */
  .face {
    // position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(20, 30, 50, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }

  .front {
    // transform: rotateY(180deg);
  }

  .back {
    position: absolute;
    background: linear-gradient(90deg, #024c39, #01a982);
    transform: rotateY(180deg);
  }

  /* 當加入 .is-open（點擊）時，卡片會固定翻牌並攤開（放大並展開更多內容） */
  .card.is-open {
    transform: rotateY(180deg);
    width: calc(260px * 1.6);
    height: calc(160px * 1.8);
    z-index: 20;
  }
</style>
