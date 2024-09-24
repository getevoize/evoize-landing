<template>
  <div class="relative from-[#DBF1FE] to-[#FFFFFF] bg-gradient-to-t">
    <div class="absolute w-full h-full bg-[#EBF4FD] z-0 sm:inset-8 sm:w-[calc(100%-4rem)] sm:h-[calc(100vh-4rem)] sm:rounded-2xl"></div>

    <nav
        class="z-50 shadow-xl sticky top-7 px-5 py-4 border-2 border-white max-w-xl mx-2 sm:mx-auto rounded-full from-[#E5F5FF] to-[#FFFFFF] bg-gradient-to-r ">
      <p class="font-titan font-semibold lg:font-bold text-lg text-black tracking-wider leading-none">evoize</p>
    </nav>

    <header class="flex flex-col min-h-screen mx-auto px-0 sm:px-8 container">
      <div class="flex-1 rounded-lg px-2 sm:px-0 z-10">
        <div class="mt-20 sm:mt-40 max-w-3xl mx-auto">
          <h1 class="font-titan text-center text-blue-500 font-normal text-5xl xl:text-6xl leading-[3rem] xl:leading-[4.5rem]">
            Offen, sicher, deins: <br> Open-Source Invocing für
            deine finanzielle
            Zukunft.</h1>
          <div class="m-10">
            <form>
              <div
                  class="mx-auto flex max-w-sm items-center border-2 border-white rounded-full bg-[#dfecfa] justify-between px-4 py-2 gap-2">
                <input type="email"
                       class="flex-1 px-3 py-2 bg-[#dfecfa] focus:outline-none focus:ring focus:ring-blue-500 focus:rounded-full text-gray-700"
                       placeholder="Deine E-Mail">
                <button type="submit"
                        class="bg-[#2A2A2A] border-2 border-black shadow text-white rounded-full px-2 py-1 font-semibold">
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-20 xl:flex ">
          <PreviewCard class="xl:translate-x-1/3 rotate-12" :content=contentCard1 main-color="#ffbb37"
                       secondary-color="#fdf4e5"></PreviewCard>
          <PreviewCard class="xl:translate-y-1/3 -rotate-12" :content=contentCard2 main-color="#3b82f6"
                       secondary-color="#bfdbfe"></PreviewCard>
          <PreviewCard class="xl:-translate-x-1/3 rotate-12" :content=contentCard3 main-color="#d946ef"
                       secondary-color="#f5d0fe"></PreviewCard>
        </div>
      </div>
    </header>

    <div class="min-h-[2000px] ">
      <section class="max-w-7xl mx-auto">
        <h2 class="mt-20 text-4xl font-bold text-blue-600 max-w-md">
          Das Open Source Invoice Tool für Freelancer und kleine Unternehmen
        </h2>
      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
import PreviewCard, {PreviewCardContent} from "~/components/PreviewCard.vue";

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
