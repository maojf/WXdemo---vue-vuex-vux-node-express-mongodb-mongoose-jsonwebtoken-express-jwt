<template>
    <group>
      <group-title slot="title" :style="{color}">{{title}}<span class="smallTitle" style="float:right;">{{leftText}}</span></group-title>
    </group>
</template>

<script>
import { Group, GroupTitle } from 'vux'

export default {
    components:{
        Group, 
        GroupTitle
    },
    props:{
        title:{
            type:String,
            default:''
        },
        leftText:{
            type:String,
            default:''
        },
        color:{
            type:String,
            default:''
        },
    }
}
</script>

<style scoped>
.weui-cells__title{
    font-size: 1.4rem;
    background-color: #e6e6e6;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 1vh;
    padding-bottom: .7vh;
    height: 6vh;
}
.weui-cells__title>.smallTitle{
    font-size: 1rem;
    padding-top: 1vh;
}
</style>