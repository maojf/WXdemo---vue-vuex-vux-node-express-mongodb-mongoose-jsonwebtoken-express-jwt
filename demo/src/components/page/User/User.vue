<template>
    <div>
        <Template v-bind="{pageConfig}"></Template>
    </div>
</template>

<script>
import Template from "@/components/Template/base";
import { setUser, logIn } from "@/api/api"
export default {
  name: "User",
  components: {
    Template
  },
  methods:{
      btnClick(){
        let user = {
          name: "Tom",
          password: "123",
          admin: '0'
        }
        logIn(user)
          .then((res)=>{
            console.log(res)
            sessionStorage.setItem('token',res.token);
          })
      },
      btnClick1(){
        let user = {
          name: "Tom",
          password: "123",
          admin: '0'
        }
        setUser(user)
          .then((res)=>{
            console.log(res)
          })
      }
  },
  data() {
    return {
      pageConfig: [
        {
          name: "x-header",
          options: {
            title: "个人中心"
          }
        },

        {
          name: "UserInfo",
          options: {
            img: require("@/assets/img/user/user.jpg"),
            text: "西门吹雪"
          },
          events:{
            name: "btnClick",
            list:{
              click:this.btnClick
            }
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
          },
          events:{
            name: "btnClick1",
            list:{
              click:this.btnClick1
            }
          }
        }
      ]
    };
  },
  mounted(){
    
  }
};
</script>

<style>
</style>
