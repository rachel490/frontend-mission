<template>
  <div id="item-list-page">
    <h1 data-test="title">{{title}}</h1>
    <ul data-test="product-list">

    </ul>
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
