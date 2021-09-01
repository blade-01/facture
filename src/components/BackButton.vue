<template>
  <v-btn text class="primary text-capitalize back-btn text--text" @click="goHome">
    <v-icon class="btn--text">mdi-chevron-left</v-icon>
    Go Home
  </v-btn>
</template>

<script>
export default {
  name: 'Back',
  methods: {
    goHome() {
      this.$router.push({name: 'Invoice'})
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.back-btn {
  margin: 0 0 0.6rem 0 !important;
  padding: 0 !important;
}
</style>