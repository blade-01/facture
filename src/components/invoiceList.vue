<template>
  <div class="invoice-wrapper px-2">
    <div class="d-mobile">
      <v-card class="my-4 px-5 pb-2 pt-5 secondary rounded-lg invoice-card" v-for="invoice in allInvoices" :key="invoice.id" @click="newPage(invoice.id)" elevation="1">
        <div class="d-flex justify-space-between mb-3 align-center">
          <p class="font-weight-bold"><span class="hash">#</span>{{invoice.id}}</p>
          <p>{{invoice.clientName}}</p>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <p class="due--text">Due {{formatDate(invoice.paymentDue)}}</p>
            <p class="font-weight-bold price">&#xa3;{{invoice.total = formatCurrency(getGrandTotal(invoice.items))}}</p>
          </div>
          <v-btn class="text-capitalize lighten-5 py-5" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
        </div>
      </v-card>
    </div>
    <div class="d-desktop">
      <v-card class="my-4 px-5 pa-2 py-4 secondary rounded-lg invoice-card card-desktop main-flex" v-for="invoice in allInvoices" :key="invoice.index" @click="newPage(invoice.id)" elevation="1">
        <div class="left flex-item">
          <p class="font-weight-bold"><span class="hash">#</span>{{invoice.id}}</p>
          <p class="due--text">Due {{formatDate(invoice.paymentDue)}}</p>
          <p>{{invoice.clientName}}</p>
        </div>
        <div class="right flex-item">
          <p class="font-weight-bold price">&#xa3;{{invoice.total = formatCurrency(getGrandTotal(invoice.items))}}</p>
          <v-btn class="text-capitalize rounded pa-0 px-7 py-5" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
          <v-icon class="btn--text">mdi-chevron-right</v-icon>
        </div>
      </v-card>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import currencyFormatter from '@/mixins/formatCurrency'
import grandTotal from '@/mixins/getTotal'
import dateFormatter from '@/mixins/formatDate'
export default {
  name: 'InvoiceList',
  computed: {
    ...mapGetters(['allInvoices']),
  },
  methods: {
    newPage(id) {
      this.$router.push({name: 'single', params: {id}})
    }
  },
  mixins: [currencyFormatter, dateFormatter, grandTotal]
}
</script>

<style scoped lang="scss">
.filter {
  position: relative;
}
.filter-list {
  position: absolute;
  top: 40px;
  left: 1rem;
  z-index: 100;
}
.hash {
  font-size: 17px;
  color: #7e88c3;
}
p.price {
  font-size: 15px;
  letter-spacing: 1px;
}
.invoice-card {
  transition: ease-in-out 0.5s border;
  border: solid 1px grey;
}
.invoice-card:hover {
  border: solid 1px #693ABA !important;
}
.due--text {
  padding: 0 0 0.5rem;
  margin: 0;
}
@media screen and (min-width: 700px) {
  .main-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .flex-item {
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-column-gap: 2rem;
      justify-content: center;
      align-items: center;
    }
  }
  p {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>