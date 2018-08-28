import Vue from 'vue'
import Register from '@/views/Register'
import axios from 'axios'
import HeadBarLight2 from '@/components/head/HeadBarLight2'

describe('Register.vue', ()=>{
    it('触发注册事件1', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件2', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = '';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件3', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'te';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件4', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'testerrrrrrrrrrrrrrr';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件5', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tes ter';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件6', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '';

        //确认密码
        vm.$data.pwd_rep = '';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件7', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件8', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '456';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});


describe('Register.vue', ()=>{
    it('触发注册事件9', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "te@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件10', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件11', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "testerrrrrrrrrrrrrrrr@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件12', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tes ter@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件13', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "1tester@xlab.com";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件14', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab";

        //勾选
        vm.$data.checked = true;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(true);
    });
});

describe('Register.vue', ()=>{
    it('触发注册事件15', ()=>{
        //获取实例
        const Constructor = Vue.extend(Register);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取按钮
        const button = vm.$el.querySelector('.login_button');
        //定义事件
        const clickEvent = new window.Event('click');

        //给定账号
        vm.$data.account = 'tester';

        //给定密码
        vm.$data.pwd = '123';

        //确认密码
        vm.$data.pwd_rep = '123';

        //输入邮箱
        vm.$data.email = "tester@xlab.com";

        //勾选
        vm.$data.checked = false;

        //提交
        button.dispatchEvent(clickEvent);

        expect(vm.$data.checked).to.equal(false);
    });
});