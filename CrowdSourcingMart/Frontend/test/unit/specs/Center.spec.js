import Vue from 'vue'
import Center from '@/views/Center'


describe('Center.vue', () => {
    it('测试个人中心', () => {
        //获取实例
        const Constructor = Vue.extend(Center);
        //挂载组件
        const vm = new Constructor().$mount();
        //获取组件
        const menu1 = vm.$el.querySelector('.menu1');
        //定义点击事件
        const clickEvent = new window.Event('click');
        //触发
        menu1.dispatchEvent(clickEvent);
        expect(vm.$data.name).to.equal("MyAccount");

        const menu2 = vm.$el.querySelector('.menu2');
        menu2.dispatchEvent(clickEvent);
        expect(vm.$data.name).to.equal("MyExperience");

        const menu3 = vm.$el.querySelector('.menu3');
        menu3.dispatchEvent(clickEvent);
        expect(vm.$data.name).to.equal("MyParticipate");

        const menu4 = vm.$el.querySelector('.menu4');
        menu4.dispatchEvent(clickEvent);
        expect(vm.$data.name).to.equal("MyNeeds");

        // vm.$data.isAdmin = true
        // const menu5 = vm.$el.querySelector('.menu5');
        // menu5.dispatchEvent(clickEvent);
        // expect(vm.$data.name).to.equal("AdminCenter")
        vm._watcher.run();
    });
})