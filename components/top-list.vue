<template>
  <ul class="top-list">
      <li v-for="(item,index) in articles" :key="index">
          <div class="post-title">
              <h3>
                  <a href="javascript:void(0);" @click="godetail(item.articleId)">{{item.articleTitle}}</a>
              </h3>
          </div>
          <div class="post-content">
              <div class="p_part">
                  <p>
                      {{item.shortDesc}}
                  </p>
              </div>
          </div>
          <div class="post-footer">
              <div class="meta">
                  <div class="info">
                      <i class="fa fa-sun-o" v-if="item.createTime"></i>
                      <span class="date">{{item.createTime || item.updateTime}}</span>
                      <i class="fa fa-comment-o"></i>
                      <a :href="`/article/${item.articleId}#comment`">Comments</a>
                      <i class="fa fa-tag" v-if="item.tagNames.length > 0"></i>
                      <a class="tag" v-for="(a,key) in item.tagNames" :key="key">{{a}}</a>
                  </div>
              </div>
          </div>
      </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
      articles:{
          type:Array,
          default:() => []
      }
  },
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
      godetail(id){
          this.$router.push({path:`/article/${id}`})
      }
  }
}
</script>

<style scoped lang="scss" ype="text/scss" >
ul{
    list-style: none;
    padding-left: 0;
    li{
        background-color:#FFF;
        margin:30px;
        animation-name:fadeInDown;
        animation-fill-mode:both;
        animation-duration:1s; 
        .post-title{
            h3{
                text-transform:uppercase;
                letter-spacing:1px;
                line-height: 1;
                font-weight: 600;
                color: #464646;
                font-size:22px;
                margin: 0;
                a{
                    text-decoration: none;
                    letter-spacing: 1px;
                    color: #5f5f5f;
                }
            }
        }
        .post-content{
            .p_part{
                p{
                    color: rgba(0, 0, 0, 0.5);
                    font-size: 15px;
                }
            }

        }
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
    }
}

@keyframes fadeInDown {
    0%{
        opacity: 0;
        transform: translateY(-20px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
