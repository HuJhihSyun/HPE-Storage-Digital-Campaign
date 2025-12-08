<script lang="ts" setup>
  import closeSvg from '@/assets/svg/x.svg?skipsvgo'
  import { useValidateUtils } from '@/composables/useValidate'
  import { useBasicModal } from '@/composables/useBasicModal'
  const { validate } = useValidateUtils()
  const { openModal } = useBasicModal()

  import LogoSvg from '@/assets/svg/logo-b.svg?skipsvgo'
  const currentWindowInnerWidth = ref(0)

  onMounted(() => {
    currentWindowInnerWidth.value = window.innerWidth
    window.addEventListener('resize', onWindowResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onWindowResize)
  })

  const onWindowResize = () => {
    currentWindowInnerWidth.value = window.innerWidth
  }

  const panelWidth = computed(() => {
    const screenWidth = window.innerWidth
    const panelWidth =
      currentWindowInnerWidth.value > 1540
        ? screenWidth * 0.25 - 32
        : currentWindowInnerWidth.value <= 1540 && currentWindowInnerWidth.value > 1024
          ? screenWidth * 0.3 - 32
          : currentWindowInnerWidth.value <= 1023 && currentWindowInnerWidth.value > 767
            ? screenWidth * 0.3 - 16 // 減去左右間距
            : screenWidth - 32 // 減去左右間距
    return panelWidth
  })

  const panelHeight = computed(() => {
    return currentWindowInnerWidth.value > 1540
      ? window.innerHeight - 32
      : currentWindowInnerWidth.value <= 1540 && currentWindowInnerWidth.value > 1024
        ? window.innerHeight - 32
        : currentWindowInnerWidth.value <= 1023 && currentWindowInnerWidth.value > 767
          ? window.innerHeight - 16 // 減去上下間距
          : window.innerHeight - 32 // 減去上下間距
  })

  const formHeight = computed(() => {
    return currentWindowInnerWidth.value > 767 ? panelHeight.value - 260 : panelHeight.value - 220 // 扣除標題與按鈕區域高度
  })

  const formData = reactive({
    name: '', // 姓名
    company: '', // 所屬企業（請填寫中文名稱）
    industry: '', // 所屬企業之產業類別
    title: '', // 職稱
    decisionRole: '', // 決策角色
    email: '', // 電子郵件
    phone: '', // 聯絡電話
    ext: '', // 分機
    mobile: '', // 行動電話
    information: '', // 資訊
    source: '', // 來源
    subscribe: false, // 訂閱電子報
    policy: false // 同意隱私政策
  })

  // 產業類別選項
  const industryOptions = [
    {
      id: 'IT_Services',
      value: '資通訊/軟體服務'
    },
    {
      id: 'Manufacturing',
      value: '製造業'
    },
    {
      id: 'Telecom_Services',
      value: '電信服務業'
    },
    {
      id: 'Biotech_Pharmaceutical',
      value: '生技製藥'
    },
    {
      id: 'Transportation_Logistics_Warehousing',
      value: '交通運輸/物流倉儲'
    },
    {
      id: 'Construction',
      value: '建築營造'
    },
    {
      id: 'Electronics_Optoelectronics_Semiconductor',
      value: '電子/光電/半導體'
    },
    {
      id: 'Financial_Services',
      value: '金融服務業'
    },
    {
      id: 'Tourism_Catering',
      value: '觀光餐飲業'
    },
    {
      id: 'Media_Communication',
      value: '媒體傳播業'
    },
    {
      id: 'HPE_Channel_Partner',
      value: 'HPE通路經銷夥伴'
    }
  ]

  // 決策角色選項
  const decisionRoleOptions = [
    {
      id: 'Decision_Maker',
      value: '決策者'
    },
    {
      id: 'Initiator',
      value: '推動者'
    },
    {
      id: 'Influencer',
      value: '影響者'
    },
    {
      id: 'User',
      value: '使用者'
    },
    {
      id: 'Evaluator',
      value: '評估者'
    },
    {
      id: 'Procurement_Department',
      value: '採購部'
    },
    {
      id: 'Finance_Department',
      value: '財務部'
    },
    {
      id: 'Technical_Department',
      value: '技術部'
    },
    {
      id: 'Operations_Department',
      value: '營運部'
    },
    {
      id: 'Legal_Department',
      value: '法務部'
    }
  ]

  // 您從何得知本活動？
  const sourceOptions = [
    {
      id: 'HPE_Partner',
      value: 'HPE 夥伴'
    },
    {
      id: 'HPE_Channel_Partner',
      value: 'HPE 通路經銷夥伴'
    },
    {
      id: 'TechNews_Newsletter',
      value: 'TechNews 電子報'
    },
    {
      id: 'TechNews_Facebook',
      value: 'TechNews 科技新報臉書粉絲團'
    }
  ]

  const errorMessages = reactive({
    name: '',
    company: '',
    industry: '',
    title: '',
    decisionRole: '',
    email: '',
    phone: '',
    mobile: '',
    policy: ''
  })

  const handleSubmit = async (event: Event) => {
    event.preventDefault()

    console.log('表單資料:', formData)
    Object.assign(errorMessages, validate(formData))

    if (Object.values(errorMessages).some((msg) => msg !== '')) {
      console.log('表單驗證失敗:', errorMessages)
      return
    }

    console.log('表單驗證成功，準備提交資料')

    // openModal({
    //   title: '列表切換施工中',
    //   content:
    //     '頁面尚未完成，尚有問與答項目待補充與 UI 元件待製作，如有更好的建議歡迎提供，實驗室元件庫不吝接受指教，請耐心等候！',
    //   confirmText: '確認',
    //   cancelText: '取消',
    //   onConfirm: () => {
    //     console.log('確認！')
    //   },
    //   onCancel: () => {
    //     console.log('已取消！')
    //   }
    // })

    // isLoading.value = true;

    // const { data, error } = await useFetch('https://script.google.com/macros/s/AKfycbzumI-w1Xhjy87XZ8wh2D4AyMzq4R038_Z5ZpRweC-l3n0ckqEfoNFy3m_ygDnBgQsV/exec', {
    //     method: 'POST',
    //     body: formData,
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // });

    // 參考用 axios 傳送表單資料
    // axios({
    //     method: 'post',
    //     url: 'https://script.google.com/macros/s/AKfycbzumI-w1Xhjy87XZ8wh2D4AyMzq4R038_Z5ZpRweC-l3n0ckqEfoNFy3m_ygDnBgQsV/exec',
    //     data: formData,
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    // })
    // .then(
    //     res => {
    //         isLoading.value = false;
    //         console.log(res, 'success');
    //         closeModal()
    //     }
    // )
    // .catch( error => alert('傳送失敗，錯誤訊息：' + error))
    // .finally(() => isLoading.value = false);
  }

  interface submitPanelEmits {
    (event: 'closeSubmitPanel'): void
  }

  const emit = defineEmits<submitPanelEmits>()

  const closeSubmitPanel = () => {
    emit('closeSubmitPanel')
  }
</script>

<template>
  <aside
    class="submit-form-panel fixed top-4 left-4 md:top-2 md:left-2 lg:top-4 lg:left-4 2xl:top-4 2xl:left-4 py-4 px-3 lg:px-5 bg-linear-to-br from-white/70 to-white/20 backdrop-blur-sm rounded-2xl pointer-events-none z-50"
    :style="{ width: panelWidth + 'px', height: panelHeight + 'px' }"
  >
    <div class="w-full md:pt-2 pb-3 md:pb-5 border-b border-b-white flex justify-between items-center">
      <LogoSvg class="w-24 md:w-36 lg:w-40" />
      <button
        class="inline-flex justify-center items-center border border-[#01A982] rounded-lg p-1 backdrop-blur-sm cursor-pointer pointer-events-auto"
        @click="closeSubmitPanel"
      >
        <closeSvg class="inline-block text-[#01A982] w-5 h-5 transition-all duration-300 ease-in-out" />
      </button>
    </div>
    <div class="w-full mt-4">
      <h4 class="text-white font-bold text-lg lg:text-xl text-shadow-lg/10">填寫資料，立即下載攻略</h4>
      <p class="text-white text-sm text-shadow-lg/10">快速掌握 AI 時代的資料管理、安全儲存方法</p>
      <form class="w-full">
        <div
          class="mt-4 flex flex-col gap-4 h-full overflow-y-auto pr-2 pointer-events-auto"
          :style="{ height: formHeight + 'px' }"
        >
          <BasicInput
            v-model="formData.name"
            label="姓名"
            :type="'text'"
            placeholder="請輸入您的姓名"
            required
            :error-message="errorMessages.name"
            :disabled="false"
          />
          <BasicInput
            v-model="formData.company"
            label="所屬企業 (請填寫中文名稱)"
            :type="'text'"
            placeholder="請輸入您的所屬企業"
            required
            :error-message="errorMessages.company"
            :disabled="false"
          />
          <BasicSelect
            v-model="formData.industry"
            label="所屬企業之產業類別"
            :type="'text'"
            placeholder="請選擇您的產業類別"
            :options="industryOptions"
            required
            :error-message="errorMessages.industry"
            :disabled="false"
          />
          <BasicInput
            v-model="formData.title"
            label="您的職稱"
            :type="'text'"
            placeholder="請輸入您的職稱"
            required
            :error-message="errorMessages.title"
            :disabled="false"
          />
          <BasicSelect
            v-model="formData.decisionRole"
            label="決策角色"
            :type="'text'"
            placeholder="請選擇您的決策角色"
            :options="decisionRoleOptions"
            required
            :error-message="errorMessages.decisionRole"
            :disabled="false"
          />
          <BasicInput
            v-model="formData.email"
            label="電子郵件"
            :type="'email'"
            placeholder="請輸入您的電子郵件"
            required
            :error-message="errorMessages.email"
            :disabled="false"
          />
          <div>
            <div class="flex justify-between gap-2">
              <div class="w-7/10">
                <BasicInput
                  v-model="formData.phone"
                  label="聯絡電話"
                  :type="'tel'"
                  placeholder="聯絡電話"
                  required
                  :disabled="false"
                />
              </div>
              <div class="w-3/10">
                <BasicInput
                  v-model="formData.ext"
                  label="分機"
                  :type="'tel'"
                  placeholder="分機"
                  :error-message="errorMessages.phone"
                  :disabled="false"
                />
              </div>
            </div>
          </div>
          <BasicInput
            v-model="formData.mobile"
            label="行動電話"
            :type="'tel'"
            placeholder="請輸入您的行動電話"
            required
            :error-message="errorMessages.mobile"
            :disabled="false"
          />
          <BasicTextarea
            v-model="formData.information"
            label="請問您想要了解哪方面的 Storage 服務資訊？"
            :type="'text'"
            placeholder="請問您想要了解哪方面的 Storage 服務資訊？"
            :disabled="false"
          />
          <BasicSelect
            v-model="formData.source"
            label="您從何得知本活動？"
            :type="'text'"
            placeholder="請選擇"
            :options="sourceOptions"
            :disabled="false"
          />

          <ul class="m-0 p-0 flex flex-col gap-2 list-none">
            <h4 class="text-sm font-semibold text-white text-shadow-sm/20 whitespace-nowrap">個人資料收集使用政策</h4>
            <li class="flex justify-start items-center">
              <BasicCheckbox class="w-6 min-w-6 h-6 mt-0.5" v-model="formData.subscribe" />
              <span class="HPEGraphikRegular inline-block text-white text-sm ml-2"
                >我想收到 HPE 關於企業端的最新消息、公告與更多訊息。我可以隨時取消訂閱。</span
              >
            </li>
            <li class="flex justify-start items-center">
              <BasicCheckbox class="w-6 min-w-6 h-6 mt-0.5" v-model="formData.policy" />
              <div>
                <span class="HPEGraphikRegular inline-block text-white text-sm ml-2"
                  >您已閱讀並同意下方我們關於本次活動的規範以及 HPE 資料隱私權與安全性附加條款。</span
                >
                <h6 v-if="errorMessages.policy" class="text-xs text-red-600 text-right">
                  {{ errorMessages.policy }}
                </h6>
              </div>
            </li>
            <li class="HPEGraphikRegular text-white text-sm">
              填交並送填此表，表示本人同意將所提供之個人資料，提供予 HPE 公司進行蒐集、處理及利用。本人同意 HPE
              公司除得寄發各類相關活動、課程及產品行銷有關之 EDM
              或與商品行銷有關之訊息或行銷宣傳品至本人所填寫的電子郵件信箱外，亦得以認為適當之方式以電話或其他通訊方式提供各類活動、課程及產品行銷相關訊息予本人。請您放心，我們會盡力保護您的個人資料與隱私，並遵守相關法律規範。
            </li>
          </ul>
        </div>
        <button
          type="submit"
          class="submit-button relative mt-4 flex justify-center items-center gap-1 w-full text-white text-shadow-sm/20 font-semibold py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
          @click="handleSubmit"
        >
          <span class="text-lg">提交</span>
          <span class="text-sm HPEGraphikRegular">Submit</span>
        </button>
      </form>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  .submit-form-panel {
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
      background: linear-gradient(180deg, #d4d8db, #e6e8e9);
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
  }

  /* 卷軸整體 */
  ::-webkit-scrollbar {
    /* 垂直卷軸寬度&水平卷軸高度 */
    width: 2px;
    height: 2px;
  }

  /* 卷軸軌道（背景） */
  ::-webkit-scrollbar-track {
    /* 卷軸背景顏色 */
    background-color: rgba(255, 255, 255, 0.2);
  }

  /* 卷軸滑塊（移動部分） */
  ::-webkit-scrollbar-thumb {
    /* 滑塊顏色&圓角 */
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  /* 滑塊 hover 時 */
  ::-webkit-scrollbar-thumb:hover {
    /* 滑塊 hover 顏色 */
    background-color: rgba(255, 255, 255, 1);
  }
</style>
