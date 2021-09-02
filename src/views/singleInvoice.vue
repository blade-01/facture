<template>
  <div class="single">
    <div class="auto-width">
      <v-container>
        <Nav />
        <Back />
        <div v-for="invoice in filterById(id)" :key="invoice.id">
          <v-card class="my-4 px-5 py-4 secondary rounded-lg flex">
            <div class="d-flex align-center justify-space-between stats">
              <p>Status</p>
              <v-btn class="text-capitalize rounded pa-0 px-7" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
            </div>
            <div class="button-tag d-desktop">
              <v-btn class="text-capitalize rounded-pill submit-btn due font-weight-bold" depressed>Edit</v-btn>
              <v-btn class="text-capitalize rounded-pill submit-btn del font-weight-bold" depressed @click="onDelete">Delete</v-btn>
              <v-btn class="text-capitalize rounded-pill submit-btn btn font-weight-bold" depressed @click="onMark">Mark as paid</v-btn>
            </div>
          </v-card>
          <v-card class="my-4 px-5 pb-1 pt-5 secondary rounded-lg">
            <div class="flex-item">
              <div>
                <p class="font-weight-bold"><span class="hash">#</span>{{invoice.id}}</p>
                <p>{{invoice.description}}</p>
              </div>
              <div class="text-align">
                <p>{{invoice.senderAddress.street}}</p>
                <p>{{invoice.senderAddress.city}}</p>
                <p>{{invoice.senderAddress.postCode}}</p>
                <p>{{invoice.senderAddress.country}}</p>
              </div>
            </div>
            <div class="inner-flex mt-8">
              <div>
                <div>
                  <h3 class="font-weight-light mb-3">Invoice Date</h3>
                  <p class="font-weight-bold">{{invoice.createdAt}}</p>
                </div>
                <div>
                  <h3 class="font-weight-light mb-3 mt-8">Payment Due</h3>
                  <p class="font-weight-bold">{{invoice.paymentDue}}</p>
                </div>
              </div>
              <div>
                <h3 class="font-weight-light mb-3">Bill To</h3>
                <p class="font-weight-bold">{{invoice.clientName}}</p>
                <p>{{invoice.clientAddress.street}}</p>
                <p>{{invoice.clientAddress.city}}</p>
                <p>{{invoice.clientAddress.postCode}}</p>
                <p>{{invoice.clientAddress.country}}</p>
              </div>
              <div>
                <h3 class="font-weight-light mb-3">Sent To</h3>
                <p class="font-weight-bold">{{invoice.clientEmail}}</p>
              </div>
            </div>
            <v-card class="my-4 px-5 py-4 primary rounded-lg">
              <table>
                <thead>
                  <tr>
                    <th class="font-weight-light">Item Name</th>
                    <th class="font-weight-light">Qty.</th>
                    <th class="font-weight-light">Price</th>
                    <th class="font-weight-light">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in invoice.items" :key="item.index">
                    <td>{{item.name}}</td>
                    <td>{{item.quantity}}</td>
                    <td>₦{{item.price}}</td>
                    <td>₦{{item.total}}</td>
                  </tr>
                </tbody>
              </table>
              <v-card class="secondary mt-2 px-5  pt-5 rounded-lg d-flex justify-space-between align-center">
                <p>{{
                  $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
                    ? "Grand Total"
                    : "Amount Due"
                }}</p>
                <p>₦{{invoice.total}}</p>
              </v-card>
            </v-card>
          </v-card>
          <v-card class="d-mobile secondary mt-2 px-5 py-4 rounded-lg d-flex justify-space-between align-center">
              <v-btn class="text-capitalize rounded-pill submit-btn due font-weight-bold" depressed>Edit</v-btn>
              <v-btn class="text-capitalize rounded-pill submit-btn del font-weight-bold" depressed @click="onDelete">Delete</v-btn>
              <v-btn class="text-capitalize rounded-pill submit-btn btn font-weight-bold" depressed>Mark as paid</v-btn>
          </v-card>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue'
import Back from '@/components/BackButton.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SingleInvoice',
  props: ['id'],
  components: {
    Nav,
    Back
  },
  computed: {
    ...mapGetters(['allInvoices', 'filterById']),
  },
  methods: {
    ...mapActions(['deleteInvoice', 'markAsPaid']),
    onDelete() {
      this.deleteInvoice(this.id)
      this.$router.push('/')
    },
    onMark() {
      this.markAsPaid({
        id: this.id,
        status: 'paid'
      })
    }
  },
  created() {
    // this.filterById(this.id)
  }
}
</script>

<style scoped lang="scss">
.single {
  position: relative;
}
.hash {
  color: #7e88c3;
}
.stats {
  & p {
    margin: 0 !important;
    padding: 0 !important;
  }
  .v-btn {
    margin: 0 !important;
  }
}
.flex-item {
  .text-align {
    margin-top: 2rem;
  }
}
.inner-flex {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  & > div {
    flex-basis: 33.33%;
    &:last-child {
      flex-basis: 100%;
    }
  }
}
table {
   width: 100%;
   border-collapse: collapse;
  & thead tr th {
    padding: 12px 8px;
    vertical-align: top;
    text-align: left;
  }
  & thead tr th:nth-child(2),
  & thead tr th:nth-child(3),
  & thead tr th:nth-child(4) {
    text-align: right;
  }
  & tbody tr td {
    padding: 12px 8px;
    text-align: left;
    font-weight: bold;
  }
  & tbody tr td:nth-child(2),
  & tbody tr td:nth-child(3),
  & tbody tr td:nth-child(4) {
    text-align: right;
  }
}
@media screen and (min-width: 700px) {
  .d-mobile {
    display: none !important;
  }
  .flex-item {
    display: flex;
    justify-content: space-between;
    align-items: start;
    .text-align {
      margin-top: 0;
      text-align: right;
    }
  }
  .inner-flex {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: nowrap;
    & > div:last-child {
      flex-basis: 33.33%;
    }
  }
  .flex {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
  .button-tag {
    .v-btn {
      width: auto !important;
      height: auto !important;
      padding: 0.7rem !important;
      font-size: small;
      &:nth-child(2) {
        margin: 0 0.5rem !important;
      }
    }
  }
  .stats {
    .v-btn {
      margin-left: 2rem !important;
    }
  }
}
</style>