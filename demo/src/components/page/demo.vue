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
                            },
                            {
                                name: "x-input",
                                title: "password",
                                options:{
                                    title: "输入密码"
                                }
                            },
                            {
                                name: "PSelect",
                                title:"sex",
                                options: {
                                    list: [
                                        {name:"adfssdf",value:"1"},
                                        {name:"bb",value:"2"},
                                        {name:"ac",value:"3"},{name:"adfssdf",value:"1"},
                                        {name:"bb",value:"2"},
                                        {name:"ac",value:"3"},{name:"adfssdf",value:"1"},
                                        {name:"bb",value:"2"},
                                        {name:"ac",value:"3"},
                                    ],
                                    valueType:0,
                                    title: "性别",
                                    id:"sex"
                                }
                            },
                            {
                                name: "PSelect",
                                title:"age",
                                options: {
                                    list: [
                                        {name:"adfssdf",value:"1"},
                                        {name:"bb",value:"2"},
                                        {name:"ac",value:"3"},
                                    ],
                                    valueType:1,
                                    title: "年龄",
                                    id:"age"
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
                        ]
                    }
                },

                {
                    name: "UserInfo",
                    options: {
                        img: require("@/assets/img/user/user.jpg"),
                        text: "西门吹雪"
                    }
                },

                {
                    name: "PCell",
                    options: {
                        list: [
                            {
                                title: "账号信息",
                                "is-link": true
                            }
                        ]
                    }
                }
            ]
        }
    }
}
</script>

<style>

</style>
