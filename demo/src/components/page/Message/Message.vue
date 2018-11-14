<template>
    <div>
        <Template v-bind="{pageConfig}"></Template>
    </div>  
</template>

<script>
import Template from "@/components/Template/base";
export default {
  name: "Message",
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
          name: "PMsg",
          options: {
            title: this.$route.params.title,
            description: this.$route.params.description,
            icon: this.$route.params.icon,
            buttons:[]
          }
        }
      ]
    };
  },
  mounted(){
    // 直接写在date里会报错（未知原因）
    this.pageConfig[1].options.buttons = this.$route.params.buttons
  }
};
</script>

<style>
</style>
