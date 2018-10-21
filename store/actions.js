export default{
    async nuxtServerInit({ dispatch, commit, getters }, { app,req, res }) {
        // 获取博主信息
        const { data } = await app.$axios.get('/api/info')
        commit('SET_USER',data)
    //   console.log(data)
    },
    //请求文章列表
    async ARTICLES({ commit, state, getters }, page = 1) {
        const { data } = await this.$axios.get(`/api/articles?page=${page}`)
        commit('SET_ARTICLELIST',data)
      //  console.log(data)
    },
    //获取文章详情
    async get_article_detail({ commit, state, getters },id){
        return new Promise((resolve,reject)=>{
            if (getters.detailMap[id]){
                commit('SET_CURRENT', getters.detailMap[id])
            }else{
               this.$axios.get(`/api/article/${id}`).then((res)=>{
                  //  console.log('res',res.data.data)
                   commit('SET_DETAILS',res.data.data);
                   commit('SET_CURRENT', res.data.data);
                }).catch(reject);
               
            }
            resolve();
        })
    },

    //获取文章评论
    async get_comment({commit,state,getters},id,page = 1 ){
        const { data } = await this.$axios.get(`/api/article/comments/${id}?page=${page}`)
        commit('SET_COMMENT',data.data);
    }
   
 
}