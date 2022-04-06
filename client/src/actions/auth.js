import * as api from '../api'

export async function createAccount(formData) {
    try {
        const { data } = await api.createAccount(formData);
        localStorage.setItem('profile', JSON.stringify({ result: data.result, token: data.token}))
    } catch (error) {
        console.log(error.message)
    }
}

export async function login(formData) {
    try {
        const { data } = await api.login(formData);
        localStorage.setItem('profile', JSON.stringify({ result: data.result, token: data.token}))

    } catch (error) {
        console.log(error.message)
    }
}


// Google authentication
export function googleAuth(result, token) {
    localStorage.setItem('profile', JSON.stringify({ result: result, token: token}))
}

export function logout() {
    localStorage.clear()
}