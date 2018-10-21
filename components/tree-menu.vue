<template>
  <div class="comment">
      <section class="main">
          <div class="avatar">
              <img src="../assets/image/avatar.jpg" alt="">
          </div>
        <div>
         <header>
            <span class="nickname">
                {{comment.nickname}}
            </span>
            <span class="point">
                •
            </span>
            <span class="date">
                {{comment.createTime}}
            </span>
          </header>
        <footer class="content">
            {{comment.comment}}
        </footer>
     
        <a class="btn" href="javascript:void(0)">
            Reply
        </a>
            </div> 
         </section>
         
          <div v-if="comment.childCommentList.length > 0">
               <tree-menu v-for="(item,index) in comment.childCommentList" :key="index" :comment="item"></tree-menu>
          </div>
     
  </div>
</template>

<script type="text/ecmascript-6">
export default {
name: "treeMenu",
props:{
      comment:{
          type:Object,
          default:() => {},
      }
  },
  data() {
    return {
        page:1
    }
  },
  components: {

  },
    methods:{
        load(){

        }
    }
}
</script>

<style scoped lang="scss" type="text/scss" >
    .comment{
        width: 80%;
        margin: 30px 50px 30px;
        .main{
            margin-bottom: 50px;
           display: flex;
            .avatar{
                margin-right: 12px;
                margin-top: 7px;
               // display: inline-block;
                img{
                    width: 48px;
                    height: 48px;;
                }
            }
            header{
                margin-bottom: 3px;
                font-size: 13px;
                .nickname{
                    color: #656c7a;
                    font-weight: 700;
                    font-size: 13px;
                }
                .point{
                    padding: 0;
                    color: #c2c6cc;
                    line-height: 1.4;
                }
                .date{
                    font-size: 12px;
                    color: #656c7a;
                    font-weight: 500;
                }
                .content{
                    line-height: 21px;
                    font-size: 13px;
                    color: #2a2e2e;
                }
            }
                .btn{
                    color: #656c7a;
                    font-weight: 500;
                }
        }
    }
</style>
