<template>
<div class="post-footer">
  <div class="meta">
              
             <div class="info">
                      <i class="fa fa-sun-o" v-if="item.createTime"></i>
                      <span class="date">{{item.createTime || item.updateTime}}</span>
                      <i class="fa fa-comment-o"></i>
                      <a href="javascript:void(0)" @click="toComment(item.articleId)">Comments</a>
                      <i class="fa fa-tag" v-if="item.tagNames.length > 0"></i>
                      <a class="tag" v-for="(a,key) in item.tagNames" :key="key">{{a}}</a>
                  </div>
           
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
        item:{
          type:Object,
          default:() => {}
      }
  },
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
      toComment(id){
           this.$router.push({path:`/article/${id}#comment`})
      }
  }
}
</script>

<style scoped lang="scss" type="text/scss" >
        .post-footer{
            padding: 0 0 30px 0;
            border-bottom:1px solid #f2f2f2;
            .meta{
                max-width: 100%;
                height: 25px;
                color: #bbbbbb;
                .info{
                    float: left;
                    font-size: 12px;
                    i{
                        margin-right: 6px;
                    }
                    .date{
                        margin-right: 10px;
                    }
                    a{
                        text-decoration: none;
                        color: #bbbbbb;
                        padding-right: 10px;
                    }

                }
            }
        }
</style>
