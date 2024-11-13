<template>
	<header class="container mx-auto flex flex-col px-0 sm:px-8">
		<HeroTeaser />
		<div class="mt-20 flex flex-col lg:flex-row">
			<HeroPreviewCard
				v-for="(card, index) in previewCards"
				:key="index"
				:card="card"
			/>
		</div>
	</header>
</template>

<script setup lang="ts">
import HeroTeaser from '~/components/hero/HeroTeaser.vue'
import HeroPreviewCard, {
	type HeroPreviewCardProps,
} from '~/components/hero/HeroPreviewCard.vue'

defineProps<{ previewCards: HeroPreviewCardProps[] }>()
</script>
