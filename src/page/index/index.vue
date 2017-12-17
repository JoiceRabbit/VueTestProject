<template>
	<div>
	  	<header class="header">
	  		<div class="goback iconfont">&#xe624;</div>
	  		<div class="search mp-single-line">
	  			<!-- <a href="#"> -->
	  				<i class="iconfont">&#xe632;</i>
	  				<span>输入城市/景点/游玩主题</span>
	  			<!-- </a>	  		 -->
	  		</div>
	  		<div class="city">
	  			<!-- <a href="#"> -->
	  				<span>北京</span>
	  				<i class="iconfont">&#xe60d;</i>
	  			<!-- </a>  	 -->
	  		</div>
	  	</header>
	  	<swiper :options="swiperOption">
	    	<swiper-slide>
	    	 <div class="swiper-img-com">
	    			<img class="swiper-img" src="" />
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
	.mp-single-line {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.header {
		display: flex;
		background: #05bad5;
		color: #fff;
	}

	.goback {
		width: .64rem;
		line-height: .86rem;
		text-align: center;shape-margin: 
	}

	.search {
		flex: 1;
		margin: .14rem .18rem;
		background: #fff;
		border-radius: .1rem;
  	color: #e4e7ea;
  	line-height: .58rem;
	}

	.city {
		width: 1.14rem;
		line-height: .86rem;
		text-align: center;
	}

	.swiper-img-com {
		width: 100%;
	}

	.swiper-img {
		width: 100%;
	}
</style>
