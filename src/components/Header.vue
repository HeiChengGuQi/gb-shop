<script setup>
import {ref} from "vue";
let username=ref(sessionStorage.getItem("username"));


</script>

<template>
  <div id="page-header">
    <div class="header">

      <div class="header-main">
        <div class="header-flex">
          <div class="logo">
            <router-link to="/"><img src="../assets/logo.png" alt="UNK"/></router-link>
          </div>
          <div class="nav">
            <router-link to="/">首页</router-link>
            <router-link to="/manage">商品管理</router-link>
            <router-link to="/">分类管理</router-link>
            <router-link to="/">商品管理</router-link>
            <router-link to="/">用户订单</router-link>
            <router-link to="/">订单管理</router-link>
            <router-link to="/">系统设置</router-link>
          </div>
        </div>
          <div class="avatar"><img src="../assets/logo.png" alt="UNK"></div>
          <div class="name">{{username}}</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
#page-header {
  width: 100%;
  height: 90px;
}

.header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  z-index: 100;
  background-color: orange;

  .logo {
    width: 72px;
    height: 72px;
    text-align: left;
    img {
      width: 100%;
      overflow-clip-margin: content-box;
      overflow: clip;
    }
  }

}

.header-main {
  width: 1200px;
  height: 90px;
  line-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.nav{
  display: flex;
  align-items: center;
  a{
    width: auto;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff4d4f;
    margin-left: 80px;
    cursor: pointer;
  }

}
.header-flex{
  display: flex;
  align-items: center;
}
.avatar{
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-left: 20px;
  img{
    width: 100%;
  }

}
.name{
  font-size: 14px;
  font-weight: 400;
  color:  #ff4d4f;
  line-height: 24px;
  cursor: pointer;
}
</style>