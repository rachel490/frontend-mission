<template>
  <div id="item-list-page">
    <h1 data-test="title">{{title}}</h1>
    <ul data-test="product-list">

    </ul>
    <footer data-test="footer">
      <button>홈</button>
      <button>찜</button>
      <button>장바구니</button>
      <button>마이페이지</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ItemListPage',
  data() {
    return {
      title: 'My Shopping Mall',
    }
  }
};
</script>

<style>
</style>
