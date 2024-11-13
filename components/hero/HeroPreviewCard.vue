<template>
	<div
		class="relative z-10 mx-auto max-w-sm overflow-hidden rounded-4xl border-2 border-[#A0CEFC] bg-white px-10 py-4 text-center shadow-lg shadow-blue-300"
		:class="card.transformation"
		:style="{ color: card.mainColor }"
	>
		<div
			class="absolute -my-4 h-full w-[1px] opacity-20"
			:style="{ backgroundColor: card.mainColor }"
		/>
		<div>
			<p
				class="ml-4 mt-2 truncate font-titan text-3xl font-semibold tracking-wide"
			>
				{{ card.content.text }}
			</p>
		</div>

		<div
			class="absolute left-0 right-0 mt-4 h-[1px] opacity-20"
			:style="{ backgroundColor: card.mainColor }"
		/>

		<div class="ml-4 mt-10">
			<p class="text-4xl font-semibold">
				{{ card.content.billedAmount }}/<span class="opacity-60">{{
					card.content.expectedAmount
				}}</span>
			</p>
		</div>

		<div
			class="ml-4 mt-4 flex h-20 w-full items-center justify-between rounded-full p-2"
			:style="{ backgroundColor: card.secondaryColor }"
		>
			<div
				class="h-full rounded-full"
				:style="{
					backgroundColor: card.mainColor,
					width: card.content.progress,
				}"
			/>
			<p class="text-4xl font-bold">
				{{ card.content.progress }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface PreviewCardContent {
	text: string
	billedAmount: string
	expectedAmount: string
	progress: string
}

export interface HeroPreviewCardProps {
	content: PreviewCardContent
	mainColor: string
	secondaryColor: string
	transformation: string
}

defineProps<{
	card: HeroPreviewCardProps
}>()
</script>
