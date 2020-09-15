<template>
  <div>
    <a v-if="releaseStatus === 'successful'" target="_blank" :href="webLink" class="axure-link">
      最新地址
    </a>
    <span v-else-if="releaseStatus === 'pending'" title="请稍后刷新页面查看" class="pending">正在构建...</span>
    <el-tooltip v-else-if="releaseStatus === 'failed'" placement="top">
      <div slot="content">{{ releaseError }}</div>
      <span class="failed">构建失败</span>
    </el-tooltip>
  </div>
</template>

<script>

export default {
  name: 'WebLink',
  props: {
    webLink: {
      type: String,
      require: true,
      default: ''
    },
    releaseStatus: {
      type: String,
      require: true,
      default: ''
    },
    releaseError: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .failed {
    color: red;
  }
  .pending {
    color: #d32cf1;
  }
</style>
