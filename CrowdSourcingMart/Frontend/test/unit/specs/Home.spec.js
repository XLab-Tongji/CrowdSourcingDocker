import Vue from 'vue'

const MyModuleInjector = require('!!vue-loader?inject!../../../src/views/Home.vue')
const Home = MyModuleInjector({
    '../axios/api': {
        getSession(){
            return "wujie";
        },
        getToken(resolve){
            return {"tokenid": "wujie", "username": "wujie"};
        },
    }
});

describe('Home', ()=>{
    it('测试主页', ()=>{
        const Constructor = Vue.extend(Home);
        const vm = new Constructor().$mount();
        expect(vm.$data.isLogin).to.equal(true);
    });
});