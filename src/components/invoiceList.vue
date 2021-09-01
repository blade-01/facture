<template>
  <div class="invoice-wrapper">
    <div class="d-mobile">
      <v-card class="my-2 px-5 pb-0 pt-4 secondary rounded-lg invoice-card" v-for="invoice in allInvoices" :key="invoice.id" @click="newPage(invoice.id)" elevation="1">
        <div class="d-flex justify-space-between mb-3">
          <p class="font-weight-bold"><span class="hash">#</span>{{invoice.id}}</p>
          <p>{{invoice.clientName}}</p>
        </div>
        <div class="d-flex justify-space-between">
          <div>
            <p class="due--text">Due {{invoice.paymentDue}}</p>
            <p class="font-weight-bold price">₦{{invoice.total}}</p>
          </div>
          <v-btn class="text-capitalize lighten-5 py-6" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
        </div>
      </v-card>
    </div>
    <div class="d-desktop">
      <v-card class="my-2 px-5 pa-2 py-4 secondary rounded-lg invoice-card card-desktop main-flex" v-for="invoice in allInvoices" :key="invoice.index" @click="newPage(invoice.id)" elevation="1">
        <div class="left flex-item">
          <p class="font-weight-bold"><span class="hash">#</span>{{invoice.id}}</p>
          <p class="due--text">Due {{invoice.paymentDue}}</p>
          <p>{{invoice.clientName}}</p>
        </div>
        <div class="right flex-item">
          <p class="font-weight-bold price">₦{{invoice.total}}</p>
          <v-btn class="text-capitalize lighten-5 rounded pa-0 px-7" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
          <v-icon class="btn--text">mdi-chevron-right</v-icon>
        </div>
      </v-card>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InvoiceList',
  computed: {
    ...mapGetters(['allInvoices']),
  },
  methods: {
    newPage(id) {
      this.$router.push({name: 'single', params: {id}})
    }
    // formatDate() {
      
    // }
  },
  mounted() {

  }
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
  color: #7e88c3;
}
p.price {
  font-size: 17px;
  letter-spacing: 1px;
}
.status {
  width: 120px;
  font-weight: bold;
  &.paid {
    color: #33d69f;
    background-color: hsla(160, 67%, 52%, 0.06);
  }
  &.pending {
    color: #ff8f00;
    background-color: rgba(255, 145, 0, 0.06);
  }
  &.draft {
    color: #424761;
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
  .right {
    text-align: right;
  }
  p {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>