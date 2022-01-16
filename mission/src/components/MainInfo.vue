<template>
  <div id="infoContainer">
    <section id="marketInfo">
      <img
        id="marketImgInfo"
        src="https://genially.blob.core.windows.net/genially/users/572758d6cbb6cca108efc052/58c8ff7b1aa00d07004421d3/58c8ff7b1aa00d07004421d4/6138e3af-be71-4886-b9b7-9664d0b9ae17.png"
      />
      <div id="marketMetaInfo">
        <p id="marketName">Zara</p>
        <p id="marketTagList">
          <span class="marketTag">#러블리</span>
          <span class="marketTag">#페미닌</span>
          <span id="marketRate">마켓 만족도 95%</span>
        </p>
      </div>
      <div id="marketStarInfo">
        <button id="starBtn">
          <fa :icon="['far', 'star']" style="color: red" />
        </button>
        <label for="star" id="starText">1,114</label>
      </div>
    </section>
    <section id="itemInfo">
      <h2 id="itemName">Soft Dress</h2>
      <div id="row">
        <div id="itemPriceInfo">
          <span id="discountRate">4%</span>
          <span id="discountPrice">29,800원</span>
          <span id="originalPrice">30,800원</span>
        </div>
        <button><fa icon="share-alt" id="shareBtn"/></button>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#infoContainer {
  height: 160px;
  width: 100%;
}

#marketInfo {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

img {
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 15px;
}

#marketMetaInfo {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
}

#marketName {
  font-weight: 600;
}

#marketTagList {
  font-size: 13px;
}

#marketStarInfo {
  display: flex;
  flex-direction: column;
  color: red;
}

.marketTag {
  border-radius: 5px;
  width: 50px;
  height: 20px;
  background-color: rgb(226, 248, 255);
  padding: 2px 3px;
  font-size: 11px;
  margin-right: 4px;
}

#marketRate {
  color: rgba(0, 0, 0, 0.5);
}

#marketRate::before {
  content: '﹒';
}

#itemInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

#itemName {
  width: 100%;
  text-align: start;
  margin-bottom: 5px;
  font-size: 20px;
}

#itemPriceInfo {
  width: 100%;
  display: flex;
  align-items: center;
}

#discountRate {
  font-size: 20px;
  color: red;
  font-weight: 600;
  margin-right: 7px;
}

#discountPrice {
  font-size: 20px;
  font-weight: 600;
  margin-right: 7px;
}

#originalPrice {
  color: rgba(0,0,0,.3);
  text-decoration: line-through;
  font-weight: 600;
}

#row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#shareBtn {
  font-size: 18px;
  font-weight: 300;
  color : rgba(0,0,0,.3);
}
</style>
