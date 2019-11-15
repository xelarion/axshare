<template>
  <div>
    <el-input v-model="inputData" readonly placeholder="Please input" class="input-data el-input--mini" />
    <el-button
      v-clipboard:copy="inputData"
      v-clipboard:success="clipboardSuccess"
      class="el-button el-button--primary el-button--mini"
      type="primary"
      icon="document"
    >
      copy
    </el-button>
  </div>
</template>

<script>
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive

export default {
  name: 'Clipboard',
  directives: {
    clipboard
  },
  props: {
    inputData: {
      type: String,
      required: true
    }
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-data {
    width: 200px;
    .el-input__inner {
      height: 36px;
    }
  }
</style>
