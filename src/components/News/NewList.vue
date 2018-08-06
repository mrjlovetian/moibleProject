<template>
<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
			<div class="mui-scroll">
				<!--数据列表-->
				<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
					<router-link :to="'/home/newdetail/'+item.title">
						<img class="mui-media-object mui-pull-left" :src="item.logourl">
						<div class="mui-media-body">
              <h3>{{item.title}}</h3>
							<p class='mui-ellipsis'>
                <span>{{item.conten}}</span>
                <span>{{item.time}}</span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>
			</div>
		</div>


</template>

<script>
import mui from '../../../lib/mui/js/mui.js'
export default {
  created(){
    this.getnewlist()
  },
  data(){
    return {
      newlist:[]
    }
  },
  methods:{
    getnewlist(){
      this.$http.get('http://localhost/newList.json').then(res=>{
        console.log('aaaaaaaaa', res.body)
        this.newlist = res.body
      })
    }
  },
  mounted(){
    // document.addEventListener('touchmove', this._preventDefault, { passive: false });

    mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						style:'circle',
						callback: pulldownRefresh
					},
					up: {
						auto:true,
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
      });

      var count = 0;
			function pullupRefresh() {
				setTimeout(function() {
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
					var table = document.body.querySelector('.mui-table-view');
					var cells = document.body.querySelectorAll('.mui-table-view-cell');
					var newCount = cells.length>0?5:20;//首次加载20条，满屏
					for (var i = cells.length, len = i + newCount; i < len; i++) {
						var li = document.createElement('li');
						li.className = 'mui-table-view-cell';
						li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
						table.appendChild(li);
					}
				}, 1500);
			}

			function addData() {
				var table = document.body.querySelector('.mui-table-view');
				var cells = document.body.querySelectorAll('.mui-table-view-cell');
				for(var i = cells.length, len = i + 5; i < len; i++) {
					var li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
					//下拉刷新，新纪录插到最前面；
					table.insertBefore(li, table.firstChild);
				}
			}
      /**
			 * 下拉刷新具体业务实现
			 */
			function pulldownRefresh() {
				setTimeout(function() {
					addData();
					mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
					mui.toast("为你推荐了5篇文章");
				}, 1500);
			}
  }
}



</script>

<style lang="scss" scoped>

.mui-table-view h3{
  font-size: 13px
}
.mui-ellipsis{
  display: flex;
  justify-content: space-between;
  span{
    font-size: 12px;
    color: blue
  }
}
* {
  touch-action: none;
}

</style>
