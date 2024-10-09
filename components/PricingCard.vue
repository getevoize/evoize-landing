<template>
  <div
    class="flex max-w-xs flex-col space-y-8 rounded-xl border bg-white p-8 shadow-xl"
    :class="highlighted ? '-my-12' : ''"
  >
    <h4 class="text-xl font-semibold text-blue-500">{{ price }}</h4>
    <p class="text-gray-800">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  highlighted: {
    type: Boolean,
    default: false,
  },
  price: String,
  description: String,
});
</script>
