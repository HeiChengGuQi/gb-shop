<script setup>

import Header from "../../components/Header.vue";
import ManageHeader from "../../components/ManageHeader.vue";
import {getCommodityList} from "../../api/api.js";
import {defineUser} from "../../store/userInfo.js";
import {defineCommodityInfo} from "../../store/commodityInfo.js";
import pinia from "../../store/pinia.js";
import {ref, reactive, onMounted} from "vue"

let sysUser = defineUser(pinia);
let commodityList = defineCommodityInfo();

async function showCommodity() {
  commodityList.commodityInfo = (await getCommodityList(sysUser.uid)).data;
}

onMounted(() => {
  showCommodity()
})

const state = reactive({
  page: 1,
  limit: 5,
  total: commodityList.commodityInfo.length,
  pageSize: 5,
});
const tableData = () => {
  return commodityList.commodityInfo.filter(
      (item, index) =>
          index < state.page * state.limit &&
          index >= state.limit * (state.page - 1)
  );
};

const handleCurrentChange = (e) => {
  state.page = e;
}
const handleSizeChange = (e) => {
  state.limit = e;
}
function update(cid){
}
</script>

<template>
  <div id="manage-page">
    <Header/>
    <div class="manage-main">
      <div>
        <ManageHeader/>
        <div class="manage-table">
          <el-table :data="tableData()">
            <el-table-column prop="cid" label="序号"/>
            <el-table-column prop="title" label="名称"/>
            <el-table-column prop="" label="图片">
              <template #default="scope">
                <img :src="scope.row.img" alt="UNK"/>
              </template>

            </el-table-column>
            <el-table-column prop="price" label="价格"/>
            <el-table-column prop="number" label="数量"/>
            <el-table-column label="编辑">
              <template #default="scope">
                <el-button
                    size="small"
                    @click="update(scope.row.cid)"
                >
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
              :total="state.total"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
              :current-page="state.page"
              :page-size="state.pageSize"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
#manage-page {
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

.manage-table {
  width: 1200px;

  img {
    width: 70px;
  }
}

</style>