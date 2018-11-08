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
import {
    XHeader,
    Swiper,
} from 'vux'
import { 
    PGroup,
    PGrid,
    PBottomTab,
    UserInfo,
    PCell
}from '@/components/Template/custom/index.js'

export default {
    name:'Template',
    components:{
        XHeader,
        Swiper,
        



        PGroup,
        PGrid,
        PBottomTab,
        UserInfo,
        PCell
    },
    props:{
        pageConfig:{
            type:Array,
            default:[]
        }
    },
    mounted(){
        this.init(this.$parent)
    }
}
</script>

<style>

</style>
