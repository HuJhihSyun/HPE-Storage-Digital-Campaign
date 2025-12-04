<script lang="ts" setup>
  import { useVModel } from '@vueuse/core'

  interface AtomicsBasicCheckboxProps {
    modelValue: boolean
    disabled?: boolean
  }

  interface AtomicsBasicCheckboxEmits {
    (event: 'update:modelValue', value: AtomicsBasicCheckboxProps['modelValue']): void
    (event: 'change', value: AtomicsBasicCheckboxProps['modelValue']): void
  }

  const props = withDefaults(defineProps<AtomicsBasicCheckboxProps>(), {
    disabled: false,
    modelValue: false
  })

  const emit = defineEmits<AtomicsBasicCheckboxEmits>()

  const modelValue = useVModel(props, 'modelValue', emit)

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    modelValue.value = target.checked
    emit('change', modelValue.value)
  }
</script>

<template>
  <label
    class="relative flex items-center cursor-pointer h-fit"
    :class="{ 'pointer-events-none': disabled }"
    @click.stop
  >
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
      :disabled="disabled"
      v-bind="$attrs"
      class="peer appearance-none rounded border border-gray-300 bg-white/20 checked:border-[#62E5F6] hover:border-[#62E5F6] focus:outline-none focus:ring-none focus:shadow-none cursor-pointer"
      :class="{ disabled: disabled }"
      :style="{ display: 'inline-block' }"
    />
    <!-- 選中狀態的樣式 -->
    <span
      v-bind="$attrs"
      class="absolute left-0 top-0 rounded flex items-center justify-center transition-all text-white opacity-0 peer-checked:opacity-100 peer-checked:bg-linear-to-br peer-checked:from-[#01A982] peer-checked:to-[#62E5F6] pointer-events-none"
      :class="{ 'peer-checked:bg-gray-300': disabled }"
    >
      <svg v-bind="$attrs" class="stroke-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <slot></slot>
  </label>
</template>

<style lang="scss" scoped>
  .disabled {
    @apply pointer-events-none border-gray-300 bg-gray-100;
  }
</style>
