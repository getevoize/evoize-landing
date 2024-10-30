<template>
	<section class="mx-auto mb-40 mt-20 max-w-3xl space-y-8 px-4">
		<SectionTitle
			:title="title"
			align="center"
			color-class="text-gray-700"
		/>
		<p class="text-center text-xl text-gray-600">
			{{ subText }}
		</p>

		<ContentCardSmall
			:title="promoContent.title"
			:content="promoContent.content"
		/>
	</section>
</template>

<script setup lang="ts">
import ContentCardSmall, {
	type ContentCardSmallProps,
} from '~/components/content/ContentCardSmall.vue'

export interface PromoSectionProps {
	title: string
	subText: string
	promoContent: ContentCardSmallProps
}

defineProps<PromoSectionProps>()
</script>
