<script setup>

import Header from "../../components/Header.vue";
import ManageHeader from "../../components/ManageHeader.vue";
import {Plus} from "@element-plus/icons-vue";
import {defineUser} from "../../store/userInfo.js";
import pinia from "../../store/pinia.js";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";

let action=`http://localhost:8080/`;
const imageUrl = ref();
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

let userPwd=reactive(
    {
      password:"",
      newPassword:""
    }
)

function onsubmit(){
  if (userPwd.newPassword !== userPwd.password) {
    alert("用户密码与确认密码不相同");
    return false;
  }

  sysUser.avatar=imageUrl.value;
}
</script>

<template>
<div id="manageAdd-page">
  <Header/>
  <div class="manage-main">
    <div>
      <ManageHeader/>
      <div class="manage-form">
        <el-form :model="sysUser" label-width="auto" style="max-width: 600px">
          <el-form-item label="商品图片">
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
            <el-button type="primary" @click="onsubmit">设置</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>


  </div>
</div>
</template>

<style scoped>
#manageAdd-page {
  width: 100%;
  height: 100%;
}
.manage-main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}

.manage-form{
  width: 1200px;
}
</style>