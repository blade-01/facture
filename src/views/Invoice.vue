<template>
  <div class="wrapper">
    <Invoices />
  </div>
</template>

<script>
import Invoices from '@/components/invoice/invoices.vue'
export default {
  name: 'Home',
  components: {
    Invoices,
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>