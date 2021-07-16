import axiosClient from "../config/axios";
import types from "../types";

export const getPostsAction = () =>{
    return async dispatch =>{
        dispatch( getPosts() )
        try {
            const resp = await axiosClient.get('/posts')
            getPostsSuccess( resp.data )
        } catch (error) {
            getPostsError( error )
        }
    }
}

const getPosts = () =>({
    type: types.GET_POSTS
})

const getPostsSuccess = posts =>({
    type: types.GET_POSTS_SUCCESS,
    payload: posts
})

const getPostsError = () =>({
    type: types.GET_POSTS_ERROR
})