<script lang="ts" setup>
import Header from "../../components/Header.vue";
import ClassificationHeader from "../../components/ClassificationHeader.vue";
import {getGroupInfo} from "../../api/api";
import pinia from "../../store/pinia";
import {defineGroupInfo} from "../../store/groupInfo"
import {defineUser} from "../../store/userInfo";
import {onMounted, reactive} from "vue";

let sysUser = defineUser(pinia);
let group = defineGroupInfo()

async function showGroupCommodity() {
  group.commodityList = (await getGroupInfo(sysUser.uid)).data;
}

onMounted(() => {
  showGroupCommodity()
  console.log(group.commodityList);
})

</script>

<template>
  <div id="classification-page">
    <Header></Header>
    <div class="classification-main">
      <div>
        <ClassificationHeader/>
        <div class="classification-table">
          <div>
            <el-table
                :data=" group.commodityList"
                style="width: 100%; margin-bottom: 20px"
            >
              <el-table-column type="expand">
                <template #default="props">
                  <div>
                    <h3>商品目录</h3>
                    <el-table :data="props.row.commodityList" :border="false">
                      <el-table-column label="商品编号" prop="cid"/>
                      <el-table-column label="分组编号" prop="gid"/>
                      <el-table-column label="商品标题" prop="title"/>
                      <el-table-column label="商品图片" prop="">
                        <template #default="scope">
                          <img :src="scope.row.img" alt="UNK"/>
                        </template>
                      </el-table-column>
                      <el-table-column label="商品价格" prop="price"/>
                      <el-table-column label="商品库存" prop="number"/>
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
                </template>
              </el-table-column>
              <el-table-column prop="gid" label="分组编号" sortable/>
              <el-table-column prop="gname" label="分组名称" sortable/>
              <el-table-column prop="" label="图片">
                <template #default="scope">
                  <img :src="scope.row.icon" alt="UNK"/>
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

  img {
    width: 70px;
  }
}
</style>