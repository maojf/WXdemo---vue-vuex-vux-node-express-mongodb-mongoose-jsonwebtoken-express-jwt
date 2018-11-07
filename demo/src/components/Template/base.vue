<template>
    <div>
        <div v-for="(item,index) in pageConfig" :key="index">
            <component 
                :is="item.name"
                v-bind="item.options"
                >
            </component>
        </div>
    </div>
</template>

<script>
import { XHeader,
         Swiper,
         
} from 'vux'
import { 
    PGroup,
    PGrid,
    PBottomTab
}from '@/components/Template/custom/index.js'

export default {
    name:'Template',
    components:{
        XHeader,
        Swiper,
        



        PGroup,
        PGrid,
        PBottomTab
    },
    props:{
        pageConfig:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style>

</style>
