export default{
    SET_USER(state,data){
        state.userInfo = data.data.userInfo;
        state.social = data.data.social
    },
    SET_ARTICLELIST(state,data){
        state.article_list=state.article_list.concat(data.data.data);
        state.total_article_list = data.data.totalCount;
    },
    SET_DETAILS(state,data){
        console.log('data-1',data)
        state.details.push(data)
        console.log('state.details', state.details)
    },
    SET_CURRENT(state,data){
        state.current_detail = data;
        console.log('state.current_detail', state.current_detail)
    }
}