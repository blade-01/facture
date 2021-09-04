import moment from 'moment'
export default {
  methods: {
    formatDate(date) {
      return moment(date).format('D MMM YYYY');
    }
  }
}