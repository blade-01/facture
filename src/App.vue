<template>
  <v-app>
    <v-main class="primary text--text">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
body {
  font-size: 15px;
  line-height: 1.3;
  &::-webkit-scrollbar {
    width: 10px;
    background: #141625;
  }
  &::-webkit-scrollbar-thumb {
    background: #7c5dfa;
    border-radius: 50px;
  }
}
$light-bg: #f8f8fb;
$purple-500: #7c5dfa;
$purple-400: #9277ff;

$blue-gray: #888eb0;
$light-blue-gray: #dfe3fa;
$dark-blue-gray: #7e88c3;

$dark-500: #0c0e16;
$dark-400: #141625;
$dark-300: #1e2139;
$dark-200: #252945;

$warning: #ec5757;

.bg-purple {
  background: $purple-500;
}
a {
  text-decoration: none;
}
.d-mobile {
  display: block !important;
}
.d-desktop {
  display: none !important;
}
@media screen and (min-width: 700px) {
  .d-desktop {
    display: block !important;
  }
  .d-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 1000px) {
  .auto-width {
    width: 750px !important;
    margin: auto;
    overflow: hidden;
  }
}
</style>