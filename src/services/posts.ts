import { api } from "./index";

const getPosts = (token: string) => {
    return new Promise((resolve, reject) => {
        api.get('/posts', {
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

export { getPosts }