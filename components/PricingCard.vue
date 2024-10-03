<template>
  <div
    class="flex max-w-xs flex-col space-y-8 rounded-xl border bg-white p-8 shadow-xl"
    :class="highlighted ? '-my-12' : ''"
  >
    <h4 class="text-xl font-semibold text-blue-500">Free</h4>
    <p class="text-gray-800">
      Das Open Source Invoice Tool für Freelancer und kleine Unternehmen
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  highlighted: {
    type: Boolean,
    default: false,
  },
});
</script>
