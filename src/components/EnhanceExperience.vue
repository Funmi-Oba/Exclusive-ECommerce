<template lang="">
  <div class="flex justify-center mt-10">
    <div class="flex justify-between text-white bg-black rounded-md shadow-md">
      <div class="flex flex-col justify-between max-w-sm p-4 space-y-8">
        <p class="text-sm text-[#00FF66]">Categories</p>

        <p class="text-4xl font-bold tracking-widest">Enhance Your Music Experience</p>

        <CountdownTimer
          :days="5"
          :hours="12"
          :minutes="30"
          :seconds="10"
          boxClass="bg-white text-black rounded-full w-[70px] h-[70px] flex items-center justify-center p-4 shadow-xl"
        >
          <template #unit="{ label, value }">
            <div class="flex flex-col items-center">
              <p class="text-xs">{{ label }}</p>
              <h2 class="text-3xl font-bold ">{{ value }}</h2>
            </div>
          </template>
        </CountdownTimer>
        <button class="bg-[#00FF66] text-white px-4 py-2 w-32 rounded-md">Buy Now!</button>
      </div>
      <div class="p-10">
        <img src="/images/JBL-Speaker.png" alt="JBL Speakers" class="object-cover backdrop-blur-3xl" />
      </div>
    </div>
  </div>
</template>
<script>
import CountdownTimer from './CountdownTimer.vue'
import SalesSections from './SalesSections.vue'

export default {
  components: {
    SalesSections,
    CountdownTimer,
  },
  methods: {
    onCountdownEnd() {
      console.log('Flash sale ended!')
    },
  },
}
</script>
<style lang=""></style>
