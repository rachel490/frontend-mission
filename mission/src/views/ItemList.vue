<template>
  <div id="item-list-page">
    <Header />
    <ul data-test="product-list">
      <item v-for="(item,idx) in productData" v-bind:key="idx" v-bind:product="item" />
      <item v-for="(item,idx) in productData" v-bind:key="idx" v-bind:product="item" />
    </ul>
    <Footer />
  </div>
</template>

<script>
import productData from '../assets/mock';
import Header from '../components/ItemList/Header.vue';
import Item from '../components/ItemList/Item.vue';
import Footer from '../components/ItemList/Footer.vue';

export default {
  components: { Item, Header, Footer },
  name: 'ItemListPage',
  data() {
    return {
      productData,
    };
  },
};
</script>

<style scoped>
#item-list-page {
  width: 375px;
  height: auto;
  padding-bottom: 60px;
  background-color: bisque;
  position: relative;
}

ul {
  margin: 0;
  padding : 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
