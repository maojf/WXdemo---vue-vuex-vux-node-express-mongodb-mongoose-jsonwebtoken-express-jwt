import service from './request'

export const getUserInfo = () => {
    return service({
        url:'/user/getUserInfo',
        method:'get'
    })
}