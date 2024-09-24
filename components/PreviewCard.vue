<template>
  <div
      class="z-10 relative mx-auto max-w-sm bg-white shadow-lg border-2 border-[#A0CEFC] shadow-blue-300 rounded-[2rem] px-10 py-4 text-center"
      :style="{ color: mainColor }"
  >
    <div class="-my-4 absolute w-[1px] h-full opacity-20" :style="{ backgroundColor: mainColor }"></div>
    <div>
      <p class="mt-2 ml-4 truncate font-titan font-semibold tracking-wide text-3xl">{{ content.text }}</p>
    </div>

    <div class="absolute mt-4 left-0 right-0 h-[1px] opacity-20" :style="{ backgroundColor: mainColor }"></div>

    <div class="mt-10 ml-4">
      <p class="font-semibold text-4xl ">{{ content.value1 }}/<span class="opacity-60">{{ content.value2 }}</span></p>
    </div>

    <div class="mt-4 ml-4 rounded-full w-full h-20 p-2 flex items-center justify-between" :style="{ backgroundColor: secondaryColor }">
      <div class="rounded-full h-full" :style="{ backgroundColor: mainColor, width: content.progress }"></div>
      <p class="font-bold text-4xl">{{ content.progress }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface PreviewCardContent {
  text: string;
  value1: string;
  value2: string;
  progress: string;
}

defineProps<{
  content: PreviewCardContent
  mainColor: {
    type: String,
    required: true
  }
  secondaryColor: {
    type: String,
    required: true
  }
}>();
</script>
