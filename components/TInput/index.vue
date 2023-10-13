<script setup lang="ts">
// import { useVModel } from "@vueuse/core";
import { toRef } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  // modelValue: {
  //   type: String,
  //   default: undefined,
  // },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
})

// const emit = defineEmits(["update:modelValue"]);
// const data = useVModel(props, "modelValue", emit);

const useIcon = computed(() => {
  if (!props.icon)
    return undefined

  return props.icon
})

const { value = undefined, errorMessage } = useField(toRef(props, 'name'))
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="font-medium">
      {{ label }}
      <UInput
        v-model="value"
        v-bind="$attrs"
        :icon="useIcon"
        :placeholder="placeholder"
        :color="errorMessage ? 'red' : 'white'"
      >
        <template v-for="(_, slot) in $slots" #[slot]="scope" :key="slot">
          <slot :name="slot" v-bind="scope" />
        </template>
      </UInput>
    </label>
    <p v-if="errorMessage" class="text-sm text-red-600 !mt-1">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped></style>
