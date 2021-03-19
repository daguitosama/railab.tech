import createApi from '~/api/repository'

export default function (ctx, inject) {

    const api = createApi(ctx.$http)
    inject('api', api)

}