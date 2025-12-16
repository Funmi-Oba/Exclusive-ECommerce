<template lang="">
    <div class="flex flex-col py-6 pr-6 mt-20">
    <div class="flex items-center gap-4 mb-4">
      <span class="bg-[#DB4444] w-4 h-8 inline-block rounded-md"></span>
      <h2 class="text-lg font-medium text-[#DB4444]"><slot name="moment"></slot></h2>
    </div>
    
    <!-- Header with countdown and navigation -->
    <div class="flex items-end justify-between">
      <div class="flex items-end gap-16">
        <h1 class="text-3xl font-semibold tracking-widest"><slot name="title"></slot></h1>
        
        <!-- Countdown Timer Component -->
        <div class="mb-1">
            <slot name="countdown"></slot>
          
        </div>
      </div>

      <!-- Carousel Navigation - Pass the carousel element -->
      <div class="mb-1">
        <slot name="navigation"></slot>
        
      </div>
    </div>

    <!-- Products Carousel -->
   

   
    
  </div>
</template>
<script>
export default {
    props:{carouselElement: {
        type: Object,
        required: true
      }}
}
</script>
