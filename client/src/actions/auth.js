import * as api from '../api'

export async function authenticate() {
    try {
        const { data } = await api.authenticate();
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export function googleAuth(result, token) {
    localStorage.setItem('profile', JSON.stringify({ result: result, token: token}))
}

export function logout() {
    localStorage.clear()
}