<template>
<div>
    <input type="text" @focus="isShow = true" @blur="blurHandle" v-model="value">
    <ul v-show="isShow">
        <li v-for="(item, index) in list" :key="index" v-show="value==''?true:item.name.includes(value)" @click="getValue(item)">{{item.name}}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: "PSelect",
    props:{
        list:{
            type:Array,
            default:()=>[]
        },
        //提交表单时提交name 1;提交value 0
        valueType:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            isShow:false,
            value:'',
            isShowVal:[]
        }
    },
    methods:{
        getValue(item){
            this.value = item.name
            this.valueType?
                this.currentValue = item.name:
                this.currentValue = item.value
        },
        blurHandle(){
            this.isShow = false;
            this.list.forEach((item,index,arr)=>{
                if(item.name == this.value){
                    return
                } else if (arr.length == index+1 && item.name != this.value) {
                    this.value = ''
                }
            })          
        }
    }
}
</script>

<style>

</style>
