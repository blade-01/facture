<template>
  <v-btn
    text
    class="primary text-capitalize back-btn text--text mt-4"
    @click="goHome"
  >
    <v-icon class="btn--text">mdi-chevron-left</v-icon>
    Go back
  </v-btn>
</template>

<script>
export default {
  name: "Back",
  methods: {
    goHome() {
      this.$router.go(-1);
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.back-btn {
  margin: 0 0 0.6rem 0 !important;
  padding: 0 !important;
  font-weight: bolder;
  text-transform: unset !important;
}
</style>
