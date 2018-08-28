import Vue from 'vue'
import axios from 'axios'

// const getToken = (solved) => {
//     return "wujie";
// }

const MyModuleInjector = require('!!vue-loader?inject!../../../src/views/Projects.vue')
const ProjectsWithMocks = MyModuleInjector({
    '../axios/api': {
        getSession(){
            return "wujie";
        },
        getToken(resolve){
            return "wujie";
        },
        getProjects(url, data, self){
            self.projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            self.totolCount = 10;
            self.loadData(self.currentPage, self.pageSize, self.totolCount);

            self.handleCurrentChange(1);
            self.handleSizeChange(12);
        }
    }
});

describe('ProjectsWithMocks', () => {
    //检查初始
    // it('create', () => {
    //     expect(typeof Projects.created).to.eql('function')
    // })


    it('测试项目列表页面', () => {
        const Constructor = Vue.extend(ProjectsWithMocks);
        const vm = new Constructor().$mount();
        expect(vm.$data.isLogin).to.eql(true);
    });
});