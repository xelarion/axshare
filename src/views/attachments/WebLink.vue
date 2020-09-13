<template>
  <div>
    <a v-if="releaseStatus === 'successful'" target="_blank" :href="webLink" class="axure-link">
      最新地址
    </a>
    <span v-else-if="releaseStatus === 'pending'" title="请稍后刷新页面查看" class="pending">正在构建...</span>
    <span v-else-if="releaseStatus === 'failed'" class="failed">构建失败</span>
  </div>
</template>

<script>

export default {
  name: 'WebLink',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    webLink: String,
    // eslint-disable-next-line vue/require-default-prop
    releaseStatus: String
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
