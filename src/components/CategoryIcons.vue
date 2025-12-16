<template lang="">
  <div class="flex items-center gap-6 py-6 ">
    <div
      class="flex flex-col items-center justify-center w-60 h-40 border border-black/30 hover:bg-[#DB4444] hover:text-white rounded-md p-6 cursor-pointer"
      v-for="category in categories"
      :key="category.name"
    >
      <component :is="category.icon" class="size-14" />
      <p class="ml-2 text-base font-medium">{{ category.name }}</p>
    </div>
  </div>
</template>
<script>
import Camera from '@/icons/camera.vue'
import Computer from '@/icons/computer.vue'
import Gaming from '@/icons/gaming.vue'
import Headphones from '@/icons/headphones.vue'
import Phone from '@/icons/phone.vue'
import Watch from '@/icons/watch.vue'

export default {
  components: {
    Camera,
    Computer,
    Gaming,
    Headphones,
    Phone,
    Watch,
  },
  data() {
    return {
      categories: [
        { name: 'Phones', icon: 'Phone' },
        { name: 'Computers', icon: 'Computer' },
        { name: 'SmartWatch', icon: 'Watch' },
        { name: 'Camera', icon: 'Camera' },
        { name: 'Headphones', icon: 'Headphones' },
        { name: 'Gaming', icon: 'Gaming' },
      ],
    }
  },
}
</script>
<style lang=""></style>
