<template>
	<section
		id="highlight"
		class="mx-auto mt-20 max-w-7xl px-4"
	>
		<SectionTitle :title="title" />
		<ContentCard
			v-for="(highlight, index) in featureHighlights"
			:key="`${index}_highlight`"
			:eyebrow="highlight.eyebrow"
			:title="highlight.title"
			:content="highlight.content"
			:image-src="highlight.imageSrc"
			:reverse="highlight.reverse"
		/>
	</section>
</template>

<script setup lang="ts">
import ContentCard, {
	type ContentCardProps,
} from '~/components/content/ContentCard.vue'

export interface FeatureSectionProps {
	title: string
	featureHighlights: ContentCardProps[]
}

defineProps<FeatureSectionProps>()
</script>
