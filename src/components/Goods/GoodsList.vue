<template>
  <div class="mainlist">
    <div class="goods">
      <img src="https://img10.360buyimg.com/n7/jfs/t18157/222/1822300674/231514/6c179af8/5ad87390N086a3c91.jpg">
      <h3>荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻影蓝全网通 移动联通电信</h3>
      <div class="bottominfo">
        <p class="price">
          <span class="newprice">2399</span>
          <span class="oldprice">2499</span>
        </p>
        <p class="state">
          <span class="hot">热卖中</span>
          <span class="count">剩余70</span>
        </p>
      </div>
    </div>

    <div class="goods">
      <img src="https://img10.360buyimg.com/n7/jfs/t18157/222/1822300674/231514/6c179af8/5ad87390N086a3c91.jpg">
      <h3>荣耀10 GT游戏加速</h3>
      <div class="bottominfo">
        <p class="price" >
          <span class="newprice">¥2399</span>
          <span class="oldprice">¥2499</span>
        </p>
        <p class="state">
          <span class="hot">热卖中</span>
          <span class="count">剩余70</span>
        </p>
      </div>
    </div>

    <div class="goods">
      <img src="https://img10.360buyimg.com/n7/jfs/t18157/222/1822300674/231514/6c179af8/5ad87390N086a3c91.jpg">
      <h3>荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻影蓝全网通 移动联通电信</h3>
      <div class="bottominfo">
        <p class="price">
          <span class="newprice">2399</span>
          <span class="oldprice">2499</span>
        </p>
        <p class="state">
          <span class="hot">热卖中</span>
          <span class="count">剩余70</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.mainlist{
  display: flex;
  flex-wrap: wrap;
  margin: 7px;
  justify-content: space-between;
  .goods{
    width: 49%;
    border: 1px solid #eeeeee;
    padding: 2px;
    margin: 4px 0;
    box-shadow: 0 0 8px#ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
      width: 100%;
    }

    h3{
      font-size: 14px;
    }

    .price {
      font-size: 13px;
    }

    .newprice{
      font-size: 17px;
      color: red;
    }

    .oldprice{
      text-decoration: line-through;
    }

    .state{
      display: flex;
      justify-content: space-between;
      margin: 0;
    }

    p{
      padding: 5px;
    }

    .bottominfo{
      background-color: #eeeeee;
    }
  }
}

</style>
