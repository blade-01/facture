<template>
  <v-container class="auto-width">
    <router-view></router-view>
    <Navbar />
    <invoice-filter />
    <invoice-list />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import InvoiceList from './invoiceList.vue'
import InvoiceFilter from './invoiceFilter.vue'
import Navbar from './Navbar.vue'
export default {
  name: 'Invoices',
  components: {
    Navbar,
    InvoiceList,
    InvoiceFilter
  },
  computed: {
    ...mapGetters(['allInvoices'])
  },
  mounted() {

  }
}
</script>

<style scoped>
.filter {
  position: relative;
}
.filter-list {
  position: absolute;
  top: 40px;
  left: 1rem;
  z-index: 100;
}
</style>