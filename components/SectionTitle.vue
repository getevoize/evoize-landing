<template>
  <h2
    class="text-center text-5xl font-bold text-blue-500 lg:max-w-4xl"
    :class="[
      colorClass,
      {
        'lg:text-left': align === 'left',
        'lg:text-center': align === 'center',
        'lg:text-right': align === 'right',
      },
    ]"
  >
    {{ title }}
  </h2>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  color: String,
  align: {
    type: String,
    default: "left",
    validator: (value: string) => ["left", "center", "right"].includes(value),
  },
  colorClass: {
    type: String,
    default: "text-blue-500",
  },
});
</script>
