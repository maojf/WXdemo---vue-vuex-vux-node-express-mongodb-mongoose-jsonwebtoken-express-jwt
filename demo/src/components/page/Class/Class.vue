<template>
    <div>
        <Template v-bind="{pageConfig}"></Template>
    </div>
</template>

<script>
import Template from "@/components/Template/base";

export default {
  name: "Class",
  components: {
    Template
  },
  data() {
    return {
      pageConfig: [
        {
          name: "x-header",
          options: {
            title: "课程表"
          }
        },

        
      ]
    };
  }
};
</script>

<style>
</style>
