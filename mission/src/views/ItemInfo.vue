<template>
  <div id="item-info-page" >
    <preview-image></preview-image>
    <main-info></main-info>
    <div id="detailsSection"><detail-info></detail-info></div>
    <Review></Review>
    <Footer></Footer>
  </div>
</template>

<script>
import DetailInfo from '../components/DetailInfo.vue';
import Footer from '../components/Footer.vue';
import MainInfo from '../components/MainInfo.vue';
import PreviewImage from '../components/PreviewImage.vue';
import Review from '../components/Review.vue'

import data from '../data/mock.js';

export default {
  components: { PreviewImage, MainInfo, Footer, Review, DetailInfo },
  name: 'ItemInfoPage',
  data() {
    return {
      product: data,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
#item-info-page {
  width: 100%; 
  height: auto;
  z-index:1;
  background-color: white;
  padding-bottom: 100px;
}

#detailsSection {
  background-color: white;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-top: 1px solid rgba(0,0,0,.1);

}

</style>
