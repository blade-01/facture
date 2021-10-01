<template>
  <div class="d-flex justify-space-between align-start filters my-6 px-2">
    <div>
      <h1>Invoices</h1>
      <p
        class="text--text"
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
      >
        {{ filter.length }} Invoices
      </p>
      <p v-else>There are {{ filter.length }} total Invoices</p>
    </div>
    <div class="filter_new d-flex justify-space-between align-center">
      <div class="filter">
        <v-btn text class="d-inline text-capitalize" @click="showFilter"
          >{{
            $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
              ? "Filter"
              : "Filter by status"
          }}
          <v-icon class="btn--text" :class="{ chevron: open }">
            mdi-chevron-down
          </v-icon></v-btn
        >
        <div
          class="filter-list secondary pa-2 px-5 py-5 rounded"
          :class="{ filterSlide: open }"
        >
          <p
            class="text-capitalize"
            v-for="item in items"
            :key="item.index"
            @click="filterValue(item)"
          >
            {{ item }}
          </p>
        </div>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Invoices",
  components: {},
  data() {
    return {
      items: ["all", "paid", "pending", "draft"],
      values: {
        draft: false,
        pending: false,
        paid: false,
      },
      open: false,
    };
  },
  computed: {
    ...mapGetters(["allInvoices", "filter"])
  },
  methods: {
    ...mapActions(["filterByStatus", "updateFilter"]),
    newInvoice() {
      this.$router.push({ name: "add" });
    },
    showFilter() {
      this.open = !this.open;
    },
    filterValue(item) {
      this.open = !this.open;
      this.filterByStatus(item);
    },
  }
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
    top: 50px;
    left: 0;
    z-index: 1;
    transform: scale(0);
    transition: transform 0.2s ease;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -100px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -60px;
    & p {
      cursor: pointer;
      transition: opacity 0.4s ease;
    }
    & p:hover {
      opacity: 0.8;
    }
  }
  &s h1 {
    font-size: 23px;
  }
}
.filterSlide {
  transform: scale(1);
}
.chevron {
  transform: rotate(180deg);
}
@media screen and (min-width: 700px) {
  .filters h1 {
    font-size: 26px;
  }
}
</style>
