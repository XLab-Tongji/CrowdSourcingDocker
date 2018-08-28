import axios from '../axios/http';
import swal from 'sweetalert';

export function login(url, data, self) {
    axios.post(url, data).then(response => {
        if (response.data.status == 200) {
        }
        else
            throw response;
        if (response.data.status == 200) {
            self.$message({
                message: ('登录成功'),
                type: 'success'
            });
            self.$store.commit('setToken', response.data.result.tokenid);
            self.$store.commit('setUsername', self.account);

            self.$store.commit('setRealname', response.data.result.realname);
            self.$store.commit('setMobile', response.data.result.mobile);
            self.$store.commit('setEmail', response.data.result.email);

            sessionStorage.setItem('tokenid', response.data.result.tokenid);
            sessionStorage.setItem('username', self.account);
            sessionStorage.setItem('realname', response.data.result.realname);
            sessionStorage.setItem('mobile', response.data.result.mobile);
            sessionStorage.setItem('email', response.data.result.email);

            self.account = '';
            self.pwd = '';
            self.$router.push('/center');
        }
    }).catch(function (error) {
        self.error = error;
        if (error) {
            if (error.data.result == "unauthorized") {
                swal("Warning", "密码错误!", "warning");
            } else if (error.data.result == "用户名不存在") {
                swal("Warning", "用户名不存在!", "warning");
            } else if (error.status == 500) {
                swal("Error", "服务器错误", "error");
            }
        }
    });
}

export function register(url, data, self) {
    axios.post(url, data).then(function (response) {
        if (response.status == 200) { }
        else
            throw response;
        if (response.data.status == 201) {
            self.$message({
                message: '注册成功',
                type: 'success'
            });
            self.account = '';
            self.pwd = '';
            self.pwd_rep = '';
            self.$router.push('/center');
        }
    }.bind(self)).catch(function (error) {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    alert('注册失败');
                    break;
                case 500:
                    alert('服务器错误');
                    break;
            }
        }
    });
}

export function getProjects(url, data, self){
    axios.get(url, data).then(response => {
        if (response.status == 200) {
        }
        else
          throw response;
        if (response.data.status == 200) {
          self.projects = response.data.result;
          self.totolCount = response.data.result.length;
          self.loadData(self.currentPage, self.pageSize, self.totolCount);
        }
      }).catch(function (error) {
        swal("Error", "服务器错误", "error");
      });
}

export function getToken(self){
    var data= {
        "tokenid": self.$store.state.user.tokenid,
        "username": self.$store.state.user.username
    }
    return data
}
export function getSession(){
    return sessionStorage.tokenid
}

export function getQuery(self){
    return self.$route.query.id
}

export function getQueryAll(self){
    return {
        "name": self.$route.query.name,
        "email": self.$route.query.email,
        "mobile": self.$route.query.mobile
    }
}

export function participate(url, id, self) {
    axios.post(url + id.toString() + '/enroll', {}).then(response => {
      if (response.data.status == 200) {
      }
      else
        throw response;
      if (response.data.status == 200) {
        self.$message({
          message: '报名成功',
          type: 'success'
        });
        self.getProject();
        self.isEnroll = true;
      }
    }).catch(function (error) {
      if (error) {
        switch (error.data.status) {
          case "400":
            swal("失败", "报名失败：不能报名自己建立的需求", "error");
            break;
          case "401":
            swal("失败", "报名失败：你已在该项目中", "error");
            break;
          case "404":
            swal("失败", "报名失败：目标项目不存在", "error");
            break;
        }
        if (error.status == 500) {
          swal("Error", "服务器错误", "error");
        }
      }
    });
}

export function getProject(url, projectId, self) {
    axios.get(url + projectId.toString(), {}).then(response => {
        if (response.data.status == 200) {} else
            throw response;
        if (response.data.status == 200) {
            self.setValue(response)
        }
    }).catch(function (error) {
        if (error) {
            switch (error.status) {
                case "400":
                    swal("Error", "获取需求内容失败", "error");
                    break;
                case "401":
                    swal("Error", "查询权限不足", "error");
                    break;
                case "404":
                    swal("Error", "目标需求不存在", "error");
            }
            if (error.status == 500) {
                swal("Error", "服务器错误", "error");
            }
        }
    });
}

export function getExperience(url, username, self) {
    axios(
      {
        url: url,
        method: 'GET',
        params: {
          username: username
        },
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
      }
    ).then(response => {
      if (response.data.status == 200) {
      }
      else
        throw response;
      if (response.data.status == "200") {
        self.items = response.data.result.projectExperiences;
        self.totolCount = response.data.result.projectExperiences.length;
        self.loadData(self.currentPage, self.pageSize, self.totolCount);
      }
    }).catch(function (error) {
        if (error.data.status == "400") {
          swal("Error", "此用户不存在！", "error");
        }
        else if (error.status == 500) {
          swal("Error", "服务器错误！", "error");
        }
      }
    );
  }