<template lang="">

  <MainHeader/>
  <router-view/>

</template>
<script>
import Footer from '@/components/Footer.vue';
import MainHeader from '@/components/MainHeader.vue';
import UpperHeader from '@/components/UpperHeader.vue';

export default {
    components:{UpperHeader, MainHeader, Footer}
}
</script>
<style lang=""></style>
