<!-- 个人中心 -->
<template>
    <div id="" class="person_center">
      <HeadBarLight style="z-index: 10;"></HeadBarLight>
      <div class="main_content">
        <div class="main_theme">
            <el-breadcrumb separator="/" class="breadcrumb_size">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/center' }">个人中心</el-breadcrumb-item>
            </el-breadcrumb>
              <div class="user_menu">
                  <el-menu class="side_bar" mode="vertical" default-active="1" style="margin-left:20px">
                    <div v-if="!isAdmin">
                    <el-menu-item-group  title="账户信息">

                      <el-menu-item class="menu1" index="1" @click="changeView1" ><i class="el-icon-information"></i>账户信息</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="开发者信息">
                      <el-menu-item class="menu2" index="2" @click="changeView2"><i class="el-icon-star-on"></i>项目经历</el-menu-item>
                      <el-menu-item class="menu3" index="3" @click="changeView3"><i class="el-icon-circle-check"></i>参与项目</el-menu-item>
                      <el-menu-item class="menu4" index="4" @click="changeView4"><i class="el-icon-message"></i>我的需求</el-menu-item>
                    </el-menu-item-group>
                    </div>
                    <el-menu-item class="menu5" index="5" @click="changeView5" v-else><i class="el-icon-message"></i>管理员</el-menu-item>
                  </el-menu>
              </div>
            <div class="detail"><MyAccount v-bind:is="currentView"></MyAccount></div>
        </div>
        <div style="height: 50px;"></div>
      </div>

      <!-- footer -->
      <div class="footer">
          同济大学 XLab
      </div>
    </div>
</template>

<script>
import HeadBarLight from "../components/head/HeadBarLight.vue"
import HeadBarLight2 from "../components/head/HeadBarLight2.vue"
import MyAccount from "../components/personalcenter/MyAccount.vue"
import MyExperience from "../components/personalcenter/MyExperience.vue"
import MyParticipate from "../components/personalcenter/MyParticipate.vue"
import MyNeeds from "../components/personalcenter/MyNeeds.vue"
import AdminCenter from "../views/admin/AdminCenter.vue"
import {getToken} from "../axios/api"

export default {
  name: "Center",
  components: {
    HeadBarLight,
    HeadBarLight2,
    MyAccount,
    MyExperience,
    MyParticipate,
    MyNeeds,
    AdminCenter
  },
  data() {
    return {
      isCollapse: true,
      MyAccount:"MyAccount",
      MyExperience:"MyExperience",
      currentView:"MyAccount",
      name: '',
      isAdmin: '',
    };
  },
  created() {
     this.isAdmin = getToken(this).username === 'admin';
  },
  methods: {
    changeView1:function() {
      this.currentView = MyAccount;
      this.name = "MyAccount"
    },
    changeView2:function () {
      this.currentView = MyExperience;
      this.name = "MyExperience"
    },
    changeView3:function () {
      this.currentView = MyParticipate;
      this.name = "MyParticipate"
    },
    changeView4:function () {
      this.currentView = MyNeeds;
      this.name = "MyNeeds"
    },
    changeView5: function() {
      this.currentView = AdminCenter;
      this.name = "AdminCenter"
    }

  }
};

</script>


<style>
  .person_center{
    min-height:100%;
    position:relative;
    overflow: hidden;
  }
  .main_content {
     padding-top:80px;
     min-height: 900px;
     margin-left: auto;
     margin-right: auto;
     background:#EFF2F7;
  }
  .main_theme{
    max-width: 50%;
    min-width: 1000px;
    margin: 0 auto;
  }
  .breadcrumb_size{
    padding:35px 0px 20px 0px;
  }

  .user_menu{
    width:220px;
    float:left;
  }

  .side_bar{
    border-color:#000000;
    border:2px;
    background:#D3DCE6;
    margin-left: 30px;
    padding-top: 20px;
  }
  .detail {
    margin-left:230px;
    min-height: 800px;
    box-shadow: 0 1px 2px rgba(183,195,192,.95);
    font-size: 14px;
    background-color:  #FFFFFF;
    overflow: hidden;
  }

  .footer {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 40px;
    color: #8a8a8a;
  }
</style>
