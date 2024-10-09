<template>
	<div class="relative bg-gradient-to-t from-[#DBF1FE] to-[#FFFFFF]">
		<AppNavigation />

		<HeaderBackground />
		<header class="container mx-auto flex flex-col px-0 sm:px-8">
			<PageTeaser />
			<div class="mt-20 xl:flex">
				<PreviewCard
					class="rotate-12 xl:translate-x-1/3"
					:content="contentCard1"
					main-color="#ffbb37"
					secondary-color="#fdf4e5"
				/>
				<PreviewCard
					class="-rotate-12 xl:translate-y-1/3"
					:content="contentCard2"
					main-color="#3b82f6"
					secondary-color="#bfdbfe"
				/>
				<PreviewCard
					class="rotate-12 xl:-translate-x-1/3"
					:content="contentCard3"
					main-color="#d946ef"
					secondary-color="#f5d0fe"
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
				eyebrow="Leichtes Rechnung erstellen"
				title="Rechungen erstellen leicht gemacht"
				content="Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
            Rechnungen zu generieren und sofort an Kunden zu senden. Dies
            beschleunigt den Zahlungseingang und verbessert Ihren Cashflow."
				image-src="https://placehold.co/500x400"
			/>
			<FeatureHighlight
				eyebrow="Leichtes Rechnung erstellen"
				title="Rechungen erstellen leicht gemacht"
				content="Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
            Rechnungen zu generieren und sofort an Kunden zu senden. Dies
            beschleunigt den Zahlungseingang und verbessert Ihren Cashflow."
				image-src="https://placehold.co/500x400"
				reverse
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
				eyebrow="Leichtes Rechnung erstellen"
				title="Rechungen erstellen leicht gemacht"
				content="Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
            Rechnungen zu generieren und sofort an Kunden zu senden. Dies
            beschleunigt den Zahlungseingang und verbessert Ihren Cashflow."
				image-src="https://placehold.co/500x400"
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
import type { PreviewCardContent } from '~/components/PreviewCard.vue'
import PreviewCard from '~/components/PreviewCard.vue'
import AppNavigation from '~/components/AppNavigation.vue'
import PageTeaser from '~/components/PageTeaser.vue'
import HeaderBackground from '~/components/HeaderBackground.vue'
import FeatureHighlight from '~/components/FeatureHighlight.vue'
import PromoSection from '~/components/PromoSection.vue'

const contentCard1: PreviewCardContent = {
	text: 'Hubspot API implementation',
	value1: '29.640€',
	value2: '38.000€',
	progress: '78%',
}

const contentCard2: PreviewCardContent = {
	text: 'Design Tokens update',
	value1: '2.601€',
	value2: '5.100€',
	progress: '51%',
}

const contentCard3: PreviewCardContent = {
	text: 'Database implementation',
	value1: '5.518€',
	value2: '8.900€',
	progress: '62%',
}

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
