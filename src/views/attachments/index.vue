<template>
  <div class="components-container">
    <el-dialog
      v-el-drag-dialog
      width="70%"
      :visible.sync="dialogTableVisible"
      :title="'ID:' + axureId + ':ff'"
      @dragDialog="handleDrag"
    >

      <el-table :data="list">
        <el-table-column property="id" label="ID" width="150" />
        <el-table-column property="user.username" label="上传作者" width="150" />
        <el-table-column property="created_at" label="上传时间" width="150" />
        <el-table-column property="desc" label="备注" width="150" />
        <el-table-column property="download_url" label="压缩包链接" width="200" />
        <el-table-column property="web_link" label="原型地址" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import { getList } from '@/api/attachment'

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
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      value: '',
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // v-el-drag-dialog onDrag callback function
    handleDrag() {
      this.$refs.select.blur()
    },
    fetchData() {
      this.listLoading = true
      getList(this.axureGroupId, this.axureId).then(response => {
        this.list = response.data
        this.listLoading = false
        this.dialogTableVisible = true
      })
    }
  }
}
</script>

