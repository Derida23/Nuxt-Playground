<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const siteTitle = config.public.siteTitle;

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - ${siteTitle}` : siteTitle,
});
</script>
