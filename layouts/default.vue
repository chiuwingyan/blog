<template>
  <div id="app">
    <section class="nav">
      <ul>
        <li v-for="(item,index) in navList" :key="index" :class="{'current':item.routerName === current}" @click="handleclick(item,index)">{{item.name}}</li>
      </ul>
    </section>
    <section class="sidebar">
      <div class="logo-title">
      <div class="title">
        <img src="../assets/image/logo@2x.png" alt="" width="127px">
        <h3><a href="/">{{name}}</a></h3>
      </div>
      </div>
    </section>
    <section class="content">
       <nuxt/>
    </section>
   
  </div>
</template>

<script>
import nav from '../const/nav-const.js'
export default {
  mounted(){
    if(this.$route.name === 'index' || this.$route.fullPath === '/home'){
      this.current = 'index'
    }else{
    //console.log(this.navList.filter(this.filterNav))
    if(this.navList.filter(this.filterNav)[0]){
        this.current = this.navList.filter(this.filterNav)[0].name.toLowerCase();
    }
    }
    this.name="chiuwingyan's blog"
  },
  data(){
    return {
      navList:nav.nav,
      current:'',
      name:''
    }
  },
  methods:{
    handleclick(item,index){
      if(index === 0){
        this.current= 'index'
      }else{
        
        this.current = item.routerName;
      }
      this.$router.push({path:`/${index === 0? '':item.name.toLowerCase()}`})
    },
    filterNav(item){
    //  console.log('item',item.name.toLowerCase())
      //console.log('router',this.$route)
      return item.routerName === this.$route.name
    }
  }
}
</script>

<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
@media screen and (max-width:960px){
  .nav{
    width: 100% !important;
  }
  .content{
    margin-top: 420px !important;
    width: 100% !important;
    z-index: 2 !important;
    position: absolute !important;
  }
  .sidebar{
    width: 100% !important;
    position: absolute !important;
    border-right:none !important;
    z-index: 1 !important; 
  }
  .sidebar .logo-title{
    padding-top: 120px !important;
  }
  .sidebar .logo-title .title img{
    width: 100px !important;
  }
}
.nav{
  width: 60%;
  position: fixed;
  right: 0;
  z-index: 3;
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #f2f2f2;
}
.nav ul{
  list-style: none;
  padding: 18px 30px;
  float: left;
  font-size: 12px;
}
.nav ul li{
  position: relative;
  display: inline;
  margin-right: 20px;
  color:#5A5A5A;
}
.nav ul li.current{
  padding-bottom:24px;
  border-bottom:1px solid #5A5A5A;
}

.sidebar{
  width: 40%;
  background-size: cover;
  background-color: #fff;
  height: 100%;
  transition: 0.8s;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  border-right: 1px solid #f2f2f2;
}
.sidebar .logo-title{
  text-align: center;
  padding-top: 240px;
}
.sidebar h3{
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 1;
  margin: 0;

}
.sidebar h3 a{
  text-decoration: none;
  color: #464646;
  font-size: 2rem;
  font-weight: bold;
}
.content{
  height: auto;
  float: right;
  width: 60%;
  margin-top: 60px;
}
</style>

