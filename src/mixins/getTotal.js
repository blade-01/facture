export default {
  methods: {
    getGrandTotal(items) {
      let sum = 0;
      items.forEach((item) => (sum += item.total));
      return sum;
    }
  }
}