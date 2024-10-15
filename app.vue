<template>
	<div class="relative bg-gradient-to-t from-[#DBF1FE] to-[#FFFFFF]">
		<AppNavigation />

		<HeaderBackground />
		<header class="container mx-auto flex flex-col px-0 sm:px-8">
			<PageTeaser />
			<div class="mt-20 flex flex-col lg:flex-row">
				<PreviewCard
					v-for="(card, index) in previewCards"
					:key="index"
					:card="card"
				/>
			</div>
		</header>

		<section
			id="highlight"
			class="mx-auto mt-20 max-w-7xl px-8 lg:mt-52"
		>
			<SectionTitle
				title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
			/>
			<FeatureHighlight
				v-for="(highlight, index) in featureHighlights"
				:key="`${index}_highlight`"
				:eyebrow="highlight.eyebrow"
				:title="highlight.title"
				:content="highlight.content"
				:image-src="highlight.imageSrc"
				:reverse="highlight.reverse"
			/>
		</section>

		<section
			id="highlight2"
			class="mx-auto mt-20 max-w-7xl px-4"
		>
			<SectionTitle
				title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
			/>
			<FeatureHighlight
				v-for="(highlight, index) in featureHighlights.splice(1)"
				:key="`${index}_highlight2`"
				:eyebrow="highlight.eyebrow"
				:title="highlight.title"
				:content="highlight.content"
				:image-src="highlight.imageSrc"
				:reverse="highlight.reverse"
			/>
		</section>

		<PromoSection />

		<PricingSection
			id="pricing"
			title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
			:pricing-options="pricingOptions"
		/>
	</div>
</template>

<script setup lang="ts">
import type { PreviewCardProps } from '~/components/PreviewCard.vue'
import PreviewCard from '~/components/PreviewCard.vue'
import AppNavigation from '~/components/AppNavigation.vue'
import PageTeaser from '~/components/PageTeaser.vue'
import HeaderBackground from '~/components/HeaderBackground.vue'
import type {
	FeatureHighlightProps,
} from '~/components/FeatureHighlight.vue'
import FeatureHighlight from '~/components/FeatureHighlight.vue'
import PromoSection from '~/components/PromoSection.vue'

const previewCards: PreviewCardProps[] = [
	{
		content: {
			text: 'Hubspot API implementation',
			billedAmount: '29.640€',
			expectedAmount: '38.000€',
			progress: '78%',
		},
		mainColor: '#ffbb37',
		secondaryColor: '#fdf4e5',
		transformation: 'rotate-12 xl:translate-x-1/3',
	},
	{
		content: {
			text: 'Design Tokens update',
			billedAmount: '2.601€',
			expectedAmount: '5.100€',
			progress: '51%',
		},
		mainColor: '#3b82f6',
		secondaryColor: '#bfdbfe',
		transformation: '-rotate-12 xl:translate-x-1/4 xl:translate-y-1/3',
	},
	{
		content: {
			text: 'Database implementation',
			billedAmount: '5.518€',
			expectedAmount: '8.900€',
			progress: '62%',
		},
		mainColor: '#d946ef',
		secondaryColor: '#f5d0fe',
		transformation: 'rotate-12  xl:-translate-y-1/4',
	},
]

const featureHighlights: FeatureHighlightProps[] = [
	{
		eyebrow: 'Leichtes Rechnung erstellen',
		title: 'Rechungen erstellen leicht gemacht',
		content: 'Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.',
		imageSrc: 'https://placehold.co/500x400',
	},
	{
		eyebrow: 'Leichtes Rechnung erstellen',
		title: 'Rechungen erstellen leicht gemacht',
		content: 'Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.',
		imageSrc: 'https://placehold.co/500x400',
		reverse: true,
	},
]

const pricingOptions = ref([
	{
		price: 'Free',
		description:
      'Das Open Source Invoice Tool für Freelancer und kleine Unternehmen',
		highlighted: false,
	},
	{
		price: '139.99€',
		description:
      'Das Open Source Invoice Tool für Freelancer und kleine Unternehmen 2',
		highlighted: true,
	},
	{
		price: '39.99€',
		description:
      'Das Open Source Invoice Tool für Freelancer und kleine Unternehmen 3',
		highlighted: false,
	},
])
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
