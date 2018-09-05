export default{
    SET_USER(state,data){
        state.userInfo = data.data.userInfo;
        state.social = data.data.social
    }
}