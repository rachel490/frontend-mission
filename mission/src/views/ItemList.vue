<template>
  <div id="item-list-page">
    <h1 data-test="title">{{title}}</h1>
    <ul data-test="product-list">
      <item />
      <item />
      <item />
      <item />
      <item />
      <item />
      <item />
      <item />
      <item />
      <item />
      <item />
    </ul>
    <footer data-test="footer">
      <button><fa class="icon" icon="home" />홈</button>
      <button><fa class="icon" icon="heart" />찜</button>
      <button><fa class="icon" icon="shopping-cart" />장바구니</button>
      <button><fa class="icon" icon="user" />마이페이지</button>
    </footer>
  </div>
</template>

<script>
import Item from '../components/ItemList/Item.vue';

export default {
  components: { Item },
  name: 'ItemListPage',
  data() {
    return {
      title: 'My Shopping Mall',
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

h1 {
  margin: 0;
  padding: 10px 0;
  text-align: center;
}

footer {
  width: inherit;
  background-color: cadetblue;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}

button {
  border: none;
  background-color: transparent;
  text-align: center;
  width: 25%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size:14px;
}

.icon {
  margin-bottom: 5px;
  font-size: 16px;
}

button:hover {
  transform: scale(1.1);
  transition: transform .3s ease-in-out;
}
</style>
