import axios from 'axios'
import qs from 'qs'
if(process.env.NODE_ENV == 'development'){
  global.servicePath = "http://localhost:3000/"
}else if(process.env.NODE_ENV == 'production'){
  global.servicePath = 'http://localhost:80/'
}

axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded"
  }

const service = axios.create({
    // baseURL: "https://api.weixin.qq.com/",
    baseURL: servicePath,
    timeout: 5000,
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    },
    withCredentials: true // 允许携带cookie
})

service.interceptors.request.use(config=>{
  config.method == 'post'
    ? config.data = qs.stringify({...config.data})
    : config.params = {...config.params}
  if (config.method == 'get') {
    config.data = true
  }
  return config
},error=>{
  Promise.reject(error)
})
service.interceptors.response.use(response=>{
  // console.log(response)
  if(response.status == 200){
    return response.data
  } else {
    return '出错'
  }
},error=>{
  console.log('error');
  console.log(error);
  console.log(JSON.stringify(error));
  return Promise.reject(error)
})

export default service;