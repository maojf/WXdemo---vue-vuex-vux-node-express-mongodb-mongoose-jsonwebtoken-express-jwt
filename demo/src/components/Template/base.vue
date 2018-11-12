<template>
    <div>
        <div v-for="(item,index) in pageConfig" :key="index">
            <component 
                :is="item.name"
                v-bind="item.options"
                @click.native="item.events?item.events.list.click():''"
                >
            </component>
        </div>
    </div>
</template>

<script>
import {getUserInfor} from "@/api/api"
import {
    XHeader,
    Swiper,
    XInput
} from 'vux'
import { 
    PGroup,
    PGrid,
    PBottomTab,
    UserInfo,
    PCell,
    PForm,
    PSelect
}from '@/components/Template/custom/index.js'

export default {
    name:'Template',
    components:{
        XHeader,
        Swiper,
        XInput,




        PGroup,
        PGrid,
        PBottomTab,
        UserInfo,
        PCell,
        PForm,
        PSelect
    },
    props:{
        pageConfig:{
            type:Array,
            default:()=>[]
        }
    },
    mounted(){
        let user = {
            name:"Tom",
            password:"123"
        }
        //初始化事件
        this.init(this.$parent);
        //登陆验证
        // getUserInfor(user).
        //     then(res=>{
        //         sessionStorage.setItem('token',res.token);
        //         sessionStorage.setItem('isLogin',true);
        //     })
        //获取登陆状态
        this.$store.commit('getIsLogin',sessionStorage.getItem('isLogin'));
    }
}
</script>

<style>

</style>
