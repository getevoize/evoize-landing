<template>
	<div class="relative bg-gradient-to-t from-[#DBF1FE] to-[#FFFFFF]">
		<AppNavigation />

		<HeroBackground />
		<HeroSection :preview-cards="previewCards" />

		<FeatureSection
			class="lg:mt-52"
			title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
      id="highlight"
			:feature-highlights="featureHighlights"
		/>

		<FeatureSection
			title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
      id="highlight2"
			:feature-highlights="featureHighlights2"
		/>

		<PromoSection
			v-bind="promoCardProps"
		/>

		<PricingSection
			id="pricing"
			title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
			:pricing-options="pricingOptions"
		/>
	</div>
</template>

<script setup lang="ts">
import type { HeroPreviewCardProps } from '~/components/hero/HeroPreviewCard.vue'
import type { ContentCardProps } from '~/components/content/ContentCard.vue'

import AppNavigation from '~/components/base/AppNavigation.vue'
import HeroBackground from '~/components/hero/HeroBackground.vue'
import type { PromoSectionProps } from '~/components/sections/PromoSection.vue'
import PromoSection from '~/components/sections/PromoSection.vue'
import HeroSection from '~/components/hero/HeroSection.vue'
import FeatureSection from '~/components/sections/FeatureSection.vue'
import PricingSection from '~/components/sections/PricingSection.vue'

const previewCards: HeroPreviewCardProps[] = [
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

const featureHighlights: ContentCardProps[] = [
	{
		eyebrow: 'Leichtes Rechnung erstellen',
		title: 'Rechungen erstellen leicht gemacht',
		content:
      'Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.',
		imageSrc: 'https://placehold.co/500x400',
	},
	{
		eyebrow: 'Leichtes Rechnung erstellen',
		title: 'Rechungen erstellen leicht gemacht',
		content:
      'Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.',
		imageSrc: 'https://placehold.co/500x400',
		reverse: true,
	},
]

const featureHighlights2: ContentCardProps[] = [
	{
		eyebrow: 'Leichtes Rechnung erstellen',
		title: 'Rechungen erstellen leicht gemacht',
		content:
      'Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.',
		imageSrc: 'https://placehold.co/500x400',
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

const promoCardProps: PromoSectionProps = {
	title: 'Das Open Source Invoice Tool für Freelancer und kleine Unternehmen',
	subText:
    'Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.',
	promoContent: {
		title: 'Das Open Source Invoice Tool',
		content:
      'Ideal für Freelancer und kleine Unternehmen die eine anpassbare und',
	},
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
