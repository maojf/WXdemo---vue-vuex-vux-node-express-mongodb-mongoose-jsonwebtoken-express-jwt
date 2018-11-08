<template>
    <div>
        <Template v-bind="{pageConfig}"></Template>
    </div>
</template>

<script>
import Template from "@/components/Template/base";
export default {
  name: "User",
  components: {
    Template
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
    };
  },
  mounted(){
    
  } 
};
</script>

<style>
</style>
