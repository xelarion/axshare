<template>
  <div class="app-container">
    <el-row class="operations-btn">
      <router-link :to="{name: 'new-user'}">
        <el-button type="primary" size="small">新增用户</el-button>
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
      <el-table-column label="#" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>

      <el-table-column label="登录账号">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>

      <el-table-column label="用户昵称">
        <template slot-scope="scope">
          {{ scope.row.nickname }}
        </template>
      </el-table-column>

      <el-table-column label="邮箱">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>

      <el-table-column label="状态" width="70">
        <template slot-scope="scope">
          <el-tooltip :content="'当前状态：' + scope.row.status" placement="top">
            <el-switch
              v-model="scope.row.status"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="normal"
              inactive-value="blocked"
            />
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column label="更新于">
        <template slot-scope="scope">
          {{ scope.row.updated_at }}
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="250">
        <template v-slot="scope">
          <router-link :to="{name: 'edit-user', params: { id: scope.row.id }}" class="el-link is-underline">
            <i class="el-icon-edit" /> 编辑
          </router-link>
          <router-link :to="{name: 'edit-user-password', params: { id: scope.row.id }}" class="el-link is-underline">
            <i class="el-icon-setting" /> 修改密码
          </router-link>
          <el-link icon="el-icon-delete" @click="resetPassword(scope.row.id, scope.row.nickname)">重置密码</el-link>
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
import { getList, resetUserPassword } from '@/api/user'
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
    },
    resetPassword(userId, nickname) {
      this.$confirm('确定重置 "' + nickname + '" 密码为 123456 吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        resetUserPassword(userId).then(response => {
          if (response.code === 0) {
            this.fetchData()
          }
        })
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
