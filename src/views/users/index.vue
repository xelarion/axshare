<template>
  <div class="app-container">
    <el-row class="operations-btn">
      <router-link :to="{name: 'new-user'}">
        <el-button type="primary" size="small">新建用户</el-button>
      </router-link>
    </el-row>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="用户昵称">
        <template slot-scope="scope">
          {{ scope.row.nickname }}
        </template>
      </el-table-column>
      <el-table-column label="登录名">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template v-slot="scope">
          <router-link :to="{name: 'edit-user', params: { id: scope.row.id }}">
            编辑
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="pagination.total_count>0"
      :total="pagination.total_count"
      :page.sync="query.page"
      :limit.sync="query.per_page"
      @pagination="fetchData"
    />
  </div>
</template>

<script>
import { getList } from '@/api/user'
// import Attachment from '@/views/attachments/index'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      query: {
        page: 1,
        per_page: 20
      },
      pagination: {
        current_page: 0,
        per_page: 0,
        total_count: 0,
        total_pages: 0
      },
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.query).then(response => {
        this.list = response.data
        this.pagination = response.paginate
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped>
  .operations-btn {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
  }
</style>
