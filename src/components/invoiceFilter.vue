<template>
  <div class="d-flex justify-space-between align-center filters mb-5 mt-2">
    <div>
      <h1>Invoices</h1>
      <p class="grey--text" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">{{allInvoices.length}} Invoices</p>
      <p v-else>There are {{allInvoices.length}} total Invoices</p>
    </div>
    <div class="filter_new d-flex justify-space-between align-center">
      <div class="filter">
        <v-btn text class="d-inline text-capitalize">{{
            $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
              ? "Filter"
              : "Filter by status"
          }}
        <v-icon class="btn--text"> mdi-chevron-down </v-icon></v-btn>
        <!-- <div class="filter-list btn pa-2 rounded">
          miroc
        </div> -->
      </div>
      <v-btn class="rounded-pill btn py-5 pl-1 pr-3 text-capitalize white--text" @click="newInvoice">
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
import { mapGetters } from 'vuex'
export default {
  name: 'Invoices',
  components: {
  },
  computed: {
    ...mapGetters(['allInvoices'])
  },
  methods: {
    newInvoice() {
      this.$router.push({name: 'add'})
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.filter {
  position: relative;
  &-list {
    position: absolute;
    top: 40px;
    left: 1rem;
    z-index: 100;
  }
}
.filters h1 {
  font-size: 23px;
}
</style>