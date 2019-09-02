<template>
  <div class="components-container">
    <el-button type="primary" @click="dialogTableVisible = true">
      历史
    </el-button>
    <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address" @dragDialog="handleDrag">
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import { getList } from '../../api/attachment'

export default {
  name: 'AxureAttachment',
  directives: { elDragDialog },
  data() {
    return {
      dialogTableVisible: false,
      value: '',
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }]
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
      getList().then(response => {
        this.list = response.data.axures
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
  .el-button {
    padding: 6px 12px;
  }
</style>
