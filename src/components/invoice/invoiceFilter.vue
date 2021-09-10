<template>
  <div class="d-flex justify-space-between align-start filters my-6 px-2">
    <div>
      <h1>Invoices</h1>
      <p
        class="text--text"
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      >
        {{ allInvoices.length }} Invoices
      </p>
      <p v-else>There are {{ allInvoices.length }} total Invoices</p>
    </div>
    <div class="filter_new d-flex justify-space-between align-center">
      <div class="filter">
        <v-btn text class="d-inline text-capitalize"
          >{{
            $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
              ? "Filter"
              : "Filter by status"
          }}
          <v-icon class="btn--text"> mdi-chevron-down </v-icon></v-btn
        >
        <!-- <div class="filter-list secondary pa-2 px-5 rounded">
          <p>Paid</p>
          <p>Draft</p>
          <p>Unpaid</p>
        </div> -->
      </div>
      <v-btn
        class="rounded-pill btn py-5 pl-1 pr-3 text-capitalize white--text"
        @click="newInvoice"
      >
        <v-icon class="rounded-circle white btn--text mr-2 pa-1">
          mdi-plus
        </v-icon>
        {{
          $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
            ? "New"
            : "New Invoice"
        }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Invoices",
  components: {},
  computed: {
    ...mapGetters(["allInvoices"]),
  },
  methods: {
    newInvoice() {
      this.$router.push({ name: "add" });
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.filter {
  position: relative;
  & .v-btn {
    font-size: 12px !important;
    padding: 0 0.2rem 0 0 !important;
  }
  &-list {
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 100;
  }
  &s h1 {
    font-size: 23px;
  }
}
@media screen and (min-width: 700px) {
  .filters h1 {
    font-size: 26px;
  }
}
</style>
