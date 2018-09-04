<template>
  <div class="about">
about
  </div>
</template>

<script type="text/ecmascript-6">
export default {
async asyncData ({ app,store }) { // 这里data等同于上面的res.data 
// let { data } = await app.$axios.get('/api/info');
// console.log('data',data)
await store.dispatch('ARTICLES')
 },

  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss" ype="text/scss" >
</style>
