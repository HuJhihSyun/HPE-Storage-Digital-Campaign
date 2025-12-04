type ValidationErrors = {
  name: string
  company: string
  industry: string
  title: string
  decisionRole: string
  email: string
  phone: string
  mobile: string
}

export function useValidateUtils() {
  function validate(form: Record<string, any>): ValidationErrors {
    const errorMessages = {
      name: '',
      company: '',
      industry: '',
      title: '',
      decisionRole: '',
      email: '',
      phone: '',
      mobile: '',
      policy: ''
    }

    if (!form.name) errorMessages.name = '姓名為必填欄位'

    if (!form.company) errorMessages.company = '公司名稱為必填欄位'

    if (!form.industry) errorMessages.industry = '產業別為必填欄位'

    if (!form.title) errorMessages.title = '職稱為必填欄位'

    if (!form.decisionRole) errorMessages.decisionRole = '決策角色為必填欄位'

    if (!form.email) {
      errorMessages.email = '電子郵件為必填欄位'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(form.email)) {
        errorMessages.email = '請輸入有效的電子郵件地址'
      }
    }

    if (!form.phone) {
      errorMessages.phone = '電話為必填欄位'
    } else if (form.phone && !/^\d+$/.test(form.phone)) {
      errorMessages.phone = '請填寫有效之電話號碼'
    } else if (form.extension && !/^\d*$/.test(form.extension)) {
      errorMessages.phone = '請填寫有效之分機號碼'
    }

    if (!form.mobile) {
      errorMessages.mobile = '行動電話為必填欄位'
    } else if (form.mobile && !/^09\d{8}$/.test(form.mobile)) {
      errorMessages.mobile = '請填寫有效之行動電話號碼'
    }

    if (!form.policy) errorMessages.policy = '請同意隱私政策'

    return errorMessages
  }

  return {
    validate
  }
}
