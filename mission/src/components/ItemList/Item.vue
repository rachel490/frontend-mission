<template>
  <div class="item-list-item" id="container">
    <img data-test="img" v-bind:src="img" />
    <div>
      <span data-test="discountRate" id="discountRate">{{discountRate}}%</span>
      <span data-test="price" id="price">{{originalPrice}}원</span>
    </div>
    <span data-test="name">{{name}}</span>
    <p data-test="desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  data() {
    return {
      img: 'https://images.unsplash.com/photo-1607382007923-6ba0d39f8617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80',
      name: 'basic cotton tshirt',
      desc: '100% cotton, made in korea.',
      originalPrice: 200000,
      onSale: true,
      discountPrice: 120000,
    };
  },
  computed: {
    discountRate() {
      return Math.round(((this.originalPrice - this.discountPrice) / this.originalPrice) * 100);
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

#price {
  font-weight: 600;
  font-size: 15px;
}

p {
  padding:0 ;
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
