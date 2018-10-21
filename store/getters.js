export default{
    detailMap(state){       //映射文章id和文章详情
        return state.details.reduce((result, detail) => {
            result[detail.articleId] = detail
            return result
        }, {})
    },

    articleListMap(state){      //映射文章列表和对应的id
        return state.article_list.reduce((result,article) => {
            result[article.articleId] = article
            return result
        },{})

    }
}