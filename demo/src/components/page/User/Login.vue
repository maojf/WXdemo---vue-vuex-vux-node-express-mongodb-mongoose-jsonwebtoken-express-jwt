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
                                    title: "设置密码"
                                }
                            },
                            {
                                name: "x-input",
                                title: "password1",
                                options:{
                                    title: "设置密码"
                                }
                            }
                        ],
                        button:[
                            {
                                api: "aaaa",
                                list:{
                                    text: "确定",
                                    type: "primary"
                                }
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
