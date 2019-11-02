<template>
  <div>
    <el-tooltip
      :content="time"
      placement="top"
      :open-delay="300"
    >
      <span>{{ localTime }}</span>
    </el-tooltip>
  </div>
</template>

<script>

export default {
  name: 'MomentLocale',
  props: {
    time: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      localTime: null
    }
  },
  created() {
    this.timeToLocale()
  },
  methods: {
    timeToLocale() {
      this.localTime = this.$moment(this.time).fromNow()
    }
  }
}
</script>

