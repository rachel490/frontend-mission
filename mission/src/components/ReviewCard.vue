<template>
  <li id="reviewCardItem">
    <div id="reviewHeader">
      <div>
        <h3>만족해요</h3>
        <span class="subtext">최**</span>
        <span class="subtext"> | </span>
        <span class="subtext">2022.01.09</span>
      </div>
      <div id="likesBtn">
        <button>
          <fa :icon="['far', 'thumbs-up']" id="likes" />
        </button>
        <label for="likes">537</label>
      </div>
    </div>
    <div id="reviewImgList">
    	<img class="reviewImg" src="http://ririgirl.co.kr/web/upload/NNEditor/20210602/7_shop1_121322.jpg" />
    	<img class="reviewImg" src="http://ririgirl.co.kr/web/upload/NNEditor/20210602/8_shop1_121322.jpg" />
    	<img class="reviewImg" src="http://ririgirl.co.kr/web/upload/NNEditor/20210602/9_shop1_121322.jpg" />
    </div>
	<!-- <div>
		<p>옵션 <span>롱ver / M</span></p>
		<p>체형 <span>170cm / 52kg</span></p>
		<p>사이즈 <span>잘 맞아요</span></p>
		<p>색상 <span>화면과 같아요</span></p>
	</div> -->
	<p id="reviewText" >믿고 구매했어요! 너무 좋아요! 아무곳에나 쉽게 매칭할 수 있는 옷인것 같아요. 키가 작으시다면 조금 클수 있을 것 같긴 하지만 160이상이면 괜찮을 것 같습니다.</p>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>

#reviewCardItem {
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.1);
}

#reviewHeader {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

#reviewHeader h3 {
	font-size: 18px;
}

.subtext {
	color: rgba(0,0,0,.4);
	font-weight: 500;
	font-size: 14px;
}

#likesBtn {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgba(0,0,0,.6);
}

#likesBtn label {
	font-size: 14px;

}

#likes {
	font-size: 16px; 
	color: rgba(0,0,0,.4);
}


#reviewCardItem {
	background-color: white;
}

#reviewImgList {
	display: flex;
	margin: 15px 0;
}

.reviewImg {
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 6px;
	margin-right: 5px;
}

#reviewText {
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.2em;
	font-size:14px;
}
</style>
