const state = {
  invoices: []  
};
const saveInvoice = () =>
  localStorage.setItem('invoices', JSON.stringify(state.invoices))

const getters = {
  allInvoices: (state) => state.invoices,
  filterById(state) {
    return (id) => {
    return state.invoices.filter((invoice) => invoice.id === id)
    }
  }
};

const actions = {
  setInvoice({commit}, data) {
    commit('setInvoice', data)
    saveInvoice()
  },
  getInvoice({commit}) {
    const invoice = state.invoices;
    commit('getInvoice', invoice)
    saveInvoice()
  },
  addInvoice({commit}, data) {
    commit('addInvoice', data)
    saveInvoice()
  },
  deleteInvoice({commit}, id) {
    commit('del', id)
    saveInvoice()
  },
  markAsPaid({commit}, {id, status}) {
    commit('markAsPaid', {id, status})
    saveInvoice()
  },
  updateInvoice({commit}, {id, data}) {
    commit('updateInvoice', {id, data})
    saveInvoice()
  }
};

const mutations = {
  setInvoice(state, data) { 
    state.invoices = data
  },
  getInvoice(state, invoice) {
    state.invoices = invoice
  },
  addInvoice(state, invoice) {
    state.invoices.unshift(invoice)
  },
  del(state, id) { 
    state.invoices = state.invoices.filter((invoice) => invoice.id !== id)
  },
  markAsPaid(state, {id, status}) {
    const index = state.invoices.findIndex((invoice) => invoice.id ===  id)
    state.invoices[index].status = status
  },
  updateInvoice(state, { id, data }) {
    const index = state.invoices.findIndex((invoice) => invoice.id === id);
    state.invoices[index] = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}