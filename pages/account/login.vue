<script setup lang="ts">
import { authSchema } from '~/schema/auth'

useHead({ title: 'Login' })
definePageMeta({
  layout: 'auth',
})

const form = ref({
  email: '',
  password: '',
  is_admin: 1,
})

// Password show and hide
const type = ref('password')
function onVisibility() {
  type.value = type.value === 'password' ? 'text' : 'password'
}
const iconVisibility = computed(() => {
  if (type.value === 'password')
    return 'i-heroicons-eye'

  return 'i-heroicons-eye-slash'
})

// Validation schema
const { handleSubmit } = useForm({
  validationSchema: authSchema,
})

// Handle login api
const { signin } = useAuth()

const onSubmit = handleSubmit(async () => {
  await signin(form.value)
})
</script>

<template>
  <div class="section-image">
    <img src="~/assets/images/logo/tourid.svg" alt="tourid logo">
  </div>
  <div class="section-title">
    <h1>Sebagai Admin</h1>
    <div class="description">
      <p class="text-center text-gray-400">
        Masukan email & kata sandi untuk dapat <br>
        mengakses dashboard TourID.
      </p>
    </div>
  </div>
  <div class="section-form">
    <div class="w-96">
      <!-- <form @submit.prevent="onSubmit"> -->
      <TInput
        v-model="form.email"
        name="email"
        label="Email"
        icon="i-heroicons-envelope"
        placeholder="Masukkan emailmu"
        :autofocus="true"
      />

      <TInput
        v-model="form.password"
        name="password"
        label="Kata Sandi"
        icon="i-heroicons-lock-closed"
        placeholder="Passwordnya apa?"
        trailing-icon="i-heroicons-eye"
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

      <UButton
        type="submit"
        variant="solid"
        block
        class="mt-8"
        @click="onSubmit"
      >
        Mulai Sekarang
      </UButton>

      <!-- </form> -->
    </div>
  </div>
</template>

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
