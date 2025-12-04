<script lang="ts" setup>
  import { useVModel } from '@vueuse/core'

  interface AtomicsInputProps {
    modelValue: string
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
      class="relative bg-linear-to-tr flex items-center gap-2.5 w-full border border-transparent focus-within:border-[#62E5F6] focus-within:text-[#62E5F6] [&_svg]:focus-within:text-[#62E5F6] rounded-xl px-3 py-1"
      :class="[
        inputClass,
        {
          'pointer-events-none from-gray-100/20 to-gray-200/10': disabled,
          'from-white/70 to-white/20 focus-within:from-white/90 focus-within:to-white/40': !disabled,
          'border-red-300 focus-within:border-[#62E5F6]': errorMessage
        }
      ]"
    >
      <textarea
        :id="`input-${type}`"
        :name="`input-${type}`"
        :type="type"
        :placeholder="placeholder"
        rows="2"
        v-model="modelValue"
        class="w-full outline-none bg-transparent text-black placeholder:text-gray-400 font-normal"
        style="resize: none"
      ></textarea>
    </div>
    <h6 class="absolute right-0 bottom-0 translate-y-full text-xs text-red-500">
      {{ errorMessage }}
    </h6>
  </div>
</template>
