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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#infoContainer {
  height: 140px;
  width: 100%;
  background-color: rgb(164, 191, 243);
}

#marketInfo {
  display: flex;
  align-items: center;
  background-color: white;
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
</style>
