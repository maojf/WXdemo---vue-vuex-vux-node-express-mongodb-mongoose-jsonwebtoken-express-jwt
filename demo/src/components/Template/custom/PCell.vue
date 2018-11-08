<template>
    <group>
        <cell v-for="(item,index) in list" :key="index" v-bind="item"></cell>
    </group>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
    name: "PCell",
    components: {
        Group,
        Cell
    },
    props:{
        list:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style>

</style>
