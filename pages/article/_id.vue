<template>
  <div class="article">
     <h1>
       {{$store.state.current_detail.articleTitle}}
    </h1>
    <section class="container" v-html="content" v-highlight>

    </section>
    <div class="meta">
      <Meta :item="$store.getters.articleListMap[$route.params.id]"/>
    </div>
    <div class="comment">
      <Comment :comments="$store.state.comment"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入marked，用来将Markdown转换成HTML
  import marked from 'marked';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/atom-one-dark.css';
  import Meta from '../../components/meta';
  import Comment from '../../components/comment';
  // 配置marked
  // marked.setOptions({
  //   // 配置高亮
  //   highlight: function (code, lang, callback) {
  //     return hljs.highlightAuto(code).value;   // 这里highlightjs会自动给代码增加类
  //   }
  // });

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('get_article_detail',route.params.id);
    await store.dispatch('get_comment',route.params.id);
  },
  data() {
    return {
      content: marked(this.$store.state.current_detail.content)
    }
  },
  head(){
    return {
      title:this.$store.state.current_detail.articleTitle
    }
  },
    directives:{
    highlight:{
      bind:(el) => {
        let blocks = el.querySelectorAll('pre code')
        blocks.forEach((block) => {
          hljs.highlightBlock(block)
        })
      }
    }
  },
  components: {
   Meta,
   Comment
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  h1{
    color: #5f5f5f;
    font-size: 22px;
    font-weight: 600;
    text-transform:uppercase;
    margin-left: 30px;
  }
  .container{
    width: 93%;
    margin: 0 30px 30px 30px;
   // overflow: hidden;
   color:rgba(0, 0, 0, 0.5);
   p{
   img{
     width: 100%;
   }
   }
  }
  .meta{
    margin: 0 30px;
  }
</style>
