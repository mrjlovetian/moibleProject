<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in listdata" :key="item.logourl">
      <img :src="item.logourl">
    </mt-swipe-item>
  </mt-swipe>

  <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul>
		</div>
</div>
</template>

<script>

export default {
  created(){
    this.getList()
  },
  data(){
    return {
      listdata:[]
    }
  },
  methods:{
    getList(){
      this.$http.get("http://127.0.0.1/lunbotu.json").then(result=>{
        console.log('aaaaaaa', result.data)
        this.listdata = result.data
      }).then(error=>{
        console.log('bbbbbb', error)
      })
    }
  }
}
</script>


<style  lang="scss" scoped>
  .mint-swipe img{
    width: 100%;
    height: 100%;
  }
  .mui-grid-view.mui-grid-9{
    background-color: #ffffff
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-width: 0;
  }
  .mint-swipe {
    height: 200px;

    .mint-swipe-item{
      &:nth-child(1){
        background-color: red;
      }
      &:nth-child(2){
        background-color: orange;
      }
      &:nth-child(3){
        background-color: blue;
      }
    }
  }
</style>
