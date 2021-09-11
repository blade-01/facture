<template>
  <v-app-bar
  app
  color="navbar"
  dark
  flat
  >
  <router-link to="/">
    <div class="logo-wrapper">
      <img
        alt="fature_logo"
        src="@/assets/img/logo-desktop.svg"
      />
    </div>
  </router-link>
  <v-spacer></v-spacer>
  <div class="pr-3 pt-4 d-flex justify-space-between align-center">
    <v-btn @click="switchTheme" icon>
      <v-icon v-if="$vuetify.theme.dark" class="icon">mdi-white-balance-sunny</v-icon>
      <v-icon v-else class="icon">mdi-moon-waxing-crescent</v-icon>
    </v-btn>
    <img
      class="avatar ml-4"
      alt="avatar"
      src="@/assets/img/image-avatar.jpg"
      width="40"
    />
  </div>
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
.logo-wrapper {
  background: radial-gradient(circle at bottom center, #7c5dfa, #270561 90px) !important;
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  height: 72px;
  width: 72px;
  border-radius: 0 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30px !important;
  }
}
.icon {
  color: #7e88c3 !important;
}
.navbar {
  background: #252945 !important;
}
.v-app-bar {
  height: 72px !important;
  // padding: 0.6rem !important;
  .v-toolbar__content {
    padding: 0 !important;
    height: 100% !important;
  }
}
.v-btn {
  border-right: dashed 2px #7e88c3;
}
.avatar {
  border-radius: 50%;
  width: 30px;
}
</style>