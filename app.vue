<template>
  <div class="relative from-[#DBF1FE] to-[#FFFFFF] bg-gradient-to-t">
    <Navigation></Navigation>

    <HeaderBackground></HeaderBackground>
    <header class="flex flex-col min-h-screen mx-auto px-0 sm:px-8 container">
        <PageTeaser></PageTeaser>
        <div class="mt-20 xl:flex">
          <PreviewCard class="xl:translate-x-1/3 rotate-12" :content=contentCard1 main-color="#ffbb37"
                       secondary-color="#fdf4e5"></PreviewCard>
          <PreviewCard class="xl:translate-y-1/3 -rotate-12" :content=contentCard2 main-color="#3b82f6"
                       secondary-color="#bfdbfe"></PreviewCard>
          <PreviewCard class="xl:-translate-x-1/3 rotate-12" :content=contentCard3 main-color="#d946ef"
                       secondary-color="#f5d0fe"></PreviewCard>
        </div>
    </header>

    <div class="min-h-[2000px] ">
      <section class="max-w-7xl mx-auto">
        <h2 class="mt-20 text-4xl font-bold text-blue-600 max-w-md">
          Das Open Source Invoice Tool für Freelancer und kleine Unternehmen
        </h2>

        <div class="border border-gray-300 rounded-xl p-8 bg-[#F7FCFE] flex justify-between gap">
            <img src="https://placehold.co/600x400">
            <div>
              <p>Leichtes Rechnung erstellen</p>
              <h2 class="font-bold text-2xl text-blue-500">Rechungen erstellen leicht gemacht</h2>
              <p>Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.</p>
            </div>

        </div>

      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
import PreviewCard, {PreviewCardContent} from "~/components/PreviewCard.vue";
import Navigation from "~/components/Navigation.vue";
import PageTeaser from "~/components/PageTeaser.vue";
import HeaderBackground from "~/components/HeaderBackground.vue";

const contentCard1: PreviewCardContent = {
  text: "Hubspot API implementation",
  value1: "29.640€",
  value2: "38.000€",
  progress: "78%"
}

const contentCard2: PreviewCardContent = {
  text: "Design Tokens update",
  value1: "2.601€",
  value2: "5.100€",
  progress: "51%"
}

const contentCard3: PreviewCardContent = {
  text: "Database implementation",
  value1: "5.518€",
  value2: "8.900€",
  progress: "62%"
}
</script>
