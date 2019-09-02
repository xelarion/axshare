<template>
  <div class="groups">
    <div class="groups-list">
      <router-link
        v-for="group in axure_groups"
        :key="group.id"
        :to="'/axure_groups/' + group.id + '/axures'"
        class="column"
      >
        <div class="card-box">
          <p class="title">{{ group.name }}</p>
          <p class="desc">{{ group.desc }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/axure_group'

export default {
  data() {
    return {
      axure_groups: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.axure_groups = response.data.axure_groups
        this.listLoading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column {
    padding: 10px;
    float: left;
    width: 25%;
    height: 180px;
  }
  @media screen and (max-width: 1300px) {
    .column {
      width: 50%;
    }
  }
  @media screen and (max-width: 800px) {
    .column {
      width: 100%;
    }
  }
  @media screen and (min-width: 1500px) {
    .column {
      width: 20%;
    }
  }
  .card-box {
    padding: 0 10px 0 15px;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    border: #c2c2c2 solid 1px;
    border-radius: 4px;
    position: relative;
    color: #6788a2;
    -webkit-transition: .3s;
    transition: .3s;
  }
  .card-box:hover {
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
    border-color: #409EFF;
    box-shadow: 0 5px 20px 0 rgba(183,198,212,0.5);
  }
  .card-box .title {
    color: #363636;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.125;
  }
  .card-box .desc {
    color: #6788a2;
  }
</style>
