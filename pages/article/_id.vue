<template>
  <div class="article">
     <h1>
       {{$store.state.current_detail.articleTitle}}
     </h1>
  </div>
</template>

<script type="text/ecmascript-6">
import VueMarkdown from 'vue-markdown'
export default {
  async asyncData ({ store, route }) {
    await store.dispatch('get_article_detail',route.params.id);

  },
  data() {
    return {
      title:''
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
