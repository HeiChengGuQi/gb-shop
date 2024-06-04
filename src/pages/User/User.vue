<script setup>

import Header from "../../components/Header.vue";
</script>

<template>
  <div id="user-page">
    <Header/>
    <div class="user-main"></div>
  </div>
</template>

<style scoped>
#user-page {
  width: 100%;
  height: 100%;
}

.user-main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>