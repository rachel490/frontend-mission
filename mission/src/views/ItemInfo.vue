<template>
  <div id="item-info-page">
    <preview-image></preview-image>
    <main-info></main-info>
  </div>
</template>

<script>
import MainInfo from '../components/MainInfo.vue';
import PreviewImage from '../components/PreviewImage.vue';

export default {
  components: { PreviewImage, MainInfo },
  name: 'ItemInfoPage',
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
