<template>
	<div
		class="relative z-10 mx-auto max-w-sm rounded-[2rem] border-2 border-[#A0CEFC] bg-white px-10 py-4 text-center shadow-lg shadow-blue-300"
		:style="{ color: mainColor }"
	>
		<div
			class="absolute -my-4 h-full w-[1px] opacity-20"
			:style="{ backgroundColor: mainColor }"
		/>
		<div>
			<p
				class="ml-4 mt-2 truncate font-titan text-3xl font-semibold tracking-wide"
			>
				{{ content.text }}
			</p>
		</div>

		<div
			class="absolute left-0 right-0 mt-4 h-[1px] opacity-20"
			:style="{ backgroundColor: mainColor }"
		/>

		<div class="ml-4 mt-10">
			<p class="text-4xl font-semibold">
				{{ content.value1 }}/<span class="opacity-60">{{
					content.value2
				}}</span>
			</p>
		</div>

		<div
			class="ml-4 mt-4 flex h-20 w-full items-center justify-between rounded-full p-2"
			:style="{ backgroundColor: secondaryColor }"
		>
			<div
				class="h-full rounded-full"
				:style="{ backgroundColor: mainColor, width: content.progress }"
			/>
			<p class="text-4xl font-bold">
				{{ content.progress }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
export interface PreviewCardContent {
	text: string
	value1: string
	value2: string
	progress: string
}

defineProps<{
	content: PreviewCardContent
	mainColor: string
	secondaryColor: string
}>()
</script>
