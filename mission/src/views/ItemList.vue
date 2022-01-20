<template>
  <div id="item-list-page">
    <h1 data-test="title">{{title}}</h1>
    <ul data-test="product-list">

    </ul>
    <footer data-test="footer">
      <button><fa icon="home" />홈</button>
      <button><fa icon="heart" />찜</button>
      <button><fa icon="shopping-cart" />장바구니</button>
      <button><fa icon="user" />마이페이지</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ItemListPage',
  data() {
    return {
      title: 'My Shopping Mall',
    };
  },
};
</script>

<style>

</style>
