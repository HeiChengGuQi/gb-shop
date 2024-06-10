<script setup>
import {defineUser} from "../../store/userInfo.js";
import {ref, reactive} from 'vue'
import {useRouter} from "vue-router";
import {getLogin} from "../../api/api.js";

let sysUser = defineUser();
const router = useRouter();
let loginUser = reactive({
  username: "",
  password: ""
})

async function login() {
  let {data} = await getLogin(loginUser)
  if (data.uid != null) {
    sysUser.initUser(data)

    await router.push("/")
  }
}
</script>
<template>
  <div class="login-container">
    <el-form
        label-width="80px"
        class="login-form"
    >
      <div class="logo"><img src="../../assets/logo.png" alt="UNK"/></div>
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input
            v-model="loginUser.username"
            ref="username"
            name="username"
            autocomplete="off"
            placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
            v-model="loginUser.password"
            type="password"
            name="password"
            autocomplete="off"
            placeholder="请输入密码"
            show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="button">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../../assets/jb.jpg") no-repeat center center fixed;
  background-size: cover;
}

.login-form {
  width: 400px;
  text-align: center;
}

.logo {
  width: 94px;
  height: 94px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}

.button {
  width: 800px;
  height: 40px;
}
</style>