<script lang="ts" setup>
  import { useVModel } from '@vueuse/core'

  interface AtomicsInputProps {
    modelValue: string | number | unknown
    type: string
    options: Array<{ id: string | number; value: string | number }>
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

  const propsOptions = computed(() => {
    return props.options || []
  })
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
      class="relative bg-linear-to-tr flex items-center gap-2.5 w-full border border-transparent focus-within:border-[#62E5F6] [&_svg]:focus-within:text-[#62E5F6]"
      :class="[
        inputClass,
        {
          'pointer-events-none from-gray-100/20 to-gray-200/10': disabled,
          'from-white/70 to-white/20': !disabled,
          'border-red-300 focus-within:border-[#62E5F6]': errorMessage
        },
        { 'rounded-full px-3 py-1.5': !inputClass }
      ]"
    >
      <select
        :id="`select-${type}`"
        :name="`select-${type}`"
        class="w-full outline-none bg-transparent font-normal"
        :class="{ 'text-black': modelValue, 'text-gray-400': !modelValue }"
        v-model="modelValue"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="option in propsOptions" :key="option.id" :value="option.value">
          {{ option.value }}
        </option>
      </select>
    </div>

    <h6 v-if="errorMessage" class="absolute right-0 -bottom-0.5 translate-y-full text-xs text-red-600">
      {{ errorMessage }}
    </h6>
  </div>
</template>
