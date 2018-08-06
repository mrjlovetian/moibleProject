<template>
  <div>
    <h3>我是详情页面{{$route.params.title}} hhhh {{title}}</h3>
    <p>
      <span>点击数量</span>
      <span>发布时间</span>
    </p>

    <br>

<div>内容</div>

<h3>评论</h3>
<textarea name="" id="" cols="30" rows="10" placeholder="请添加你的评论"></textarea>

<mt-button type="danger" size="large">提交</mt-button>

  </div>
</template>

<script>
export default {
  data(){
    return{
      title:this.$route.params.title
    }
  }
}
</script>

<style>
  .lineView{
    height: 20px;
    background-color: royalblue;
    width: 100%;
    transform: scaleY(0.5)
  }
</style>
