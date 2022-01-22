<template>
  <div class="item-list-item">
    <h1>product list</h1>
    <img data-test="img" v-bind:src="img" />
    <span data-test="originalPrice">{{originalPrice}}원</span>
    <h2 data-test="name">{{name}}</h2>
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
    };
  },
};
</script>

<style>
</style>
