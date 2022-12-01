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

export {authUser}