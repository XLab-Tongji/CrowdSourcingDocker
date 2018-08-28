<!-- 注册 -->
<template>
  <div class="register_section">
  <HeadBarLight2></HeadBarLight2>

  <div class="register_content">
    <p>
      注册
    </p>
    <el-input  placeholder="请输入用户名" v-model="account"></el-input>
    <el-input  placeholder="请输入密码" type="password" v-model="pwd"></el-input>
    <el-input  placeholder="请再次输入密码" type="password" v-model="pwd_rep"></el-input>
    <el-input  placeholder="请输入邮箱" type="email" v-model="email"></el-input>
    <el-checkbox style="margin-left: 5px; padding-top: 5px; float: left" v-model="checked">我已同意相关协议</el-checkbox>
  <el-button class="login_button" type="primary" @click="regist">提交</el-button>
  </div>
</div>

</template>

<script>
import HeadBarLight2 from "../components/head/HeadBarLight2.vue";
import server from '../../config/index';
import {register} from '../axios/api'
import swal from 'sweetalert'

export default {
  name: "Register",
  components: {HeadBarLight2},
  data(){
    return{
      account:'',
      pwd:'',
      pwd_rep:'',
      email:'',
      error:'',
      checked: false,
      url: server.url + '/api/register',
    }
  },
  methods:{
    regist:function () {
      var emailRE = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      var filterRule= /[^0-9a-zA-Z_]/g; 

      if(this.pwd != this.pwd_rep){
        swal("Warning", "请确认两次输入的密码相同!", "warning");
        this.pwd_rep= '';
        this.pwd= '';
      }
      else if(this.account == ""){
        swal("Warning", "请输入用户名!", "warning");
      }
      else if(this.pwd == ""){
        swal("Warning", "请输入密码!", "warning");
      }
      else if(this.checked == false){
        swal("Warning", "请阅读相关协议并勾选同意以继续!", "warning");
      }
      else if(this.email == ""){
        swal("Warning", "请输入邮箱！", "warning");
      }
      else if(emailRE.test(this.email) == false){
        swal("Warning", "请输入正确的邮箱格式！", "warning");
      }
      else if(this.account.length < 3){
        swal("Warning", "用户名少于三个字符！", "warning");
      }
      else if(this.account.length > 15){
        swal("Warning", "用户名多于十五个字符！", "warning");
      }
      else if(filterRule.test(this.account) == false){
        swal("Warning", "用户名包含非法字符！", "warning");
      }
      else{
        register(this.url, {"username": this.account, "email": this.email, "password": this.pwd}, this)
      }
    }
  }
};
</script>

<style>
.register_content {
  text-align: center;
  margin-top: 200px;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}

.register_content > .el-input {
  margin: 5px;
}

.register_content > .el-button {
  margin: 8px 5px;
}

.header {
  position: fixed;
  top: 0px;
  width: 100%;
  color: #323a45;
}

.no_account{
  float: right;
  cursor: pointer;
  font-size: 12px;
}
</style>

