import Vue from 'vue'
import axios from 'axios'
import swal from 'sweetalert'

const MyModuleInjector = require('!!vue-loader?inject!../../../src/views/Workers.vue')
const WorkersMock = MyModuleInjector({
    '../axios/api': {
        getQueryAll(self){
            return {
                "name": "wujie",
                "email": "123@qq.com",
                "mobile": "12345678"
            };
        },
        getExperience(url, username, self){
            self.items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            self.totolCount = 10;
            self.loadData(self.currentPage, self.pageSize, self.totolCount);
            self.handleSizeChange(8);
            self.handleCurrentChange(2);
        }
    }
});

describe('WorkersMock', ()=>{
    it("测试用户详情页面", ()=>{
        const Constructor = Vue.extend(WorkersMock);
        const vm = new Constructor().$mount();
        expect(typeof WorkersMock.created).to.equal('function');
        expect(vm.$data.workerName).to.equal('wujie');
    });
    // after("测试api", ()=>{
        
    // })
});