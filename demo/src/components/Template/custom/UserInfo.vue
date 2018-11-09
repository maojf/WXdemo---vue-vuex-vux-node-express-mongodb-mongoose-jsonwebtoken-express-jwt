<template>
    <div class="user_info">
        <img :src="img" class="user_avatar">
        <p class="user_name" @click="gotoLogin">{{this.$store.state.isLogin?text:'登陆'}}</p>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    props:{
        img:{
            type:String,
            default:''
        },
        text:{
            type:String,
            default:''
        }
    },
    methods:{
        gotoLogin(){
            if(this.$store.state.isLogin){
                return;
            }else{
                this.$router.push('/user/login');
            }
        },
    },
    mounted(){
    }
}
</script>

<style scoped>
.user_info{
    display: flex;
    margin: 10vw;
}
.user_avatar{
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
}
.user_name{
    line-height: 20vw;
    padding-left: 10vw;
    font-size: 8vw;
    color: orange;
}
</style>
