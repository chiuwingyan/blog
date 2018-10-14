<template>
  <section class="container" v-scroll="count">
    <topList :articles="$store.state.article_list" />
     <p v-if="noMore" class="load-tip">没有更多文章了</p>
    <p v-else class="load-tip">加载中...</p>
  </section>
</template>

<script>

import topList from '../components/top-list'
let that=this;
export default {
  async asyncData ({ store, route }) {
    await store.dispatch('ARTICLES',1)
  },
  data(){
    return {
      page:1,
      isLoading:false,
      noMore:this.$store.state.article_list.length < this.$store.state.total_article_list?false:true
    }
  },
  directives:{
    scroll:{
      bind:(el,binding) => {
        window.addEventListener('scroll',()=>{
          clearTimeout(timeout)    //滚动时应该使用去抖
          let timeout = setTimeout(() =>{
            binding.value.call();
        }, 300);
        },false)
      }
    }
  },
  components: {
   topList
  },
  methods:{
    async onLoad(){
      if(!this.isLoading){ //如果没有加载中才加载
        if(this.$store.state.article_list.length < this.$store.state.total_article_list){
            this.isLoading = true;
           // this.isLoading = false;
            this.page++;
            await this.$store.dispatch('ARTICLES',this.page);
            this.isLoading = false;
        }else{
          this.noMore = true;
          this.isLoading = false;
        }
      }else{
        console.log('加载中啦')
      }
    },
  count(){
          let scrollTop;
          if(document.documentElement.offsetWidth<=960){
            scrollTop = 15 + document.documentElement.scrollTop || document.body.scrollTop;
          }else{
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          }
          if(scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
             this.onLoad()
          }
  }
  },
  
}
</script>

<style>
.container {
 


}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.load-tip{
  text-align: center;
  color: rgba(0, 0, 0, .5);
}
</style>

