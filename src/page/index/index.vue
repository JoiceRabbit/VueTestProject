<template>
	<div>
	  	<header class="header">
	  		<div class="goback">返回</div>
	  		<div class="search"></div>
	  		<div class="city">城市</div>
	  	</header>
	  	<swiper :options="swiperOption">
	    	<swiper-slide>
	    	 <div class="swiper-img-com">
	    			<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/cd/5ff8869f365e7e02.jpg_640x200_097b1798.jpg" />
	    		</div>
	    	</swiper-slide>
	    	<swiper-slide>
	    		<div class="swiper-img-com">
	    			<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/d1/73dc10b5cd320202.jpg_640x200_02a40951.jpg" />
	    		</div>
	    	</swiper-slide>
	    	<swiper-slide>
	    		<div class="swiper-img-com">
	    			<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/5a/cb4a0ccffeb99b02.jpg_640x200_1b0b75b1.jpg" />
	    		</div>
	    	</swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	 	</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped>
	.header {
		display: flex;
		background: #05bad5;
		color: #fff;
		text-align: center
	}

	.goback {
		width: .64rem;
		line-height: .86rem;
	}

	.search {
		flex: 1;
		margin: .14rem .18rem;
		background: #fff;
		border-radius: .1rem;
	}

	.city {
		width: 1.14rem;
		line-height: .86rem;
	}

	.swiper-img-com {
		width: 100%;
	}

	.swiper-img {
		width: 100%;
	}
</style>
