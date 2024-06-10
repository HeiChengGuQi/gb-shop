<script setup>

import Header from "../../components/Header.vue";
import ManageHeader from "../../components/ManageHeader.vue";
import {reactive, ref,onMounted} from "vue";
import {ElMessage} from "element-plus";
import {Plus} from "@element-plus/icons-vue";
import {defineUser} from "../../store/userInfo.js";
import pinia from "../../store/pinia.js";
import {getGroupAll, saveCommodityInfo} from "../../api/api.js";
import {useRouter} from 'vue-router'

const router = useRouter();
let sysUser=defineUser(pinia)
let commodity=reactive({
  uid:sysUser.uid,
  gid:"",
  title:"",
  img:"",
  price:"",
  number:""
})


let action=`http://localhost:8080/commodity/img`;
const imageUrl = ref('');
const upload = ref(null);

const handleAvatarSuccess = (response, file) => {
  // 假设服务器返回的 URL 是响应的主体
  console.log(response);
  imageUrl.value =response;
  commodity.img=response;
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
let groups=ref("");
async function showGroupAll(){
  console.log((await getGroupAll()).data)
  groups.value=(await getGroupAll()).data;
}
onMounted(() => {
  showGroupAll()
})
async function onSubmit(){
  await saveCommodityInfo(commodity);
  await router.push("/manage")
}
</script>

<template>
<div id="manageAdd-page">
  <Header/>
  <div class="manage-main">
    <div>
      <ManageHeader/>

      <div class="manage-form">
        <el-form :model="commodity" label-width="auto" style="max-width: 600px">
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
          <el-form-item label="商品标题">
            <el-input v-model="commodity.title"/>
          </el-form-item>
          <el-form-item label="商品分组">
              <el-select v-model="commodity.gid" placeholder="请选择您的商品分组">
                <el-option v-for="item in groups" :label="item.gname" :value="item.gid">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model.number="commodity.price"/>
          </el-form-item>
          <el-form-item label="商品库存">
            <el-input v-model.number="commodity.number"/>
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
.manage-form{
  width: 1200px;
}
</style>