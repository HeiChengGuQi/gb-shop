<script lang="ts" setup>
import Header from "../../components/Header.vue";
import ClassificationHeader from "../../components/ClassificationHeader.vue";


interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

/*const load = (
    row: User,
    treeNode: unknown,
    resolve: (date: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])
  }, 1000)
}*/

const tableData: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
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
                :data="tableData"
                style="width: 100%; margin-bottom: 20px"
                row-key="id"
                border
                default-expand-all
            >
              <el-table-column prop="date" label="Date" sortable />
              <el-table-column prop="name" label="Name" sortable />
              <el-table-column prop="address" label="Address" sortable />
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
}
</style>