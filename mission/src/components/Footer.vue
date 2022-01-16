<template>
  <footer>
	  <div id="likeBtnBox"> 
		  <button><fa :icon="['far', 'heart']" id="likeBtn"/></button>
		  <span>{{likesData}}</span>
	  </div>
	  <button id="buyBtn">구매하기</button>
  </footer>
</template>

<script>
export default {
	props: ['likesData']

}
</script>

<style scoped>
footer {
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 375px;
	padding: 10px;
	position: fixed;
	z-index: 2 ;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	background-color: white;
}

#likeBtnBox {
	color:red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	margin-left: 10px;
}

#likeBtn {
	font-size : 26px;
	color: red;
	margin-bottom: 3px;
}

#buyBtn {
	height: 60px;
	width: 280px;
	background-color: black;
	border-radius: 10px;
	color: white;
	font-size: 20px;
	font-weight: 700;
}
</style>