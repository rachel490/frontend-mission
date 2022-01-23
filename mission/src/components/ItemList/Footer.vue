<template>
    <footer data-test="footer">
      <button><fa class="icon" icon="home" />홈</button>
      <button><fa class="icon" icon="heart" />찜</button>
      <button><fa class="icon" icon="shopping-cart" />장바구니</button>
      <button><fa class="icon" icon="user" />마이페이지</button>
    </footer>
</template>

<script>
export default {
};
</script>

<style scoped>
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
