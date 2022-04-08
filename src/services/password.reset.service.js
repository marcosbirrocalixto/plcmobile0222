import BaseService from "./base.service"

export default class ResetPasswordService extends BaseService{

    static async forgetPassword (params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/api/forget-password', params)
                .then(response => resolve(response))
                .catch(error => reject(error.response))

        })
    }

    static async reset (params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/api/reset-password', params)
                .then(response => resolve(response))
                .catch(error => reject(error.response))

        })
    }

}