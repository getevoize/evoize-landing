<template>
  <h2 class="text-5xl font-bold text-blue-500 text-center lg:max-w-4xl lg:text-left">
    {{ title }}
  </h2>
</template>
<script setup lang="ts">
defineProps({
  title: String
})
</script>
