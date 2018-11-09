import service from './request'

export const setUser = (data) => {
    return service({
        url:'/user/setUser',
        method:'post',
        data
    })
}

export const getUserInfor = (data) => {
    return service({
        url:'/user/getUserInfor',
        method:'post',
        data
    })
}