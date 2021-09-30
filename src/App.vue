<template>
  <v-app>
    <v-main class="primary text--text">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import data from "@/json/data.json";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["setInvoice"]),
  },
  mounted() {
    if (localStorage.getItem("invoices")) {
      this.setInvoice(JSON.parse(localStorage.getItem("invoices")));
    } else {
      this.setInvoice(data);
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;400&display=swap");
.v-application {
  font-family: "Spartan", sans-serif !important;
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
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 30px #252945 inset;
  -webkit-text-fill-color: #ffffff;
  .theme--light & {
    -webkit-box-shadow: 0 0 0px 30px #ffffff inset;
    -webkit-text-fill-color: #252945;
  }
}
a {
  text-decoration: none;
}
.v-card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -100px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -60px !important;
}
.status {
  width: 100px;
  font-weight: bold;
  font-size: 12px !important;
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
    .theme--dark & {
      color: #dfe3fa !important;
      background: hsla(231, 73%, 93%, 0.06);
    }
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
    max-width: 750px !important;
    margin: auto;
    overflow: hidden;
  }
}
@media screen and (min-width: 1000px) {
  .auto-width {
    max-width: 780px !important;
  }
}
</style>
