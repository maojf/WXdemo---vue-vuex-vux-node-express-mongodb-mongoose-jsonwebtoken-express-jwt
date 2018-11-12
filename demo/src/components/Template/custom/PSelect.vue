<template>
<div class="select_container">
    <label :for="id" class="select_label">{{title}}</label>
    <input type="text" @focus="isShow = true" @blur="blurHandle" v-model="value" class="select_input" :id="id">
    <ul v-show="isShow" class="select_ul">
        <li class="select_li" v-for="(item, index) in list" :key="index" v-show="value==''?true:item.name.includes(value)" @click="getValue(item)">{{item.name}}</li>
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
        },
        title:{
            type:String,
            default:''
        },
        id:{
            type:String,
            default:''
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

<style scoped>
.select_container{
    padding: 10px 15px;
    position: relative;
    overflow: visible;
    display: flex;
}
.select_container::before{
    content:'';
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
}
.select_input{
    width: 64%;
    line-height: 5vh;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 400;
}
.select_label{
    display: inline-block;
    width: 5em;
    margin-right: 2em;
    line-height: 5vh;
}
.select_ul{
    position: absolute;
    background: #fff;
    top: 8vh;
    right: 2vw;
    z-index: 1000;
    width: 75%;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    padding: 2px 10px;
    max-height: 30vh;
    overflow: scroll;
}
.select_li{
    line-height: 8vh;
    border-top: 1px solid #D9D9D9;
}
.select_li:first-of-type{
    border-top: none;
}
</style>
