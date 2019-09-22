<template>
  <div class="components-container">
    <el-dialog
      v-el-drag-dialog
      width="70%"
      :visible.sync="visible"
      :title="'ID : ' + axureId + ' : ' + title"
    >
      <el-table :data="list">
        <el-table-column property="id" label="ID" width="70" />
        <el-table-column property="user.username" label="上传作者" width="150" />
        <el-table-column property="created_at" label="上传时间" width="150" />
        <el-table-column label="压缩包" width="120">
          <template slot-scope="scope">
            <a target="_blank" :href="scope.row.download_url" class="axure-link">
              下载
            </a>
          </template>
        </el-table-column>
        <el-table-column label="原型地址" width="120">
          <template slot-scope="scope">
            <a v-if="scope.row.is_released" target="_blank" :href="scope.row.web_link" class="axure-link">
              最新地址
            </a>
            <span v-else title="请稍后刷新页面查看">正在构建...</span>
          </template>
        </el-table-column>
        <el-table-column property="desc" label="备注" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import { getList } from '@/api/attachment'
import { getAxure } from '@/api/axure'

export default {
  name: 'Attachment',
  directives: { elDragDialog },
  props: {
    axureGroupId: {
      type: Number,
      required: true
    },
    axureId: {
      type: Number,
      required: true
    },
    reloadKey: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      title: '',
      list: null
    }
  },
  watch: {
    reloadKey: function() {
      // reloadKey 变化就重新获取数据
      this.fetchData()
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getAxure(this.axureGroupId, this.axureId).then(response => {
        this.title = response.data.name
      })
      getList(this.axureGroupId, this.axureId).then(response => {
        this.list = response.data
        this.listLoading = false
        this.visible = true
      })
    }
  }
}
</script>

