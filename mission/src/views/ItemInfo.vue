<template>
  <div id="item-info-page">
    <preview-image></preview-image>
    <main-info></main-info>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import MainInfo from '../components/MainInfo.vue';
import PreviewImage from '../components/PreviewImage.vue';

export default {
  components: { PreviewImage, MainInfo, Footer},
  name: 'ItemInfoPage',
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
#item-info-page {
  width: 100%; 
  height: 1200px;
  z-index:1;
  background-color: white;
}

</style>
