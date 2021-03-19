const API_PATH = '/api'
export default $api => ({
    async sendMail({ sender = '', message = '' }) {
        const result = await $api.post(API_PATH + '/mail', { data: { sender, message } })
        return result
    }
})