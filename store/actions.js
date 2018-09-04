import axios from 'axios'
export default{
    async nuxtServerInit({ dispatch, commit, getters }, { app,req, res }) {
        // 获取博主信息
        // const { data } = await app.$axios.get('/api/info')
        // console.log(data)
    },
    //请求文章列表
    async ARTICLES({ commit, state, getters }, page = 1, limit = 15) {
        const { data } = await this.$axios.get('/api/info')
        console.log(data)
    },

   
 
}