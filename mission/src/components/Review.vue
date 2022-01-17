<template>
  <div id='reviewSection'>
    <h2>리뷰 706개</h2>
    <ul>
      <review-card v-for='(review, idx) in reviewData' v-bind:key='idx' :review='review' />
    </ul>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue';

export default {
  components: { ReviewCard },
  props: ['reviewData'],
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
