
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default () => {
    return new Vuex.Store({
        state: {
            userInfo:{},    //用户信息
            social:{},      //用户社交信息
            article_list:[],    //文章列表
            total_article_list:null,        //文章列表总数
            details:[],                 //请求过的文章详情
            current_detail:{},          //当前文章详情
            comment:{}                  //文章评论
        },
        getters,
        mutations,
        actions
    })
}