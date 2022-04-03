import BaseService from "./base.service"
import {TOKEN_NAME} from '@/configs'

export default class AuthService extends BaseService{

    static async auth (params) {
        //return axios.post(`${URL_API}/sanctum/token`, params)
        //return this.request({auth: true}).post('/sanctum/token', params)
        return new Promise((resolve, reject) => {
            this.request()
                .post('/api/sanctum/token', params)
                .then(response => {
                    console.log(response.data.token)
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                })
                .catch(error => reject(error.response))

        })
    }

}