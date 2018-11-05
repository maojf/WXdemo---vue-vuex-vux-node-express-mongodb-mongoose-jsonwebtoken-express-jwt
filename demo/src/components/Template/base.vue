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
import { XHeader } from 'vux'
export default {
    name:'Template',
    components:{
        XHeader
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
