<script setup>

import Header from "../../components/Header.vue";

const tableData = [
  {
    id:'gb10001',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id:'gb10002',
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id:'gb10003',
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id:'gb10004',
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }, {
    id:'gb10005',
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <div id="order-page">
    <Header/>
    <div class="order-main">
      <div>
        <h1>订单管理</h1>
        <div class="order-table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="订单编号" width="180" />
            <el-table-column prop="date" label="下单时间" width="180" />
            <el-table-column prop="name" label="下单人" width="180" />
            <el-table-column prop="address" label="下单地址" />
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
        <div class="pagination">
          <el-pagination
              background
              layout="prev, pager, next,total"
              :total="500"

          />
        </div>
      </div>

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
.order-table {
  width: 1200px;

}
</style>