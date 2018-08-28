import Vue from 'vue'
import Login from '@/views/Login'
import axios from 'axios'
import sinon from 'sinon'

describe('Login.vue', ()=>{
    it('触发登录事件1', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'tester';

        //密码
        vm.$data.pwd = '123';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件2', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = '';

        //密码
        vm.$data.pwd = '123';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件3', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'te';

        //密码
        vm.$data.pwd = '123';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件4', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'testerrrrrrrrrrrrrrr';

        //密码
        vm.$data.pwd = '123';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件5', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'tes ter';

        //密码
        vm.$data.pwd = '123';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件6', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'tester';

        //密码
        vm.$data.pwd = '';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件7', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = '';

        //密码
        vm.$data.pwd = '';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件8', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'te';

        //密码
        vm.$data.pwd = '';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件9', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'testerrrrrrrrrrrrrrr';

        //密码
        vm.$data.pwd = '';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});

describe('Login.vue', ()=>{
    it('触发登录事件10', ()=>{

        //获取实例
        const Constructor = Vue.extend(Login);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const buttom = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //用户名
        vm.$data.account = 'tes ter';

        //密码
        vm.$data.pwd = '';

        //提交
        buttom.dispatchEvent(clickEvent);
        
        //监听
        vm._watcher.run();
        //断言
        expect(vm.$data.button_disabled).to.equal(false);
    });
});