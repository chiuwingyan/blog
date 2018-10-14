
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default () => {
    return new Vuex.Store({
        state: {
            userInfo:{},
            social:{},
            article_list:[],
            total_article_list:null,
            details:[],
            current_detail:{}
        },
        getters,
        mutations,
        actions
    })
}