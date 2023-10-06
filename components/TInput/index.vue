<template>
  <div class="mb-3">
    <label for="label" class="font-medium">
      {{ label }}
      <UInput
        v-model="data"
        v-bind="$attrs"
        :icon="useIcon"
        :placeholder="placeholder"
        :color="error ? 'red' : 'white'"
      >
        <template v-for="(_, slot) in $slots" #[slot]="scope" :key="slot">
          <slot :name="slot" v-bind="scope" />
        </template>
      </UInput>
    </label>
    <p v-if="error" class="text-sm text-red-600 !mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  error: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);
const data = useVModel(props, "modelValue", emit);

const useIcon = computed(() => {
  if (!props.icon) {
    return false;
  }

  return props.icon;
});
</script>

<style scoped></style>
