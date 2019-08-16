<template>
  <div class="app-main-container">
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main-container {
  padding: 10px;
}
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 75px);
  width: 100%;
  position: relative;
  overflow: hidden;
  max-width: 1300px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 4px;

  @media screen and (min-width: 1500px) {
    max-width: 1500px;
  }
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
