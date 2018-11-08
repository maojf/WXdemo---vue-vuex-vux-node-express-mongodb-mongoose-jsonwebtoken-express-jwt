<template>
    <tabbar>
        <tabbar-item :selected="index == 0" v-for="(item, index) in list" :key="index" :link='item.link'>
            <img slot="icon" :src="item.img">
            <span slot="label">{{item.text}}</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
    name: "PBottomTab",
    components:{
        Tabbar, 
        TabbarItem
    },
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style scoped>
.weui-tabbar{
    position: fixed;
}
</style>
