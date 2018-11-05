import service from './request'

export const getUserInfo = () => {
    return service({
        url:'/getUserInfo',
        method:'post'
    })
}