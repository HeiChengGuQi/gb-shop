<script setup>
import {reactive} from "vue";
import {ref} from 'vue'
import {defineUser} from "../../store/userInfo.js";
import pinia from "../../store/pinia.js";
import {Plus} from "@element-plus/icons-vue";

import {ElMessage} from 'element-plus';


let sysUser=defineUser(pinia)
let action=`http://localhost:8080/user/avatar/${sysUser.uid}`;
const imageUrl = ref(sysUser.avatar);
const upload = ref(null);

const handleAvatarSuccess = (response, file) => {
  // 假设服务器返回的 URL 是响应的主体
  imageUrl.value =response;
};

const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG) {
    ElMessage.error('上传头像图片只能是 JPG 或 PNG 格式!');
  }
  if (!isLt2M) {
    ElMessage.error('上传头像图片大小不能超过 2MB!');
  }
  return isJPG && isLt2M;
};

const uploadAvatar = () => {
  if (upload.value) {
    upload.value.submit();
  }
};
let userPwd=reactive(
    {
      password:"",
      newPassword:""
    }
)

function onSubmit(){
  if (userPwd.newPassword !== userPwd.password) {
    alert("用户密码与确认密码不相同");
    return false;
  }

  sysUser.avatar=imageUrl.value;
}
</script>

<template>
  <div id="system-page">
    <Header></Header>
    <div class="system-main">
      <div>
        <h1>系统设置</h1>
        <div class="system-form">
          <el-form :model="sysUser" label-width="auto" style="max-width: 600px">
            <el-form-item label="用户头像">
              <el-upload
                  ref="upload"
                  class="avatar-uploader"
                  :action="action"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item label="用户账户">
              <el-input v-model="sysUser.username" />
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input
                  type="password"
                  v-model="userPwd.password"
                  show-password
              />
            </el-form-item>

            <el-form-item label="确认密码">
              <el-input
                  type="password"
                  v-model="userPwd.newPassword" />
            </el-form-item>
            <el-form-item label="用户昵称">
              <el-input v-model="sysUser.nickName" />
            </el-form-item>
            <el-form-item label="用户等级">
              <el-select v-model="sysUser.level" placeholder="请选择您的用户级别">
                <el-option label="管理员" value="1"/>
                <el-option label="普通用户" value="0"/>
              </el-select>
            </el-form-item>
            <el-form-item label="是否启用">
              <el-switch v-model="sysUser.start"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">设置</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
#system-page {
  width: 100%;
  height: 100%;
}

.system-main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}

.avatar-uploader {
  display: inline-block;
  width: 100px;
  height: 100px;
}

.avatar {
  width: 100%;
  height: 100%;
  display: block;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  line-height: 100px;
  text-align: center;
}
.system-form{
  width: 600px;

}
</style>