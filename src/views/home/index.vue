<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <activity />
      </el-col>
      <el-col :span="8">
        <groups-list />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GroupsList from './GroupsList'
import Activity from './Activity'

export default {
  name: 'Dashboard',
  components: {
    GroupsList,
    Activity
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
