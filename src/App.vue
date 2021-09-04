<template>
  <v-app>
    <v-main class="primary text--text">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import data from "@/json/data.json";
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['setInvoice']),
  },
  mounted() {
    if (localStorage.getItem("invoices")) {
      this.setInvoice(JSON.parse(localStorage.getItem("invoices")));
    } else {
      this.setInvoice(data);
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;400&display=swap');
.v-application {
  font-family: 'Spartan', sans-serif !important;
  font-size: 12px !important;
  line-height: 1.3 !important;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
body {
  &::-webkit-scrollbar {
    width: 8px;
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
.status {
  width: 120px;
  font-weight: bold;
  &.paid {
    color: #33d69f !important;
    background-color: hsla(160, 67%, 52%, 0.06);
  }
  &.pending {
    color: #ff8f00 !important;
    background-color: rgba(255, 145, 0, 0.06);
  }
  &.draft {
    color: #424761 !important;
    background-color: hsla(231, 19%, 29%, 0.06);
  }
}
.dot {
  height: 6px;
  width: 6px;
  border-radius: 100%;
  &.paid {
    background-color: #33d69f;
  }
  &.pending {
    background-color: #ff8f00;
  }
  &.draft {
    background-color: #424761;
  }
}
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
  .auto-width {
    width: 700px !important;
    margin: auto;
    overflow: hidden;
  }
}
@media screen and (min-width: 1000px) {
  .auto-width {
    width: 750px !important;
  }
}
</style>