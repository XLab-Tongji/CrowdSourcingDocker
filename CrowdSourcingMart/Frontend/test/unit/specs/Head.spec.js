import Vue from 'vue'
import Head from  '@/components/head/Head'
import { print } from 'util';

describe('Head.vue', ()=>{

    it('', () => {
        //获取组件实例
        const Constructor = Vue.extend(Head);
        //挂载组件
        const vm = new Constructor().$mount();
        
        window.scrollTo(0,document.body.scrollHeight);

        var afterScroll = {
            'background-color': '#ffffff',
            'color': '#323A45',
            'height': '50px',
            'border-bottom': '1px solid #DDD'
          };
        
       // console.log(vm.$el);
        expect(vm.$el.style.backgroundColor).to.equal('');
      })
})