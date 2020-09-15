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
        <el-table-column property="user.nickname" label="上传作者" width="150" />
        <el-table-column prop="created_at" label="上传时间" width="150">
          <template slot-scope="scope">
            <moment-locale :key="scope.row.created_at" :time="scope.row.created_at" />
          </template>
        </el-table-column>
        <el-table-column label="压缩包" width="120">
          <template slot-scope="scope">
            <a target="_blank" :href="scope.row.download_url" class="axure-link">
              下载
            </a>
          </template>
        </el-table-column>
        <el-table-column label="原型地址" width="120">
          <template slot-scope="scope">
            <web-link
              :release-status="scope.row.release_status"
              :release-error="scope.row.release_error"
              :web-link="scope.row.web_link"
            />
          </template>
        </el-table-column>
        <el-table-column property="desc" label="备注" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import MomentLocale from '@/components/MomentLocale'
import WebLink from '@/views/attachments/WebLink'
import { getList } from '@/api/attachment'
import { getAxure } from '@/api/axure'

export default {
  name: 'Attachment',
  components: {
    WebLink,
    MomentLocale
  },
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

