<template>
  <div class="home-container">
    <AxureGroup />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AxureGroup from '../axure_groups/index'

export default {
  name: 'Dashboard',
  components: {
    AxureGroup
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
