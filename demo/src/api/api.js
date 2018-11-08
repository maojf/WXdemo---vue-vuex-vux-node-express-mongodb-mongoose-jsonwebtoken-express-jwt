import service from './request'

export const setUser = (data) => {
    return service({
        url:'/user/setUser',
        method:'post',
        data
    })
}

export const logIn = (data) => {
    return service({
        url:'/user/login',
        method:'post',
        data
    })
}