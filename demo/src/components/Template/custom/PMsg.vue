<template>
    <div>
        <msg :title="title" :description="description" :icon="icon" :buttons="buttons"></msg>
    </div>
</template>

<script>
import { Msg } from 'vux'
export default {
    name: "PMsg",
    components: {
        Msg
    },
    props:{
        title:{
            type:String,
            default:''
        },
        description:{
            type:String,
            default:''
        },
        icon:{
            type:String,
            default:''
        },
        buttons:{
            type: Array,
            default: ()=>{}
        }
    }
}
</script>

<style>

</style>
