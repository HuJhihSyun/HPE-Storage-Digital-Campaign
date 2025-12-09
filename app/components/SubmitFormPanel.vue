<script lang="ts" setup>
  import closeSvg from '@/assets/svg/x.svg?skipsvgo'
  import { useGlobalLoading } from '@/composables/useGlobalLoading'
  import { useValidateUtils } from '@/composables/useValidate'
  import { useBasicModal } from '@/composables/useBasicModal'

  const { start: globalLoadingStart, finish: globalLoadingFinish, loading } = useGlobalLoading()
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
    titleHeight.value = formTitle.value?.getBoundingClientRect().height ?? 0
  }

  const panelWidth = computed(() => {
    const screenWidth = window.innerWidth
    const panelWidth =
      currentWindowInnerWidth.value > 1540
        ? screenWidth * 0.25 - 32
        : currentWindowInnerWidth.value <= 1540 && currentWindowInnerWidth.value > 1023
          ? screenWidth * 0.3 - 32
          : currentWindowInnerWidth.value <= 1023 && currentWindowInnerWidth.value > 767
            ? screenWidth * 0.3 - 16 // 減去左右間距
            : screenWidth - 32 // 減去左右間距
    return panelWidth
  })

  const panelHeight = computed(() => {
    return currentWindowInnerWidth.value > 1540
      ? window.innerHeight - 32
      : currentWindowInnerWidth.value <= 1540 && currentWindowInnerWidth.value > 1023
        ? window.innerHeight - 32
        : currentWindowInnerWidth.value <= 1023 && currentWindowInnerWidth.value > 767
          ? window.innerHeight - 16 // 減去上下間距
          : window.innerHeight - 32 // 減去上下間距
  })

  const formTitle = ref<HTMLElement | null>(null)

  const titleHeight = ref(0)

  onMounted(() => {
    nextTick(() => {
      titleHeight.value = formTitle.value?.getBoundingClientRect().height ?? 0
    })
  })

  const formHeight = computed(() => {
    return currentWindowInnerWidth.value > 767
      ? panelHeight.value - (210 + titleHeight.value)
      : panelHeight.value - (180 + titleHeight.value) // 扣除標題與按鈕區域高度
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
    policy: false, // 同意隱私政策
    time: '' // 填表時間
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

  const isFormSubmitSuccess = ref(false)

  const handleSubmit = async (event: Event) => {
    event.preventDefault()

    formData.time = new Intl.DateTimeFormat('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date())

    console.log('表單資料:', formData)
    Object.assign(errorMessages, validate(formData))

    if (Object.values(errorMessages).some((msg) => msg !== '')) {
      console.log('表單驗證失敗:', errorMessages)
      return
    }

    try {
      globalLoadingStart('發送資料中...')

      const { data, error } = await useFetch(
        'https://script.google.com/macros/s/AKfycbyu-j9aJr5nPVV_VuuFRK18INmQgTwnoeQKNCdAaLNtQfDoXpPbAEPoPvi3m5vV2t3B/exec',
        {
          method: 'POST',
          body: formData,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      )

      if (error.value) {
        throw new Error(`表單提交失敗: ${error.value.message}`)
      } else {
        console.log('表單提交成功:', data.value)
        isFormSubmitSuccess.value = true
      }

      openModal({
        title: '表單已送出！',
        content: '感謝您的填寫，我們將盡快與您聯繫。',
        confirmText: '下載攻略',
        cancelText: '取消',
        onConfirm: () => {
          window.open(
            'https://paths.ext.hpe.com/c/a00149500enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
            '_blank'
          )
        },
        onCancel: () => {
          console.log('已取消！')
        }
      })
    } catch (error) {
      console.error('表單提交失敗:', error)
    } finally {
      globalLoadingFinish()
    }
  }

  const downloadGuide = () => {
    window.open(
      'https://paths.ext.hpe.com/c/a00149500enw?x=cIiY0G&cc=tw&lang=en&lb-height=100&lb-width=100&lb-mode=overlay&utm_source=&utm_medium=&utm_campaign=&utm_content=&utm_term=&utm_geo=&crid=&plid=&pf_route=a00149500',
      '_blank'
    )
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
        class="inline-flex md:hidden justify-center items-center border border-[#01A982] rounded-lg p-1 backdrop-blur-sm cursor-pointer pointer-events-auto"
        @click="closeSubmitPanel"
      >
        <closeSvg class="inline-block text-[#01A982] w-5 h-5 transition-all duration-300 ease-in-out" />
      </button>
    </div>
    <div class="w-full mt-4">
      <div ref="formTitle" class="w-full inline-block">
        <h4 class="text-white font-bold text-lg lg:text-xl text-shadow-lg/10 HPEGraphikSemiBold">
          填寫資料，讓 HPE 專家為您評估現況與痛點
        </h4>
        <p class="text-white text-sm text-shadow-lg/10">快速掌握 AI 時代的資料管理、安全儲存方法</p>
      </div>
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
            :disabled="isFormSubmitSuccess"
          />
          <BasicInput
            v-model="formData.company"
            label="所屬企業 (請填寫中文名稱)"
            :type="'text'"
            placeholder="請輸入您的所屬企業"
            required
            :error-message="errorMessages.company"
            :disabled="isFormSubmitSuccess"
          />
          <BasicSelect
            v-model="formData.industry"
            label="所屬企業之產業類別"
            :type="'text'"
            placeholder="請選擇您的產業類別"
            :options="industryOptions"
            required
            :error-message="errorMessages.industry"
            :disabled="isFormSubmitSuccess"
          />
          <BasicInput
            v-model="formData.title"
            label="您的職稱"
            :type="'text'"
            placeholder="請輸入您的職稱"
            required
            :error-message="errorMessages.title"
            :disabled="isFormSubmitSuccess"
          />
          <BasicSelect
            v-model="formData.decisionRole"
            label="決策角色"
            :type="'text'"
            placeholder="請選擇您的決策角色"
            :options="decisionRoleOptions"
            required
            :error-message="errorMessages.decisionRole"
            :disabled="isFormSubmitSuccess"
          />
          <BasicInput
            v-model="formData.email"
            label="電子郵件"
            :type="'email'"
            placeholder="請輸入您的電子郵件"
            required
            :error-message="errorMessages.email"
            :disabled="isFormSubmitSuccess"
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
                  :disabled="isFormSubmitSuccess"
                />
              </div>
              <div class="w-3/10">
                <BasicInput
                  v-model="formData.ext"
                  label="分機"
                  :type="'tel'"
                  placeholder="分機"
                  :error-message="errorMessages.phone"
                  :disabled="isFormSubmitSuccess"
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
            :disabled="isFormSubmitSuccess"
          />
          <BasicTextarea
            v-model="formData.information"
            label="請問您想要了解哪方面的 Storage 服務資訊？"
            :type="'text'"
            placeholder="請問您想要了解哪方面的 Storage 服務資訊？"
            :disabled="isFormSubmitSuccess"
          />
          <BasicSelect
            v-model="formData.source"
            label="您從何得知本活動？"
            :type="'text'"
            placeholder="請選擇"
            :options="sourceOptions"
            :disabled="isFormSubmitSuccess"
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
                  >您已閱讀並同意下方我們關於本次活動的規範以及
                  <a href="https://www.hpe.com/psnow/doc/a50011819zht" target="_blank" class="text-[#00E0AF] underline"
                    >HPE 資料隱私權與安全性附加條款</a
                  >。</span
                >
                <h6 v-if="errorMessages.policy" class="text-xs text-red-600 text-right">
                  {{ errorMessages.policy }}
                </h6>
              </div>
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              填交並送填此表，表示本人同意將所提供之個人資料，提供予 HPE 公司進行蒐集、處理及利用。本人同意 HPE
              公司除得寄發各類相關活動、課程及產品行銷有關之 EDM
              或與商品行銷有關之訊息或行銷宣傳品至本人所填寫的電子郵件信箱外，亦得以認為適當之方式以電話或其他通訊方式提供各類活動、課程及產品行銷相關訊息予本人。請您放心，我們會盡力保護您的個人資料與隱私，並遵守相關法律規範。
            </li>
          </ul>

          <ul class="m-0 p-0 flex flex-col gap-2 list-none">
            <h4 class="text-sm font-semibold text-white text-shadow-sm/20 whitespace-nowrap">活動辦法與個資蒐集規定</h4>
            <p class="HPEGraphikRegular text-white text-xs">
              以下活動辦法及注意事項適用於 HPE 慧與科技【HPE Digital Campaign for
              Storage】活動（以下簡稱本活動），參與本活動者（以下簡稱參加者）同意接受並遵守以下辦法及規定：
            </p>
            <li class="HPEGraphikRegular text-white text-xs">
              活動期間：2026 年 1 月 15 日 12:00 ~ 2026 年 4 月 20 日 23:59 止（最後活動時間以主辦單位系統認定為準）。
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              主辦單位：
              <ol class="list-disc list-inside pl-1">
                <li>慧與科技股份有限公司 (Hewlett Packard Enterprise)</li>
                <li>正平整合行銷股份有限公司 (AccessUs Marketing Services Inc.)</li>
              </ol>
            </li>
          </ul>

          <ul class="m-0 p-0 flex flex-col gap-2 list-none">
            <h4 class="text-sm font-semibold text-white text-shadow-sm/20 whitespace-nowrap">活動說明與注意事項：</h4>
            <li class="HPEGraphikRegular text-white text-xs">
              活動說明：凡於本活動期間內，至本活動網站登錄個人資料並完成問卷填寫，前 5 名有機會抽中下方活動獎項！
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              活動獎項：
              <ol class="list-disc list-inside pl-1">
                <li>第一輪獎(10)：xxx</li>
                <li>第二輪獎(5)：xxx</li>
              </ol>
              第一輪獎項（4月底）將抽出十名，第二輪獎項（7月底）將抽出五名；將於活動結束後統一抽出。
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              得獎公布：主辦單位將於 2026 年 4 月 23 日 23:59 前，於本活動網站公布得獎名單。
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              領獎方式：
              主辦單位於上述平台公布得獎名單後，承辦單位將於七個工作日內透過中獎者於活動期間留存之聯絡方式聯繫（電話、電子郵件），在中獎者完成得獎申報流程後，承辦單位將透過得獎者於網站留存之資料，以郵寄方式寄出贈品。
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              中獎兌換與領取注意事項（請務必詳閱）：
              <ol class="list-disc list-inside pl-1">
                <li>活動截止時間為 2026 年 4 月 20 日 23:59 止。</li>
                <li>中獎者必須本人參與本活動且不得轉讓資格。</li>
              </ol>
            </li>
          </ul>

          <ul class="m-0 p-0 flex flex-col gap-2 list-none">
            <h4 class="text-sm font-semibold text-white text-shadow-sm/20">
              我熟讀下列 HPE
              告知的個人資料保護事項並同意得提供個人上述報名資料提供予本活動之協辦廠商進行蒐集、處理及利用。
            </h4>
            <h4 class="text-sm font-semibold text-white text-shadow-sm/20">
              聲明：Hewlett Packard Enterprise 為保護您的個人資料，依據個人資料保護法第8條規定，告知有關 Hewlett Packard
              Enterprise 對於個人資料之蒐集、處理及利用等相關事項如下，當您填寫完成個人資料後，即表示您同意以下內容：
            </h4>
            <li class="HPEGraphikRegular text-white text-xs">
              一、蒐集之目的：Hewlett Packard Enterprise
              依據個人資料保護法及相關法令之規定，蒐集您的個人資料，為行銷、非公務機關依法定義務所進行個人資料之蒐集處理及利用、契約、類似契約或其他法律關係事務、購票業務、個人資料之合法交易業務、消費者、客戶管理與服務、消費者保護、商業與技術資訊、教育或訓練行政、資（通）訊服務、資（通）訊與資料庫管理
              、資通安全與管理、網路購物及其他電子商務服務、廣告或商業行為管理、調查、統計與研究分析、其他經營合於營業登記項目或組織章程所定之業務、其他諮詢與顧問服務行銷、客戶管理、售後服務、提供服務及業務之必要範圍。
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              二、個人資料之類別：Hewlett Packard Enterprise
              台灣所蒐集您提供之資料，包含姓名、身分證統一編號、護照號碼、年齡、性別、服務單位、職稱、連絡方式，包括但不限於電話、E-MAIL或地址等、金融機構帳戶之號碼與姓名、信用卡或簽帳卡之號碼、個人之其他號碼或帳戶或其他得以直接或間接識別您個人之資料。
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              三、個人資料利用之期間、地區、對象或方式：
              <ol class="list-inside pl-1">
                <li>
                  (一) 期間：於 Hewlett Packard Enterprise 存續期間、依法令或契約約定之資料保存期間或Hewlett Packard
                  Enterprise 因執行業務所必須之保存期間。
                </li>
                <li>(二) 地區：中華民國領域內或利用對象之國內及國外所在地。</li>
                <li>
                  (三) 對象：Hewlett Packard Enterprise 或委託 Hewlett Packard Enterprise 舉辦活動之公司或機構、Hewlett
                  Packard Enterprise 之共同行銷或合作夥伴、其他與 Hewlett Packard Enterprise
                  有業務往來或合作之機構、依法有調查權之機關。
                </li>
                <li>
                  (四)
                  方式：以電話、簡訊、電子郵件、紙本或其他合於當時科學技術之適當方式蒐集、處理國際傳輸與利用個人資料。
                </li>
              </ol>
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              四、您的個人資料，您得依個人資料保護法之規定：
              <ol class="list-inside">
                <li>(一) 請求查詢、閱覽或製給複製本，惟 Hewlett Packard Enterprise 依法得酌收必要成本費用。</li>
                <li>(二) 請求補充或更正之。</li>
                <li>
                  (三) 個人資料蒐集之特定目的消失或期限屆滿時，向 Hewlett Packard Enterprise
                  請求刪除、停止處理或利用您的個人資料。但 Hewlett Packard Enterprise
                  因執行職務或業務所必須者，不在此限。
                </li>
                <li>
                  (四) Hewlett Packard Enterprise 利用個人資料行銷，您表示拒絕接受行銷時，Hewlett Packard Enterprise
                  將在合理期間後停止以行銷之名義利用您個人資料。
                </li>
              </ol>
            </li>
            <li class="HPEGraphikRegular text-white text-xs">
              五、若您不願意提供您的個人資料予 Hewlett Packard Enterprise 依上述說明內容為蒐集、處理及利用，您將無法參加
              Hewlett Packard Enterprise 舉辦之各項活動。
              當您送出表單的同時，即表明您已由所屬單位取得一切必要之批准許可，得受領與本活動有關，且由 HPE
              提供之有價物品。您並確認此之受領行為並不會違反您所屬單位之任何法律或道德標準。HPE將不對其承擔任何責任。
            </li>
          </ul>
        </div>
        <template v-if="!isFormSubmitSuccess">
          <button
            type="submit"
            class="submit-button relative mt-4 flex justify-center items-center gap-1 w-full text-white text-shadow-sm/20 font-semibold py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
            @click="handleSubmit"
          >
            <span class="text-lg">提交</span>
            <span class="text-sm HPEGraphikRegular">Submit</span>
          </button>
        </template>
        <template v-else>
          <button
            type="button"
            class="submit-button relative mt-4 flex justify-center items-center gap-1 w-full text-white text-shadow-sm/20 font-semibold py-2 rounded-full transition-opacity pointer-events-auto cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1]"
            @click="downloadGuide"
          >
            <span class="text-lg">下載攻略</span>
          </button>
        </template>
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
