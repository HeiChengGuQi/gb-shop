<script setup>

import Header from "../../components/Header.vue";
import {reactive,onMounted} from 'vue'
import {getUsers} from "../../api/api.js";

let userInfo=reactive(
    {
      users:[]
    }
)
async function showUserList(){
  userInfo.users=(await getUsers()).data
}
onMounted(() => {
  showUserList()
})
const state = reactive({
  page: 1,
  limit: 5,
  total: userInfo.users.length,
  pageSize: 5,
});
const tableData = () => {
  return userInfo.users.filter(
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
function deleteUser(uid){
  if (uid!==1){

  }else{
    alert("您无法删除超级管理员")
    return false;
  }
}
</script>

<template>
  <div id="user-page">
    <Header/>
    <div class="user-main">
      <div>
        <h1>用户管理</h1>
        <div class="user-table">
          <el-table :data="tableData()">
            <el-table-column prop="uid" label="用户编号"/>
            <el-table-column prop="username" label="用户名"/>

            <el-table-column prop="nickName" label="用户昵称"/>
            <el-table-column prop="" label="头像">
              <template #default="scope">
                <img :src="scope.row.avatar" alt="UNK"/>
              </template>
            </el-table-column>
            <el-table-column label="编辑">
              <template #default="scope">
                <el-button size="small">
                  编辑
                </el-button>
                <el-button
                    size="small"
                    type="danger"
                    @click="deleteUser(scope.row.uid)"
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
.user-table{
  width: 1200px;
  img{
    width: 70px;
  }
}
</style>