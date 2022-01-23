<template>
  <div class="item-list-item" id="container">
    <img data-test="img" v-bind:src="product.img" />
    <div>
      <span data-test="discountRate" id="discountRate" v-if="product.onSale">
        {{this.discountRate}}%
      </span>
      <span data-test="price" id="originalPrice">{{product.originalPrice}}원</span>
    </div>
    <span data-test="name">{{product.name}}</span>
    <p data-test="desc">{{product.desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  data() {
    return {
    };
  },
  props: [
    'product',
  ],
  computed: {
    discountRate() {
      let percent;

      if (this.product.onSale) {
        const { originalPrice, discountPrice } = this.product;
        percent = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
      } else {
        percent = null;
      }
      return percent;
    },
  },
};
</script>

<style scoped>

#container {
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 5px;
  margin-bottom: 10px;
}

img {
  width: 140px;
  height: 140px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 10px;
}

#discountRate {
  color: red;
  font-weight: 600;
  font-size: 15px;
  margin-right: 10px;
}

#originalPrice {
  font-weight: 600;
  font-size: 15px;
}

span {
  font-weight: 600;
  font-size: 14px;
}

p {
  padding:0 ;
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}
</style>
