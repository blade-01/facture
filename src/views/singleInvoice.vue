<template>
  <div class="single">
    <v-container>
      <Nav />
      <Back />
      <p>{{id}}</p>
      <div v-for="invoice in filterById" :key="invoice.id">
        <p>{{invoice.id}}</p>
      </div>
      <!-- filterById: (state) => {
    return (id) => {
    return state.invoices.find((invoice) => invoice.id === id)
    }
  } -->
    </v-container>
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

<style scoped>

</style>