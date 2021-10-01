const state = {
  invoices: [],
  filter: [],
};
const saveInvoice = () =>
  localStorage.setItem("invoices", JSON.stringify(state.invoices));

const getters = {
  allInvoices: (state) => state.invoices,
  filter: (state) => state.filter,
  filterById: (state) => (id) => {
    return state.invoices.filter((invoice) => invoice.id === id);
  },
};

const actions = {
  setInvoice({ commit }, data) {
    commit("setInvoice", data);
    saveInvoice();
  },
  getInvoice({ commit }) {
    const invoice = state.invoices;
    commit("getInvoice", invoice);
    saveInvoice();
  },
  addInvoice({ commit }, data) {
    commit("addInvoice", data);
    saveInvoice();
  },
  deleteInvoice({ commit }, id) {
    commit("del", id);
    saveInvoice();
  },
  markAsPaid({ commit }, { id, status }) {
    commit("markAsPaid", { id, status });
    saveInvoice();
  },
  updateInvoice({ commit }, { id, data }) {
    commit("updateInvoice", { id, data });
    saveInvoice();
  },
  filterByStatus({ commit }, status) {
    commit("filterByStatus", status);
  },
  onLoad({ commit }) {
    commit("onLoad");
  },
};

const mutations = {
  setInvoice(state, data) {
    state.invoices = data;
  },
  getInvoice(state, invoice) {
    state.invoices = invoice;
  },
  addInvoice(state, invoice) {
    state.invoices.unshift(invoice);
  },
  del(state, id) {
    state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
  },
  markAsPaid(state, { id, status }) {
    const index = state.invoices.findIndex((invoice) => invoice.id === id);
    state.invoices[index].status = status;
  },
  updateInvoice(state, { id, data }) {
    const index = state.invoices.findIndex((invoice) => invoice.id === id);
    state.invoices[index] = data;
  },
  filterByStatus(state, status) {
    if (status == "all") {
      state.filter = [...state.invoices];
    } else {
      state.filter = [
        ...state.invoices.filter((invoice) => invoice.status === status),
      ];
    }
  },
  onLoad(state) {
    state.filter = state.invoices;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
