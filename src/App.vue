<script setup>
import Footer from './components/Footer.vue';
import UpperHeader from './components/UpperHeader.vue';

components:{UpperHeader, Footer}

</script>

<template>
      <UpperHeader/>
    <div class="px-30">
         <router-view/>
    </div>
  <Footer/>
</template>

<style scoped></style>
