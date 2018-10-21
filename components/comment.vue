<template>
  <div id="comment">
      <section v-for="item in comments.data" :key="item.commentId">
          <tree-menu :comment="item"></tree-menu>
      </section>
    <div class="load" v-if="comments.page<comments.pageCount">
            <a href="javascript:void(0)">查看更多评论</a>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import treeMenu from './tree-menu'
export default {
    props:{
        comments:{
          type:Object,
          default:() => {},
      }
    },
  data() {
    return {

    }
  },
  components: {
      treeMenu
  }
}
</script>

<style scoped lang="scss" type="text/scss" >
        .load{
        text-align: center;
        a{
            color: #656c7a;
            font-weight: 500;            
        }
    }
</style>
