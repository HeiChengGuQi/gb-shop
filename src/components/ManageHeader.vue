<script setup>

</script>

<template>
  <div id="manage-header">
    <div>
      <router-link to="/manage">商品管理</router-link>
    </div>
    <div>
      <router-link to="/manageAdd">商品添加</router-link>
    </div>
  </div>
</template>

<style scoped>
#manage-header {
  width: 100%;
  height: 50px;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }
}
</style>