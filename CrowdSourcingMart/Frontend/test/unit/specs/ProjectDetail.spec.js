import Vue from 'vue'
import axios from 'axios'

const MyModuleInjector = require('!!vue-loader?inject!../../../src/views/ProjectDetail.vue')
const ProjectDetailWithMocks = MyModuleInjector({
    '../axios/api': {
        getQuery(resolve) {
            return 1;
        },
        getSession() {
            return "wujie";
        },
        getToken(resolve) {
            return { "tokenid": "wujie", "username": "wujie" };
        },
        participate(url, id, self){
            self.isEnroll = true;
        },
        getProject(url, projectId, self) {
            var data = {
                "status": "200", 
                "result": { 
                    "requirement": { 
                        "id": 1, "requirementName": "微信小游戏开发", "requirementType": "微信平台开发", "startTime": 1526140800000, "endTime": 1527696000000, "needManager": 1, "requirementDetail": "开发一个弹一弹游戏", "file": null, "requirementState": 0, "creatorId": 2, "projectId": 1 
                    }, 
                    "developerList": [{ 
                        "username": "test", "email": "test@test.com", "mobile": "123456789" 
                    }] 
                }
            };
            self.setValue({data});
            data.result.requirement.requirementState = 1;
            self.setValue({data});
            data.result.requirement.requirementState = 2;
            self.setValue({data});
            data.result.developerList.push({ 
                "username": "wujie", "email": "test@test.com", "mobile": "123456789" 
            });
            self.setValue({data});
            self.participateProject()
            self.checkWorker({ 
                "username": "test", "email": "test@test.com", "mobile": "123456789" 
            });

        }
    }
});

describe('ProjectDetailWithMocks', () => {
    // 组件实例
    const Constructor = Vue.extend(ProjectDetailWithMocks);
    // 挂载组件
    const vm = new Constructor().$mount();

    it('单个项目详情页面测试', () => {
        vm._watcher.run();
        expect(vm.$data.isLogin).to.equal(true);
        expect(vm.$data.isEnroll).to.equal(true);
    });
});