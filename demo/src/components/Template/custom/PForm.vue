<template>
    <form @submit="aaa">
        <group label-margin-right="2em" id="aaa">
            <component v-for="(item,index) in list" :key="index" 
            :is="item.name"
            v-bind="item.options"
            :ref="item.title"
            ></component>
        </group>
        <x-button v-for="(item,index) in button" :key="index" v-bind="item.list"></x-button>
    </form>
</template>

<script>
import { 
    Group, 
    XInput,
    XButton
    } from 'vux'
export default {
    name:'PForm',
    components:{
        Group,
        XInput,
        XButton
    },
    props:{
        list:{
            type:Array,
            default:()=>[]
        },
        button:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{
        aaa(){
            let api = this.button[0].api;
            let total = {}
            this.list.forEach(item => {
                let key = item.title;
                let value = this.$refs[key][0].currentValue;
                total[key] = value;
            });
            console.log(api)
        }
    }
}
</script>

<style scoped>

</style>
