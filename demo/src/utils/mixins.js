//全局混入
import _ from 'lodash'
export default {
    install: (Vue)=>{
        Vue.mixin({
            methods:{
                //初始化绑定所有页面自定义事件
                init(target){
                    _.forEach(target.pageConfig,(value,key)=>{
                        if( typeof value.events == 'object' && value.events.name && value.events.name != ''){
                            // console.log(target.$el.children[0].children)
                            target.$refs[value.events.name] = target.$el.children[0].children[key];
                        }
                    })
                }
            }
        })
    }
}