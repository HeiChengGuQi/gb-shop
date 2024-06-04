<script setup>

import Header from "../../components/Header.vue";
</script>

<template>
  <div id="order-page">
    <Header/>
    <div class="order-main">

    </div>
  </div>
</template>

<style scoped>
#order-page {
  width: 100%;
  height: 100%;
}

.order-main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}
</style>