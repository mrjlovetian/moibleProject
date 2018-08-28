<template>
<div>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
<h3>{{value}}</h3>
</div>

</template>

<script>
import mui from '../../../lib/mui/js/mui.js'

export default {
   mounted(){
    mui(".mui-numbox").numbox()
  },
  props:{
    value:String
  },
  data(){
    return {
      name:''
    }
  },
  methods:{
    changed(){
      console.log("zhelailajici")
      this.$emit('numberwithme', parseInt(this.$refs.numbox.value))
    }
  },

}
</script>

<style lang="sass" scoped>

</style>
