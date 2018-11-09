<template>
    <div>
        <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="4">
            <grid-item :link="item.link" :label="item.label" v-for="(item,index) in list" :key="index">
                <img slot="icon" :src="item.img">
            </grid-item>
        </grid>
    </div>
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
    name: "PGrid",
    components:{
        Grid,
        GridItem
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
a{
    padding-bottom: 0;
}
.weui-grid:after{
    display: none;
}
</style>

