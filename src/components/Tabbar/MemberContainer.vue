<template>
  <div>
    <h1>会员</h1>
    <button type="button" @click="add"></button>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      this.$store.commit('add')
    }
  }
}
</script>

