<template>
  <div class="single px-2 mt-6">
    <router-view></router-view>
    <div class="auto-width">
      <v-container>
        <Nav />
        <Back />
        <div v-for="invoice in filterById(id)" :key="invoice.id">
          <v-card class="my-4 px-5 py-5 secondary rounded-lg flex">
            <div class="d-flex align-center justify-space-between stats">
              <p>Status</p>
              <v-btn
                class="text-capitalize rounded pa-0 px-7"
                :class="`status ${invoice.status}`"
                text
                ><span :class="`mr-3 dot ${invoice.status}`"></span>
                {{ invoice.status }}</v-btn
              >
            </div>
            <div class="button-tag d-desktop">
              <v-btn
                class="text-capitalize rounded-pill submit-btn edit font-weight-bold white--text"
                depressed
                @click="editInvoice"
                >Edit</v-btn
              >
              <v-btn
                class="text-capitalize rounded-pill submit-btn del font-weight-bold white--text"
                depressed
                @click="showModal"
                >Delete</v-btn
              >
              <v-btn
                class="text-capitalize rounded-pill submit-btn btn font-weight-bold white--text"
                depressed
                @click="onMark"
                v-if="invoice.status !== 'paid'"
                >Mark as paid</v-btn
              >
            </div>
          </v-card>
          <v-card class="my-4 px-5 pb-1 pt-5 secondary rounded-lg">
            <div class="flex-item">
              <div>
                <p class="font-weight-bold">
                  <span class="hash">#</span>{{ invoice.id }}
                </p>
                <p class="form--text">{{ invoice.description }}</p>
              </div>
              <div class="text-align">
                <p class="form--text">{{ invoice.senderAddress.street }}</p>
                <p class="form--text">{{ invoice.senderAddress.city }}</p>
                <p class="form--text">{{ invoice.senderAddress.postCode }}</p>
                <p class="form--text">{{ invoice.senderAddress.country }}</p>
              </div>
            </div>
            <div class="inner-flex mt-8">
              <div>
                <div>
                  <h3 class="font-weight-light mb-3">Invoice Date</h3>
                  <p class="font-weight-bold">
                    {{ formatDate(invoice.createdAt) }}
                  </p>
                </div>
                <div>
                  <h3 class="font-weight-light mb-3 mt-8">Payment Due</h3>
                  <p class="font-weight-bold">
                    {{ formatDate(invoice.paymentDue) }}
                  </p>
                </div>
              </div>
              <div>
                <h3 class="font-weight-light mb-3">Bill To</h3>
                <p class="font-weight-bold increase">
                  {{ invoice.clientName }}
                </p>
                <p class="form--text">{{ invoice.clientAddress.street }}</p>
                <p class="form--text">{{ invoice.clientAddress.city }}</p>
                <p class="form--text">{{ invoice.clientAddress.postCode }}</p>
                <p class="form--text">{{ invoice.clientAddress.country }}</p>
              </div>
              <div>
                <h3 class="font-weight-light mb-3">Sent To</h3>
                <p class="font-weight-bold increase">
                  {{ invoice.clientEmail }}
                </p>
              </div>
            </div>
            <v-card class="my-4 px-5 py-4 primary rounded-lg d-mobile">
              <div
                v-for="item in invoice.items"
                :key="item.index"
                class="mb-2 d-flex justify-space-between align-center"
              >
                <div>
                  <p class="pa-0 ma-0 mb-1">{{ item.name }}</p>
                  <p class="form--text">
                    {{ item.quantity }} x &#xa3;{{ formatCurrency(item.price) }}
                  </p>
                </div>
                <p class="font-weight-bold">
                  &#xa3;{{ formatCurrency(item.total) }}
                </p>
              </div>
              <v-card
                class="secondary mt-2 px-5  pt-5 rounded-lg d-flex justify-space-between align-center"
              >
                <p>Grand Total</p>
                <p class="font-weight-bold g-total">
                  &#xa3;{{
                    (invoice.total = formatCurrency(
                      getGrandTotal(invoice.items)
                    ))
                  }}
                </p>
              </v-card>
            </v-card>
            <!-- Desktop -->
            <v-card class="my-4 px-5 py-4 primary rounded-lg d-desktop">
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
                    <td>{{ item.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>&#xa3;{{ formatCurrency(item.price) }}</td>
                    <td class="font-weight-bold">
                      &#xa3;{{ formatCurrency(item.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <v-card
                class="secondary mt-2 px-5  pt-5 rounded-lg d-flex justify-space-between align-center"
              >
                <p>Amount Due</p>
                <p class="font-weight-bold g-total">
                  &#xa3;{{
                    (invoice.total = formatCurrency(
                      getGrandTotal(invoice.items)
                    ))
                  }}
                </p>
              </v-card>
            </v-card>
          </v-card>
          <v-card
            class="d-mobile secondary mt-2 px-5 py-5 rounded-lg mobile-button"
          >
            <v-btn
              class="text-capitalize rounded-pill submit-btn edit font-weight-bold white--text"
              depressed
              @click="editInvoice"
              >Edit</v-btn
            >
            <v-btn
              class="text-capitalize rounded-pill submit-btn del font-weight-bold white--text"
              depressed
              @click="showModal"
              >Delete</v-btn
            >
            <v-btn
              class="text-capitalize rounded-pill submit-btn btn font-weight-bold white--text"
              depressed
              @click="onMark"
              v-if="invoice.status !== 'paid'"
              >Mark as paid</v-btn
            >
          </v-card>
        </div>
      </v-container>
    </div>
    <div class="modal" v-show="modal">
      <div class="modal-content secondary">
        <p class="font-weight-bold">Confirm Deletion</p>
        <p class="font-weight-light">
          Are you sure you want to delete invoice <span class="hash">#</span
          >{{ id }}? This action cannot be reversed.
        </p>
        <div class="secondary d-flex justify-end align-center pt-5">
          <v-btn
            class="text-capitalize rounded-pill submit-btn edit font-weight-bold white--text mr-2"
            depressed
            @click="cancel"
            >Cancel</v-btn
          >
          <v-btn
            class="text-capitalize rounded-pill submit-btn del font-weight-bold white--text"
            depressed
            @click="onDelete"
            >Delete</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/reuseables_/Navbar.vue";
import Back from "@/components/reuseables_/BackButton.vue";
import grandTotal from "@/mixins/getTotal";
import currencyFormatter from "@/mixins/formatCurrency";
import scrollToTop from "@/mixins/scrollToTop";
import dateFormatter from "@/mixins/formatDate";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SingleInvoice",
  props: ["id"],
  components: {
    Nav,
    Back,
  },
  data() {
    return {
      modal: false,
    };
  },
  computed: {
    ...mapGetters(["filterById"]),
  },
  methods: {
    ...mapActions(["deleteInvoice", "markAsPaid"]),
    onDelete() {
      this.deleteInvoice(this.id);
      this.$router.push("/");
    },
    showModal() {
      this.modal = !this.modal;
    },
    cancel() {
      this.modal = !this.modal;
    },
    onMark() {
      this.markAsPaid({
        id: this.id,
        status: "paid",
      });
    },
    editInvoice() {
      this.$router.push({ name: "edit" });
    },
  },
  created() {
    this.toTop();
  },
  mixins: [currencyFormatter, dateFormatter, grandTotal, scrollToTop],
};
</script>

<style scoped lang="scss">
.single {
  position: relative;
}
.hash {
  color: #7e88c3;
}
.g-total {
  font-size: 16px !important;
}
.increase {
  font-size: 14px !important;
}
.stats {
  padding: 0.2rem !important;
  & p {
    margin: 0 !important;
    padding: 0 !important;
  }
  .v-btn {
    margin: 0 !important;
  }
}
.edit {
  background: #252945 !important;
  .theme--dark & {
    background: #141625 !important;
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
    flex-basis: 43.33%;
    &:last-child {
      flex-basis: 100%;
    }
  }
}
.mobile-button {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem !important;
  .v-btn {
    padding: 0.2rem 0.5rem !important;
    margin: 0 !important;
    color: #ffffff !important;
    font-weight: bolder !important;
    font-size: 10px;
    flex-basis: 32% !important;
    &:nth-child(2) {
      margin: 0 0.1rem !important;
    }
  }
}
.modal {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 63px;
  left: 0;
  overflow: hidden;
  & p {
    font-size: 15px;
    line-height: 1.5;
  }
  & p:first-child {
    font-size: 20px;
  }
  &-content {
    position: fixed;
    padding: 1rem;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    width: 300px;
    transform: translate(-50%, -50%) scale(0);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -100px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -60px !important;
    animation: scaleIn 0.4s forwards;
  }
  @keyframes scaleIn {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
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
      font-weight: bolder !important;
      font-size: 12px;
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
}
</style>
