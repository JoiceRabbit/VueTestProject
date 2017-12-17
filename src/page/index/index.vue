<template>
	<div>
	  	<header class="header">
	  		<div class="goback iconfont">&#xe624;</div>
	  		<div class="search mp-single-line">
	  				<i class="iconfont">&#xe632;</i>
	  				<span>输入城市/景点/游玩主题</span>
	  		</div>
	  		<div class="city">
	  				<span>北京</span>
	  				<i class="iconfont">&#xe60d;</i>
	  		</div>
	  	</header>
	  	<swiper :options="swiperOption">
	    	<swiper-slide v-for="item in swiperInfo" :key="item.id">
	    	 <div class="swiper-img-con">
	    			<img class="swiper-img" :src="item.imgUrl" />
	    		</div>
	    	</swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	  	
	  	<swiper>
      <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
            	<div class="icon-img-container">
             	 <img  class="icon-img" :src="item.imgUrl"/>
             	</div>
             	<div>游乐场</div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
	</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      swiperInfo: [],
      iconInfo: [],
      swiperOption: {
        autoplay: 1000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },

  computed: {
    pages () {
      const pages = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
        	pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  },

  methods: {
  	getIndexData () {
  		this.$http.get('/static/index.json').then(this.handleGetDataSucc.bind(this))
  	},

  	handleGetDataSucc (res) {
  		const body = res.body
  		if (body && body.data && body.data.swiper) {
  			this.swiperInfo = body.data.swiper
  			this.iconInfo = body.data.icons
  		}
  	}
  },

  created () {
  	this.getIndexData()
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
		text-align: center;
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

	.swiper-img-con {
		overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
	}

	.swiper-img {
		width: 100%;
	}

	.icon-item {
    box-sizing: border-box;
    float: left;
    width: 25%;
    padding: .4rem;
  }
  .icon-img-con {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .icon-img-container {
  	width: .66rem;
  	height: .66rem;
  }
  .icon-img {
    width: 100%;
  }
</style>
