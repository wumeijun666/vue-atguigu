// 注意 这里只是模拟，肯定会报错Cannot use import statement outside a module，因为这里只是模拟脚手架的写法。在这里
// 这样写肯定不对，需要使用vue框架才正确
import app from './App.vue'

new Vue({
    el:'#root',
    components:{app}
})