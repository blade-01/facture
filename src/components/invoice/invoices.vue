<template>
  <v-container class="auto-width">
    <router-view></router-view>
    <Navbar />
    <invoice-filter />
    <div v-if="allInvoices.length">
      <invoice-list />
    </div>
    <div v-else class="text-center">
      <img src="@/assets/img/empty.png" class="mt-9 mb-5"/>
      <p>You've got no invoice here fam, add something</p>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import InvoiceList from '@/components/invoice/invoiceList.vue'
import InvoiceFilter from '@/components/invoice/invoiceFilter.vue'
import Navbar from '@/components/reuseables_/Navbar.vue'
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
img {
  width: 200px;
  border-radius: 50%;
}
</style>