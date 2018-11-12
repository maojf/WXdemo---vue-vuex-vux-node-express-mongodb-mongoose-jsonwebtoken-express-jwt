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
                                name: "PSelect",
                                title:"sex",
                                options: {
                                    list: [
                                        {name:"adfssdf",value:"1"},
                                        {name:"bb",value:"2"},
                                        {name:"ac",value:"3"},
                                    ],
                                    valueType:0
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
                                    valueType:1
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

                // {
                //     name: "PSelect",
                    
                // }
            ]
        }
    }
}
</script>

<style>

</style>
