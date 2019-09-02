<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column label="附件历史" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.desc }}
          <axure-attachment />
        </template>
      </el-table-column>
      <el-table-column label="最新原型地址" width="110" align="center">
        <template slot-scope="scope">
          <a target="_blank" :href="scope.row.web_link" class="ax-axure-link">
            最新地址
          </a>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="永久地址" width="310" align="center">
        <template slot-scope="scope">
          <copy-link :input-data="scope.row.permanent_link" />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="更新时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.updated_at }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/axure'
import AxureAttachment from '@/views/attachments/index'
import CopyLink from './CopyLink'

export default {
  components: {
    AxureAttachment,
    CopyLink
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(1).then(response => {
        this.list = response.data.axures
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped>
  .ax-axure-link {
    color: #20a0ff;
  }
</style>
