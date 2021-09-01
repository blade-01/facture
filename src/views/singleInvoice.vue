<template>
  <div class="single">
    <div class="auto-width">
      <v-container>
        <Nav />
        <Back />
        <div v-for="invoice in filterById(id)" :key="invoice.id">
          <v-card class="my-4 px-5 pb-1 pt-5 secondary rounded-lg invoice-card d-flex align-center justify-space-between">
            <div class="d-flex align-center justify-space-between">
              <p>Status</p>
              <v-btn class="text-capitalize rounded pa-0 px-7" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
            </div>
            <div class="d-flex align-center justify-space-between">
              <v-btn class="text-capitalize rounded-pill submit-btn due font-weight-bold" depressed>Discard</v-btn>
              <v-btn class="text-capitalize rounded-pill submit-btn form font-weight-bold" depressed>Save as Draft</v-btn>
              <v-btn class="text-capitalize rounded-pill submit-btn btn font-weight-bold" depressed>save & Send</v-btn>
            </div>
          </v-card>
          <v-card class="my-4 px-5 pb-1 pt-5 secondary rounded-lg invoice-card">
            <div class="d-flex align-center justify-space-between">
              <p>Status</p>
              <v-btn class="text-capitalize rounded pa-0 px-7" :class="`status ${invoice.status}`" text><span :class="`mr-3 dot ${invoice.status}`"></span> {{invoice.status}}</v-btn>
            </div>
          </v-card>
          <!-- <p>{{invoice.id}}</p>
          <p>{{invoice.clientName}}</p> -->
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue'
import Back from '@/components/BackButton.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'SingleInvoice',
  props: ['id'],
  components: {
    Nav,
    Back
  },
  computed: {
    ...mapGetters(['allInvoices', 'filterById']),
    // this.filterById(this.id)
  },
  methods: {
    // ...mapMutations(['filterById'])
  },
  created() {
    // this.filterById(this.id)
  }
}
</script>

<style scoped lang="scss">
.v-btn {
  margin: 0 !important;
}
</style>