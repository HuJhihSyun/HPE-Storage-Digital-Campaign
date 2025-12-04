<script lang="ts" setup>
  import { useVModel } from '@vueuse/core'

  interface AtomicsInputProps {
    modelValue: string | number | unknown
    type: string
    placeholder: string
    label?: string
    disabled?: boolean
    required?: boolean
    errorMessage?: string
    inputClass?: string
  }

  interface AtomicsInputEmits {
    (event: 'update:modelValue', value: AtomicsInputProps['modelValue']): void
  }

  const props = withDefaults(defineProps<AtomicsInputProps>(), {})

  const emit = defineEmits<AtomicsInputEmits>()

  const modelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div class="relative pointer-events-auto">
    <div class="flex justify-between items-end" :class="{ 'mb-1': label }">
      <label
        v-if="label"
        :for="`input-${type}`"
        class="inline-block text-sm font-semibold text-white text-shadow-sm/20 whitespace-nowrap line-clamp-1"
        >{{ label }}<sup v-if="required" class="inline-block text-white ml-1">*</sup>
      </label>
      <div>
        <slot name="right-label" />
      </div>
    </div>
    <div
      class="relative bg-linear-to-tr flex items-center gap-2.5 w-full border border-transparent focus-within:border-[#62E5F6] focus-within:text-[#62E5F6] [&_svg]:focus-within:text-[#62E5F6] rounded-full px-3 py-1.5"
      :class="[
        inputClass,
        {
          'pointer-events-none from-gray-100/20 to-gray-200/10': disabled,
          'from-white/70 to-white/20 focus-within:from-white/90 focus-within:to-white/40': !disabled,
          'border-red-300 focus-within:border-[#62E5F6]': errorMessage
        }
      ]"
    >
      <slot name="left-icon" />
      <input
        :id="`input-${type}`"
        :name="`input-${type}`"
        :type="type"
        :placeholder="placeholder"
        v-model="modelValue"
        class="w-full outline-none bg-transparent text-black placeholder:text-gray-400 font-normal"
      />
      <slot name="right-icon" />
    </div>
    <h6 v-if="errorMessage" class="absolute right-0 -bottom-0.5 translate-y-full text-xs text-red-600">
      {{ errorMessage }}
    </h6>
  </div>
</template>

<style lang="scss">
  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset !important; // 颜色可以随意，这里设置的是透明色
  }
  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-text-fill-color: #000 !important; // 可加可不加
    transition: background-color 5000s ease-in-out 0s !important;
  }
</style>
