<template>
  <v-app-bar
  app
  color="navbar"
  dark
  flat
  class="px-2"
  >
  <router-link to="/">
    <v-btn icon class="btn pa-5">
      <v-img
        alt="fature Logo"
        contain
        src="../assets/img/logo.svg"
        transition="scale-transition"
        width="40"
      />
    </v-btn>
  </router-link>
  <v-spacer></v-spacer>
  <v-btn @click="switchTheme" icon>
    <v-icon v-if="$vuetify.theme.dark" class="icon">mdi-white-balance-sunny</v-icon>
    <v-icon v-else class="icon">mdi-moon-waxing-crescent</v-icon>
  </v-btn>
</v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  },
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.saveTheme()
    },
    saveTheme() {
      localStorage.setItem('theme', JSON.stringify(this.$vuetify.theme.dark))
    },
  },
  mounted() {
    this.$vuetify.theme.dark = JSON.parse(localStorage.getItem('theme') || JSON.stringify(this.$vuetify.theme.dark))
  }
}
</script>

<style scoped lang="scss">
.icon {
  color: #7e88c3 !important;
}
.navbar {
  background: #252945 !important;
}
</style>