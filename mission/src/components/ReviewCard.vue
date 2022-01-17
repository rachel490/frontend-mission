<template>
  <li id='reviewCardItem'>
    <div id='reviewHeader'>
      <div>
        <h3>{{ review.title }}</h3>
        <span class='subtext'>{{ review.name }}</span>
        <span class='subtext'> | </span>
        <span class='subtext'>{{ review.time }}</span>
      </div>
      <div id='likesBtn'>
        <button>
          <fa :icon="['far', 'thumbs-up']" id='likes' />
        </button>
        <label for='likes'>{{ review.likes }}</label>
      </div>
    </div>
    <div id='reviewImgList'>
      <img
        class='reviewImg'
        v-for='(img, idx) in review.images'
        v-bind:src='img'
        v-bind:key='idx'
      />
    </div>
    <p id='reviewText'>{{ review.text }}</p>
  </li>
</template>

<script>
export default {
  props: ['review'],
};
</script>

<style scoped>
#reviewCardItem {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

#reviewHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#reviewHeader h3 {
  font-size: 18px;
}

.subtext {
  color: rgba(0, 0, 0, 0.4);
  font-weight: 500;
  font-size: 14px;
}

#likesBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
}

#likesBtn label {
  font-size: 14px;
}

#likes {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
}

#reviewCardItem {
  background-color: white;
}

#reviewImgList {
  display: flex;
  margin: 15px 0;
}

.reviewImg {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 5px;
}

#reviewText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  font-size: 14px;
}
</style>
