<script setup lang="ts">
const router = useRouter()
const toast = useToast()
</script>

<template>
  <UButton @click="router.push('/test')">
    TEST ROUTE
  </UButton>
  ini halaman admin dashboard
  <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
</template>

<style scoped lang="postcss"></style>
