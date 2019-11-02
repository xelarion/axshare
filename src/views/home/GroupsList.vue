<template>
  <div class="grid-content bg-purple">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>原型组织</span>
        <router-link style="float: right" type="text" to="/axure_groups">查看更多</router-link>
      </div>
      <router-link
        v-for="group in list"
        :key="group.id"
        :to="{name: 'axures', params: { axure_group_id: group.id }}"
      >
        <div class="text item">
          {{ group.name }}
        </div>
      </router-link>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/axure_group'

export default {
  name: 'GroupsList',
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getList().then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    margin: 30px;
    .text {
      font-size: 14px;
    }
    .item {
      padding: 10px;
      margin-bottom: 3px;
    }
    .item:hover {
      color: #0681e6;
      text-decoration: underline;
    }
    .box-card {
      font-size: 14px;
    }
  }
</style>
