<template>
  <section class="mb-40 bg-white p-8">
    <div
      class="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center rounded-[3rem] bg-gradient-to-b from-[#EAF4FD] to-[#C4EBFD] p-8"
    >
      <h2 class="mt-20 max-w-3xl text-center text-5xl font-bold text-gray-600">
        {{ title }}
      </h2>

      <div class="mt-8 flex translate-y-20 space-x-4 sm:space-x-8">
        <PricingCard
          v-for="(option, index) in pricingOptions"
          :key="index"
          :price="option.price"
          :description="option.description"
          :highlighted="option.highlighted"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import PricingCard from "./PricingCard.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  pricingOptions: {
    type: Array as () => Array<{
      price: string;
      description: string;
      highlighted?: boolean;
    }>,
    required: true,
  },
});
</script>

<style scoped>
/* You can add component-specific styles here */
</style>
