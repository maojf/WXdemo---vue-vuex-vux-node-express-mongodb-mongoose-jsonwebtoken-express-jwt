import router from './index'
import store from '../store'
import Vue from 'vue'
router.beforeEach((to,from,next)=>{
    // 获取当前用户权限
    var cookie = document.cookie
    var userInfo;
    cookie.split(';').forEach(item=>{
        if(item.includes('userInfo')){
            userInfo = item.split('=')[1];
        }
    })
    // 鉴权
    if(!to.meta.AUTHORITY){
        next();
    }else if(store.state.isLogin){
        if(to.meta.AUTHORITY == 1){
            if(userInfo == 0){
                next();
            }else{
                Vue.$vux.alert.show({
                    title: '权限不足',
                    content: '请联系管理员咨询',
                    onShow () {
                    },
                    onHide () {
                    }
                }) 
            }         
        }  
    }else if(to.meta.AUTHORITY == 1||to.meta.AUTHORITY == 2){
        Vue.$vux.alert.show({
            title: '请先登录',
            content: '该功能需要登录',
            onShow () {
            },
            onHide () {
            }
        }) 
    }else{
        next();
    }
})