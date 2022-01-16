<template>
  <div>
    <img
      v-bind:src="previewImgUrl"
      alt="mainPreviewImage"
    />
  </div>
</template>

<script>
export default {
  props: ['previewImgUrl']
};
</script>

<style scoped>
img {
    display: block;
    width: 375px;
    height: auto;
    object-fit: cover;
    object-position: 50% 70%;
}


</style>
