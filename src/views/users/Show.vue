<template>
  <div>wait...</div>
</template>

<script>
import { getAxureWeb } from '@/api/axure'

export default {

  name: 'Show',
  computed: {
    axureId() {
      return parseInt(this.$route.params.id)
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAxureWeb(this.axureId, this.$route.query).then(response => {
        location.href = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
