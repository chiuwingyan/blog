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
              <Meta :item="item"/>
          </div>
      </li>
  </ul>
</template>

<script type="text/ecmascript-6">
import  Meta from './meta'
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
      Meta
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
