<template>
  <div>
    <Template v-bind="{pageConfig}"></Template>
    <!-- <x-header @on-click-title="asdasd">This is the page title.</x-header> -->
  </div>
</template>

<script>
import Template from "@/components/Template/base";

export default {
  name: "Home",
  components: {
    Template
  },
  data() {
    return {
      pageConfig: [
        {
          name: "x-header",
          options: {
            title: "武英级",
            "left-options": {
              showBack: false
            }
          }
        },

        {
          name: "swiper",
          options: {
            list: [
              {
                url: "javascript:",
                img: require("@/assets/img/home/1.jpg"),
                title: "送你一朵fua"
              },
              {
                url: "javascript:",
                img: require("@/assets/img/home/2.jpg"),
                title: "送你两朵fua"
              }
            ],
            "aspect-ratio": 300 / 800,
            auto: true,
            loop: true
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
          name: "PGrid",
          options: {
            list: [
              {
                img: require("@/assets/img/home/icon1.jpg"),
                link: "/class",
                label: "课程表"
              },
              {
                img: require("@/assets/img/home/icon2.jpg"),
                link: "http://www.baidu.com",
                label: "课程表"
              },
              {
                img: require("@/assets/img/home/icon3.jpg"),
                link: "http://www.baidu.com",
                label: "课程表"
              },
              {
                img: require("@/assets/img/home/icon4.jpg"),
                link: "http://www.baidu.com",
                label: "课程表"
              }
            ]
          }
        },

        {
          name:'PBottomTab',
          options:{
            list:[
              {
                text:'首页',
                img:require('@/assets/img/home/bottomTab1.png'),
                link:'/'
              },
              {
                text:'个人中心',
                img:require('@/assets/img/home/bottomTab1.png'),
                link:'/user'
              }
            ]
          }
        }
      ]
    };
  },
  methods: {
    
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
