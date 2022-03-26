import * as api from '../api'

export async function getPosts() {
    try {
        const { data } = await api.getPosts();
        return data
    } catch (error) {
        console.log(error.message)
    }
}