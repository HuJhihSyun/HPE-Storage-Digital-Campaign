export interface ModalOptions {
  title?: string
  content?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
}

const isOpen = ref(false)
const modalOptions = ref<ModalOptions>({})

export function useBasicModal() {
  function openModal(options: ModalOptions) {
    modalOptions.value = options
    isOpen.value = true
  }

  function closeModal() {
    isOpen.value = false
  }

  return {
    isOpen,
    modalOptions,
    openModal,
    closeModal
  }
}
