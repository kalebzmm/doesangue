import { api } from "./index";

const authUser = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        api.post('/users/login', {
            email,
            password,
        }).then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}

const getUserData = (token: string) => {
    return new Promise((resolve, reject) => {
        api.get('/users/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}

export {authUser, getUserData}