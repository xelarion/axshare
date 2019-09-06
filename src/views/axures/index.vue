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
      <el-table-column label="原型历史" width="110" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="loadAttachments(scope.row.id)">
            历史
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="最新原型地址" width="110" align="center">
        <template slot-scope="scope">
          <a target="_blank" :href="scope.row.web_link" class="axure-link">
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

// todo 哪种好
const Attachment = Vue.component('attachment', function(resolve) {
  require(['@/views/attachments/index'], resolve)
})

export default {
  components: {
    Attachment,
    CopyLink
  },
  props: {
    axureGroupId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      attachmentModal: {
        load: false,
        reloadKey: +new Date(),
        axureGroupId: this.axureGroupId,
        axureId: 0
      },
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    loadAttachments(axureId) {
      this.attachmentModal.reloadKey = +new Date()
      this.attachmentModal.axureId = axureId
      this.attachmentModal.load = true
    },
    fetchData() {
      this.listLoading = true
      getList(this.axureGroupId).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped>
  .axure-link {
    color: #20a0ff;
  }
</style>
