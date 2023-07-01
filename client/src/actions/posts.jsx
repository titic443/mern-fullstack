import * as api from '../api'

//Action GetPost
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch(error) {
        console.log(error)
    }
}
