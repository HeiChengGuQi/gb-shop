<script setup>

import Header from "../../components/Header.vue";

</script>

<template>
  <div id="home-page">
  <Header></Header>
   <div class="home-main">
     <div class="home-main-detail">
       <div class="title">
         <h1>欢迎来到首页</h1>
       </div>

     </div>
   </div>
  </div>
</template>

<style scoped>
#home-page{
  width: 100%;
  height: 100%;
}
.home-main{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}
.home-main-detail{
min-width: 200px;

}

</style>