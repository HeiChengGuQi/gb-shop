<script setup >

import Header from "../../components/Header.vue";
const tableData = [
  {
    id:'1',
    img:'http://localhost:8080/static/img/comm/SQ00111.PNG',
    title: '西瓜',
    price:22,
    number:66
  },
  {
    id:'2',
    img:'http://localhost:8080/static/img/comm/SQ00112.PNG',
    title: '甜瓜',
    price:48,
    number:99
  },
  {
    id:'3',
    img:'http://localhost:8080/static/img/comm/SQ00113.PNG',
    title: '哈密瓜',
    price:23,
    number:35
  },
  {
    id:'4',
    img:'http://localhost:8080/static/img/comm/SQ00114.PNG',
    title: '木瓜',
    price:16,
    number:48
  },
  {
    id:'5',
    img:'http://localhost:8080/static/img/comm/SQ00115.PNG',
    title: '羊角蜜',
    price:35,
    number:19
  },
]
</script>

<template>
  <div id="manage-page">
    <Header></Header>
    <div class="manage-main">
      <div>
        <div><h1>商品管理</h1></div>
        <div class="manage-table">
          <el-table :data="tableData">
            <el-table-column prop="id" label="序号" />
            <el-table-column prop="title" label="名称" />
            <el-table-column prop="" label="图片">
              <template #default="scope">
<!--                <el-image style="width:70px" src="../../assets/comm/SQ00111.PNG"></el-image>-->
                <img :src="scope.row.img" style="width: 70px"/>
              </template>

            </el-table-column>
            <el-table-column prop="price" label="价格" />
            <el-table-column prop="number" label="数量"/>
            <el-table-column label="编辑">
              <template #default="scope">
                <el-button size="small">
                  编辑
                </el-button>
                <el-button
                    size="small"
                    type="danger"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#manage-page{
  width: 100%;
  height: 100%;
}
.manage-main{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url("../../assets/org.jpg") no-repeat center center fixed;
  background-size: cover;
}
.manage-table{
  width: 1200px;

}
</style>