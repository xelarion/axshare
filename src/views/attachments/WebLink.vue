<template>
  <div>
    <a
      v-if="releaseStatus === 'successful'"
      target="_blank"
      :href="webLink"
      class="axure-link"
    >
      最新地址
    </a>

    <el-tooltip v-else-if="releaseStatus === 'pending'" placement="top">
      <div slot="content">请稍后刷新页面查看</div>
      <span class="pending">正在构建...</span>
    </el-tooltip>

    <el-tooltip v-else-if="releaseStatus === 'cleaned'" placement="top">
      <div slot="content">html文件已被清理，可重新构建查看原型内容</div>
      <span class="cleaned">已被清理</span>
    </el-tooltip>

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
  .cleaned {
    color: #38bb35;
  }
</style>
