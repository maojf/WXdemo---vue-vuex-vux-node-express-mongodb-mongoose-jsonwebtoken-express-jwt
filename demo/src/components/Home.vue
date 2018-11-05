<template>
  <div>
    <!-- <Template v-bind="{pageConfig:pageConfig}"></Template> -->
    <x-header @on-click-title="asdasd">This is the page title.</x-header>
  </div>
</template>

<script>
import {getUserInfo} from '@/api/api'
import { Group, Cell } from 'vux'
import Template from '@/components/Template/base'

import { XHeader } from 'vux'
// import qs from 'qs';
export default {
  name: 'Home',
  components: {
    Group,
    Cell,
    Template,
    XHeader
  },
  data () {
    return {
      pageConfig:[
        {
          name:'x-header',
          options:{
            title:'asdasd'
          }
        }
      ]
    }
  },
  methods:{
    asdasd(){console.log(111111)},
    asd(){
      // service.get('cgi-bin/token?grant_type=client_credential&appid=wx113a5f880a367deb&secret=578951c1581c9c0647564e69c55835a7')
      getUserInfo().then((res)=>{
        console.log(res)
      })
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
