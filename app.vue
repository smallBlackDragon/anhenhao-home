<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// 您可以根据API调用或登录状态来选择此选项
const layout = "default";
</script>
