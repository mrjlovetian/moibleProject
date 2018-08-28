<template>
  <div id="detail">
    <h3>我是详情页面</h3>
    <numbox :value="'lallallalllalal'" @numberwithme="getvulefornumber"></numbox>
  </div>
</template>

<script>
import numbox from './numbox'

export default {
  components:{
    numbox
  },
  methods:{
    getvulefornumber(value){
      console.log('value for number', value)
    }
  }

}
</script>


<style lang="sass" scoped>

</style>

