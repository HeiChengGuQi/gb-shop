<script setup>
import Header from "../../components/Header.vue";
import ClassifcationHeader from "../../components/ClassifcationHeader.vue";
</script>

<template>
  <div id="classification-page">
    <Header></Header>
    <div class="classification-main">
      <div class="classification-table">
        <ClassifcationHeader/>
      </div>

    </div>
  </div>

</template>

<style scoped>
#classification-page {
  width: 100%;
  height: 100%;
}

.classification-main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}
.classification-table {
  width: 1200px;
}
</style>