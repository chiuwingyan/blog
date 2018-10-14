export default{
    detailMap(state){
        return state.details.reduce((result, detail) => {
            result[detail.articleId] = detail
            return result
        }, {})
    }
}