<template>
  <div class="app-container">
    <el-row class="operations-btn">
      <router-link :to="{name: 'new-axure'}">
        <el-button type="primary" size="small">上传原型</el-button>
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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="主题描述">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="原型历史" width="110" align="center">
        <template slot-scope="scope">
          <a @click="loadAttachments(scope.row.id)">历史</a>
        </template>
      </el-table-column>
      <el-table-column label="最新原型地址" width="110" align="center">
        <template slot-scope="scope">
          <a v-if="scope.row.is_released" target="_blank" :href="scope.row.web_link" class="axure-link">
            最新地址
          </a>
          <span v-else title="请稍后刷新页面查看">正在构建...</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="永久地址" width="300" align="center">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            width="200"
            :open-delay="200"
            trigger="hover"
            content="访问该地址可以跳转到最新的原型地址，可用于分享。"
          >
            <copy-link slot="reference" :input-data="scope.row.permanent_link" />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="更新时间" width="150">
        <template slot-scope="scope">
          <moment-locale :time="scope.row.updated_at" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template v-slot="scope">
          <router-link :to="{name: 'edit-axure', params: { id: scope.row.id }}">
            <i class="el-icon-upload" />更新原型
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

    <attachment
      v-if="attachmentModal.load"
      :reload-key="attachmentModal.reloadKey"
      :axure-group-id="attachmentModal.axureGroupId"
      :axure-id="attachmentModal.axureId"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { getList } from '@/api/axure'
// import Attachment from '@/views/attachments/index'
import CopyLink from './CopyLink'
import Pagination from '@/components/Pagination'
import MomentLocale from '@/components/MomentLocale'

// todo 哪种好
const Attachment = Vue.component('attachment', function(resolve) {
  require(['@/views/attachments/index'], resolve)
})

export default {
  components: {
    Attachment,
    CopyLink,
    Pagination,
    MomentLocale
  },
  data() {
    return {
      attachmentModal: {
        load: false,
        reloadKey: 0,
        axureGroupId: 0,
        axureId: 0
      },
      list: null,
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
  computed: {
    axureGroupId() {
      return parseInt(this.$route.params.axure_group_id)
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    loadAttachments(axureId) {
      this.attachmentModal.reloadKey = +new Date()
      this.attachmentModal.axureGroupId = this.axureGroupId
      this.attachmentModal.axureId = axureId
      this.attachmentModal.load = true
    },
    fetchData() {
      this.listLoading = true
      getList(this.axureGroupId, this.query).then(response => {
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
