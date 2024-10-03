<template>
  <div class="relative bg-gradient-to-t from-[#DBF1FE] to-[#FFFFFF]">
    <Navigation></Navigation>

    <HeaderBackground></HeaderBackground>
    <header class="container mx-auto flex flex-col px-0 sm:px-8">
      <PageTeaser></PageTeaser>
      <div class="mt-20 xl:flex">
        <PreviewCard
          class="rotate-12 xl:translate-x-1/3"
          :content="contentCard1"
          main-color="#ffbb37"
          secondary-color="#fdf4e5"
        ></PreviewCard>
        <PreviewCard
          class="-rotate-12 xl:translate-y-1/3"
          :content="contentCard2"
          main-color="#3b82f6"
          secondary-color="#bfdbfe"
        ></PreviewCard>
        <PreviewCard
          class="rotate-12 xl:-translate-x-1/3"
          :content="contentCard3"
          main-color="#d946ef"
          secondary-color="#f5d0fe"
        ></PreviewCard>
      </div>
    </header>

    <section class="mx-auto mt-20 max-w-7xl px-8 lg:mt-52">
      <SectionTitle
        title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
      />

      <div
        class="gap mt-10 flex flex-col justify-between space-x-8 space-y-8 rounded-[3rem] border border-gray-300 bg-[#F7FCFE] p-12 lg:flex-row lg:space-y-0"
      >
        <img
          src="https://placehold.co/500x400"
          class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20"
        />
        <div class="flex flex-col justify-center space-y-2">
          <p class="text-xl font-semibold text-gray-600">
            Leichtes Rechnung erstellen
          </p>
          <h3 class="text-5xl font-bold text-blue-500">
            Rechungen erstellen leicht gemacht
          </h3>
          <p class="text-gray-800">
            Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
            Rechnungen zu generieren und sofort an Kunden zu senden. Dies
            beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.
          </p>
        </div>
      </div>

      <div
        class="gap mt-10 flex flex-col justify-between space-x-8 space-y-8 rounded-[3rem] border border-gray-300 bg-[#F7FCFE] p-12 lg:flex-row-reverse lg:space-y-0"
      >
        <img
          src="https://placehold.co/500x400"
          class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20"
        />
        <div class="flex flex-col justify-center space-y-2">
          <p class="text-xl font-semibold text-gray-600">
            Leichtes Rechnung erstellen
          </p>
          <h3 class="text-5xl font-bold text-blue-500">
            Rechungen erstellen leicht gemacht
          </h3>
          <p class="text-gray-800">
            Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
            Rechnungen zu generieren und sofort an Kunden zu senden. Dies
            beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto mt-20 max-w-7xl px-4">
      <SectionTitle
        title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
      />

      <div
        class="gap mt-10 flex flex-col justify-between space-x-8 space-y-8 rounded-[3rem] border border-gray-300 bg-[#F7FCFE] p-12 lg:flex-row lg:space-y-0"
      >
        <img
          src="https://placehold.co/500x400"
          class="rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20"
        />
        <div class="flex flex-col justify-center space-y-2">
          <p class="text-xl font-semibold text-gray-600">
            Leichtes Rechnung erstellen
          </p>
          <h3 class="text-5xl font-bold text-blue-500">
            Rechungen erstellen leicht gemacht
          </h3>
          <p class="text-gray-800">
            Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
            Rechnungen zu generieren und sofort an Kunden zu senden. Dies
            beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto mb-40 mt-20 max-w-3xl space-y-8 px-4">
      <SectionTitle
        title="Das Open Source Invoice Tool für Freelancer und kleine Unternehmen"
      />

      <p class="text-center text-xl text-gray-600">
        Unser Rechnungsprogramm ermöglicht es Ihnen, schnell und effektiv
        Rechnungen zu generieren und sofort an Kunden zu senden. Dies
        beschleunigt den Zahlungseingang und verbessert Ihren Cashflow.
      </p>

      <div
        class="flex flex-col items-center justify-center space-y-8 rounded-[3rem] border bg-white p-8 shadow-xl"
      >
        <img
          src="https://placehold.co/400x300"
          class="mt-8 rounded-[3rem] border-4 border-[#95BAFC] border-opacity-20"
        />
        <h3 class="text-5xl font-bold text-blue-500">
          Das Open Source Invoice Tool
        </h3>
        <p class="text-2xl font-semibold text-gray-600">
          Ideal für Freelancer und kleine Unternehmen die eine anpassbare und
        </p>
      </div>
    </section>

    <section class="mb-40 bg-white p-8">
      <div
        class="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center rounded-[3rem] bg-gradient-to-b from-[#EAF4FD] to-[#C4EBFD] p-8"
      >
        <h2
          class="mt-20 max-w-3xl text-center text-5xl font-bold text-gray-600"
        >
          Das Open Source Invoice Tool  für Freelancer und kleine Unternehmen
        </h2>

        <div class="mt-8 flex translate-y-20 space-x-4 sm:space-x-8">
          <div
            class="flex max-w-xs flex-col space-y-8 rounded-xl border bg-white p-8 shadow-xl"
          >
            <h4 class="text-xl font-semibold text-blue-500">Free</h4>
            <p class="text-gray-800">
              Das Open Source Invoice Tool  für Freelancer und kleine
              Unternehmen
            </p>
          </div>

          <div
            class="-my-12 flex max-w-xs flex-col space-y-8 rounded-xl border bg-white p-8 shadow-xl"
          >
            <h4 class="text-xl font-semibold text-blue-500">139.99</h4>
            <p class="text-gray-800">
              Das Open Source Invoice Tool  für Freelancer und kleine
              Unternehmen
            </p>
          </div>

          <div
            class="flex max-w-xs flex-col space-y-8 rounded-xl border bg-white p-8 shadow-xl"
          >
            <h4 class="text-xl font-semibold text-blue-500">39.99</h4>
            <p class="text-gray-800">
              Das Open Source Invoice Tool  für Freelancer und kleine
              Unternehmen
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PreviewCard, { PreviewCardContent } from "~/components/PreviewCard.vue";
import Navigation from "~/components/Navigation.vue";
import PageTeaser from "~/components/PageTeaser.vue";
import HeaderBackground from "~/components/HeaderBackground.vue";

const contentCard1: PreviewCardContent = {
  text: "Hubspot API implementation",
  value1: "29.640€",
  value2: "38.000€",
  progress: "78%",
};

const contentCard2: PreviewCardContent = {
  text: "Design Tokens update",
  value1: "2.601€",
  value2: "5.100€",
  progress: "51%",
};

const contentCard3: PreviewCardContent = {
  text: "Database implementation",
  value1: "5.518€",
  value2: "8.900€",
  progress: "62%",
};
</script>
