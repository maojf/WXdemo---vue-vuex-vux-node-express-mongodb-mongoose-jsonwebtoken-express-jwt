<template>
    <div>
        <Template v-bind="{pageConfig}"></Template>
    </div>    
</template>

<script>
import Template from '@/components/Template/base';
export default {
    name:'Login',
    components:{
        Template
    },
    methods:{
        func(res){
            console.log(res)
            if(res.code == 1){
                sessionStorage.setItem('token',res.token);
                sessionStorage.setItem('isLogin',true);
                this.$router.push({
                    name: "Msg",
                    params: {
                        title: "kkkkk",
                        description: "bbb",
                        icon: "success",
                        buttons:[
                            {
                                type: "primary",
                                text: "确定",
                                link: "/"
                            }   
                        ]
                    }
                })
            }else{
                this.$vux.toast.text(res.msg, 'middle')
            }
        }
    },
    data(){
        return {
            pageConfig:[
                {
                    name: "x-header",
                    options: {
                        title: "个人中心"
                    }
                },

                {
                    name: "PGroup",
                    options: {
                        title: "aaa",
                        leftText: "bbb",
                        color: "#4db8ff"
                    }
                },

                {
                    name: "PForm",
                    options:{
                        list:[
                            {
                                name: "x-input",
                                title: "password",
                                options:{
                                    title: "输入密码"
                                }
                            }
                        ],
                        button:[
                            {
                                api: "/user/login",
                                list:{
                                    text: "登陆",
                                    type: "primary"
                                }
                            }
                        ],
                        func:this.func
                    }
                }
            ]
        }
    }
}
</script>

<style>

</style>
