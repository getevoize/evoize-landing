<template>
  <div class="relative from-[#DBF1FE] to-[#FFFFFF] bg-gradient-to-t">
    <Navigation></Navigation>

    <HeaderBackground></HeaderBackground>
    <header class="flex flex-col mx-auto px-0 sm:px-8 container">
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

    <section class="px-4 max-w-7xl mx-auto mt-52">
      <h2 class="text-4xl font-bold text-blue-500 max-w-xl">
        Das Open Source Invoice Tool für Freelancer und kleine Unternehmen
      </h2>

      <div class="mt-10 border border-gray-300 rounded-[3rem] p-12 bg-[#F7FCFE] flex flex-col lg:flex-row justify-between gap space-x-8 space-y-8 lg:space-y-0">
          <img src="https://placehold.co/500x400" class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20 ">
          <div class="flex flex-col justify-center space-y-2">
            <p class="text-gray-600 text-xl font-semibold">Leichtes Rechnung erstellen</p>
            <h3 class="font-bold text-5xl text-blue-500">Rechungen erstellen leicht gemacht</h3>
            <p class="text-gray-800">Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.</p>
          </div>
      </div>

      <div class="mt-10 border border-gray-300 rounded-[3rem] p-12 bg-[#F7FCFE] flex flex-col lg:flex-row-reverse justify-between gap space-x-8 space-y-8 lg:space-y-0">
        <img src="https://placehold.co/500x400" class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20 ">
        <div class="flex flex-col justify-center space-y-2">
          <p class="text-gray-600 text-xl font-semibold">Leichtes Rechnung erstellen</p>
          <h3 class="font-bold text-5xl text-blue-500">Rechungen erstellen leicht gemacht</h3>
          <p class="text-gray-800">Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.</p>
        </div>
      </div>

    </section>

    <section class="px-4 max-w-7xl mx-auto mt-20">
      <h2 class="text-4xl font-bold text-blue-500 max-w-xl">
        Das Open Source Invoice Tool für Freelancer und kleine Unternehmen
      </h2>

      <div class="mt-10 border border-gray-300 rounded-[3rem] p-12 bg-[#F7FCFE] flex flex-col lg:flex-row justify-between gap space-x-8 space-y-8 lg:space-y-0">
        <img src="https://placehold.co/500x400" class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20 ">
        <div class="flex flex-col justify-center space-y-2">
          <p class="text-gray-600 text-xl font-semibold">Leichtes Rechnung erstellen</p>
          <h3 class="font-bold text-5xl text-blue-500">Rechungen erstellen leicht gemacht</h3>
          <p class="text-gray-800">Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.</p>
        </div>
      </div>
    </section>

    <section class="px-4 max-w-3xl mx-auto mt-20 space-y-8 mb-40">
      <h2 class="text-6xl font-bold text-gray-600 text-center">
        Das Open Source Invoice Tool für Freelancer und kleine Unternehmen
      </h2>
      <p class="text-gray-600 text-xl text-center">Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv Rechnungen zu generieren und sofort an Kunden zu senden. Dies beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.</p>

      <div class="border bg-white rounded-[3rem] items-center p-8 flex flex-col justify-center space-y-8 shadow-xl">
        <img src="https://placehold.co/400x300" class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20 mt-8">
        <h3 class="font-bold text-5xl text-blue-500">Das Open Source Invoice Tool</h3>
        <p class="text-gray-600 text-2xl font-semibold">Ideal für Freelancer und kleine Unternehmen die eine anpassbare und</p>
      </div>
    </section>

    <section class="bg-white p-8 mb-40">

      <div class="mt-20 from-[#EAF4FD] to-[#C4EBFD] bg-gradient-to-b  rounded-[3rem] items-center p-8 flex flex-col justify-center mx-auto max-w-7xl ">
        <h2 class="mt-20 text-5xl font-bold text-gray-600 text-center max-w-3xl">Das Open Source Invoice Tool  für Freelancer und kleine Unternehmen</h2>

        <div class="flex space-x-4 sm:space-x-8 mt-8 translate-y-20 ">
          <div class="border rounded-xl bg-white flex flex-col p-8 max-w-xs shadow-xl space-y-8">
            <h4 class="text-blue-500 font-semibold text-xl">Free</h4>
            <p class="text-gray-800">Das Open Source Invoice Tool  für Freelancer und kleine Unternehmen</p>
          </div>

          <div class="border rounded-xl bg-white flex flex-col p-8 max-w-xs shadow-xl space-y-8 -my-12">
            <h4 class="text-blue-500 font-semibold text-xl">139.99</h4>
            <p class="text-gray-800">Das Open Source Invoice Tool  für Freelancer und kleine Unternehmen</p>
          </div>

          <div class="border rounded-xl bg-white flex flex-col p-8 max-w-xs shadow-xl space-y-8">
            <h4 class="text-blue-500 font-semibold text-xl">39.99</h4>
            <p class="text-gray-800">Das Open Source Invoice Tool  für Freelancer und kleine Unternehmen</p>
          </div>

        </div>
      </div>
    </section>

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
