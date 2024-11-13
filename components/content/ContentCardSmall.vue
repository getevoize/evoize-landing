<template>
	<div
		class="flex flex-col items-center justify-center space-y-8 rounded-5xl border bg-white p-8 shadow-xl"
	>
		<img
			alt="Das Open Source Invoice Tool"
			src="https://placehold.co/400x300"
			class="mt-8 rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20"
		>
		<h3 class="text-left text-4xl font-bold text-blue-500">
			{{ title }}
		</h3>
		<p class="text-2xl font-semibold text-gray-600">
			{{ content }}
		</p>
	</div>
</template>

<script setup lang="ts">
export interface ContentCardSmallProps {
	title: string
	content: string
}

defineProps<ContentCardSmallProps>()
</script>
