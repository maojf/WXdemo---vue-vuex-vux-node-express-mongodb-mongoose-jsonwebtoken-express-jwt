<template>
    <form @submit="submit">
        <group label-margin-right="2em">
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
import PSelect from './PSelect'
export default {
    name:'PForm',
    components:{
        Group,
        XInput,
        XButton,
        PSelect
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
        submit(e){
            e.preventDefault();
            let api = this.button[0].api;
            let total = {}
            this.list.forEach(item => {
                let key = item.title;
                let value = this.$refs[key][0].currentValue;
                total[key] = value;
            });
            console.log(total)
            console.log(api)
        }
    }
}
</script>

<style scoped>

</style>
