<template>
<div>
  <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

			</div>

      <ul class="photolist">
        <router-link v-for="item in imagelist" :key="item.id" tag="li" to="/home/photolist/detail">
          <img v-lazy="item.imageurl">
          <div class="info">
              <h3 class="info-title">{{item.title}}</h3>
              <div class="info-body">{{item.conten}}</div>
          </div>

        </router-link>
      </ul>
      </div>
</template>

<script>
import mui from '../../../lib/mui/js/mui.min.js'
export default {
  data(){
    return {
imagelist:[]
    }
  },
  methods:{
    getimagelist(){
      this.$http.get("http://localhost/imagelist.json").then(res=>{
        console.log('asasasasasdsdasd', res.body)
        this.imagelist = res.body;
      })
    }
  },
  mounted(){
    this.getimagelist()
    mui('.mui-scroll-wrapper').scroll({
      deceleration:0.0005
    })
  }
}

</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photolist{
  list-style: none;
  padding: 10px;
  img{
    width: 100%;
  }
  li{
    img[lazy=loading]{
      width: 40px;
      height: 300px;
      margin: auto;
    }
    position: relative;
    margin-bottom: 5px;
    vertical-align: middle
  }
  .info{
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);

    .info-title{
      font-size: 14px;
    };

    .info-body{
      font-size: 13px;
      margin-bottom: 3px;
    }
  }
}

</style>

