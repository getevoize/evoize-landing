<template>
	<div
		class="gap mt-10 flex flex-col justify-between space-x-8 space-y-8 rounded-5xl border border-gray-300 bg-[#F7FCFE] p-12 lg:space-y-0"
		:class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
	>
		<img
			:alt="title"
			:src="imageSrc"
			class="rounded-5xl border-4 border-[#95BAFC] border-opacity-20"
		>
		<div class="flex flex-col justify-center space-y-2">
			<p class="text-xl font-semibold text-gray-600">
				{{ eyebrow }}
			</p>
			<h3 class="text-5xl font-bold text-blue-500">
				{{ title }}
			</h3>
			<p class="text-gray-800">
				{{ content }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
export interface FeatureHighlightProps {
	imageSrc: string
	eyebrow: string
	title: string
	content: string
	reverse: boolean
}

withDefaults(defineProps<FeatureHighlightProps>(), {
	reverse: false,
})
</script>
