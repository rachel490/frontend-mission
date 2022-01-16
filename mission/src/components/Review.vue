<template>
  <div id="reviewSection">
    <h2>리뷰 706개</h2>
    <ul>
      <review-card :review="reviewData[0]"/>
    </ul>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue';
export default {
  components: { ReviewCard },
  props: ['reviewData']
};
</script>

<style scoped>

#reviewSection {
  padding: 15px;
  background-color: white;
}

h2 {
  font-size: 18px;
}
</style>
