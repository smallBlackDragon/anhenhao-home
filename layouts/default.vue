<template>
  <div>
    <slot />
  </div>
</template>
<script setup>
  const route = useRoute();

  useHead({
    meta: [{ property: 'og:title', content: `俺很好 - ${route.meta.title}` }]
  });
</script>

