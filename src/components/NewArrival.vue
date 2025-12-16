<template lang="">
  <SalesSections>
    <template #moment>Featured</template>
    <template #title>New Arrival</template>
  </SalesSections>
  <div class="flex gap-6 mx-auto ">
    <div class="relative w-1/2 pt-10 bg-black rounded-lg">
      <img src="/images/playstation.png" alt="" class="object-cover w-full h-full" />
      <div class="absolute space-y-3 text-white max-w-3xs bottom-6 left-8">
        <h2 class="text-2xl font-bold tracking-wider">PlayStation 5</h2>
        <p class="text-sm font-light tracking-wider">
          Black and White version of the PS5 coming out on sale.
        </p>
        <button class="font-semibold underline cursor-pointer">Shop Now</button>
      </div>
    </div>
    <div class="flex flex-col w-1/2 gap-6">
      <div class="relative w-full bg-[#0D0D0D] rounded-lg h-1/2">
        <div class="absolute inset-0 flex items-end justify-end">
          <img src="/images/woman.png" alt="" class="object-contain w-auto h-full rounded-lg" />
        </div>

        <div class="absolute space-y-3 text-white max-w-3xs bottom-6 left-8">
          <h2 class="text-2xl font-bold">Women's Collections</h2>
          <p class="text-sm font-light">Featured woman collections that give you another vibe.</p>
          <button class="font-semibold underline cursor-pointer">Shop Now</button>
        </div>
      </div>
      <div class="flex gap-6 h-1/2">
        <div class="relative flex-1 pt-10 overflow-hidden bg-black rounded-lg">
          <img src="/images/3in1 speaker.png" alt="" class="object-contain w-full h-full" />
          <div class="absolute space-y-3 text-white max-w-3xs bottom-6 left-8">
            <h2 class="text-2xl font-bold tracking-wider">Speakers</h2>
            <p class="text-sm font-light tracking-wider">
              Amazon wireless speakers
            </p>
            <button class="font-semibold underline cursor-pointer ">Shop Now</button>
          </div>
        </div>
       <div class="relative flex-1 pt-10 bg-black rounded-lg">
          <img src="/images/perfume.png" alt="" class="object-contain w-full h-full" />
          <div class="absolute space-y-3 text-white max-w-3xs bottom-6 left-8">
            <h2 class="text-2xl font-bold tracking-wider">Perfume</h2>
            <p class="text-sm font-light tracking-wider">
             GUCCI INTENSE OUD EDP
            </p>
            <button class="font-semibold underline cursor-pointer">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SalesSections from './SalesSections.vue'

export default {
  components: {
    SalesSections,
  },
}
</script>
<style lang=""></style>
