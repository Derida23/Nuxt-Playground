<template>
  <div class="section-image">
    <img src="~/assets/images/logo/tourid.svg" alt="tourid logo" />
  </div>
  <div class="section-title">
    <h1>Sebagai Admin</h1>
    <div class="description">
      <p class="text-center text-gray-400">
        Masukan email & kata sandi untuk dapat <br />
        mengakses dashboard TourID.
      </p>
    </div>
  </div>
  <div class="section-form">
    <div class="w-96">
      <TInput
        v-model="form.email"
        label="Email"
        icon="i-heroicons-envelope"
        placeholder="Masukkan emailmu"
      />

      <TInput
        v-model="form.password"
        label="Kata Sandi"
        icon="i-heroicons-lock-closed"
        placeholder="Passwordnya apa?"
        trailingIcon="i-heroicons-eye"
        :ui="{ icon: { trailing: { pointer: '' } } }"
        :type="type"
      >
        <template #trailing>
          <UButton
            color="white"
            variant="link"
            :padded="false"
            :icon="iconVisibility"
            @click="onVisibility"
          />
        </template>
      </TInput>

      <UButton variant="solid" block class="mt-8">Mulai Sekarang</UButton>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const form = ref({
  email: "",
  password: "",
});

// Password show and hide
const type = ref("password");

const onVisibility = () => {
  type.value = type.value === "password" ? "text" : "password";
};
const iconVisibility = computed(() => {
  if (type.value === "password") {
    return "i-heroicons-eye";
  }

  return "i-heroicons-eye-slash";
});

// Validation schema
import { useForm } from "vee-validate";

const validateEmail = (value: string) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }
  // All is good
  return true;
};

const validatePassword = (value: string) => {
  if (!value) {
    return "this field is required";
  }

  return true;
};

const simpleSchema = {
  email: validateEmail,
  password: validatePassword,
};

const { handleSubmit, handleReset } = useForm({
  validationSchema: simpleSchema,
});
</script>

<style scoped>
.section-image {
  @apply flex;
  @apply justify-center;
  @apply mb-8;
}

.section-title {
  h1 {
    @apply font-black;
    @apply text-3xl;
    @apply text-center;
    @apply mb-4;
  }

  .description {
    @apply flex;
    @apply justify-center;
  }
}

.section-form {
  @apply flex;
  @apply items-center;
  @apply justify-center;

  @apply mt-6;
}
</style>
