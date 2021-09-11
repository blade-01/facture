<template>
  <v-form @submit.prevent>
    <p class="btn--text font-weight-bold my-2 mt-4">Bill From</p>
    <div class="input-field">
      <label class="form--text font-weight-bold" for="street_address"
        >Street Address</label
      >
      <input
        type="text"
        required
        class="secondary pa-2 text--text"
        :class="{err : $v.invoice.senderAddress.street.$error}"
        id="street_address"
        v-model="invoice.senderAddress.street"
        @blur="$v.invoice.senderAddress.street.$touch()"
        @focus="$v.invoice.senderAddress.street.$reset()"
      />
      <small :class="{'err-mssg' : $v.invoice.senderAddress.street.$error}" class="hide">required</small>
    </div>
    <div class="form-flex">
      <div class="input-field">
        <label class="form--text font-weight-bold" for="city">City</label>
        <input
          type="text"
          required
          class="secondary pa-2 text--text"
          :class="{err: $v.invoice.senderAddress.city.$error}"
          id="city"
          v-model="invoice.senderAddress.city"
          @blur="$v.invoice.senderAddress.city.$touch()"
          @focus="$v.invoice.senderAddress.city.$reset()"
        />
        <small :class="{'err-mssg' : $v.invoice.senderAddress.city.$error}" class="hide">required</small>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="post_code"
          >Post Code</label
        >
        <input
          type="text"
          required
          class="secondary pa-2 text--text"
          :class="{err: $v.invoice.senderAddress.postCode.$error}"
          id="post_code"
          v-model="invoice.senderAddress.postCode"
          @blur="$v.invoice.senderAddress.postCode.$touch()"
          @focus="$v.invoice.senderAddress.postCode.$reset()"
        />
        <small :class="{'err-mssg' : $v.invoice.senderAddress.postCode.$error}" class="hide">required</small>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="country">Country</label>
        <input
          type="text"
          required
          class="secondary pa-2 text--text"
          :class="{err: $v.invoice.senderAddress.country.$error}"
          id="country"
          v-model="invoice.senderAddress.country"
          @blur="$v.invoice.senderAddress.country.$touch()"
          @focus="$v.invoice.senderAddress.country.$reset()"
        />
        <small :class="{'err-mssg' : $v.invoice.senderAddress.country.$error}" class="hide">required</small>
      </div>
    </div>
    <p class="btn--text font-weight-bold my-2 mt-4">Bill To</p>
    <div class="input-field mb-6">
      <label class="form--text font-weight-bold" for="name"
        >Client's Name</label
      >
      <input
        type="text"
        required
        class="secondary pa-2 text--text"
        :class="{err: $v.invoice.clientName.$error}"
        id="name"
        v-model="invoice.clientName"
        @blur="$v.invoice.clientName.$touch()"
        @focus="$v.invoice.clientName.$reset()"
      />
      <small :class="{'err-mssg' : $v.invoice.clientName.$error}" class="hide">required</small>
    </div>
    <div class="input-field mb-6">
      <label class="form--text font-weight-bold" for="email"
        >Client's Email</label
      >
      <input
        type="email"
        required
        class="secondary pa-2 text--text"
        :class="{err: $v.invoice.clientEmail.$error}"
        id="email"
        v-model="$v.invoice.clientEmail.$model"
        @blur="$v.invoice.clientEmail.$touch()"
        @focus="$v.invoice.clientEmail.$reset()"
      />
      <small :class="{'err-mssg' : $v.invoice.clientEmail.$error}" class="hide">required</small>
    </div>
    <div class="input-field mb-6">
      <label class="form--text font-weight-bold" for="client_address"
        >Street Address</label
      >
      <input
        type="text"
        required
        class="secondary pa-2 text--text"
        :class="{err: $v.invoice.clientAddress.street.$error}"
        id="client_address"
        v-model="invoice.clientAddress.street"
        @blur="$v.invoice.clientAddress.street.$touch()"
        @focus="$v.invoice.clientAddress.street.$reset()"
      />
      <small :class="{'err-mssg' : $v.invoice.clientAddress.street.$error}" class="hide">required</small>
    </div>
    <div class="form-flex">
      <div class="input-field">
        <label class="form--text font-weight-bold" for="client_city"
          >City</label
        >
        <input
          type="text"
          required
          class="secondary pa-2 text--text"
          :class="{err: $v.invoice.clientAddress.city.$error}"
          id="client_city"
          v-model="invoice.clientAddress.city"
          @blur="$v.invoice.clientAddress.city.$touch()"
          @focus="$v.invoice.clientAddress.city.$reset()"
        />
        <small :class="{'err-mssg' : $v.invoice.clientAddress.city.$error}" class="hide">required</small>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="client_post_code"
          >Post Code</label
        >
        <input
          type="text"
          required
          class="secondary pa-2 text--text"
          :class="{err: $v.invoice.clientAddress.postCode.$error}"
          id="client_post_code"
          v-model="invoice.clientAddress.postCode"
          @blur="$v.invoice.clientAddress.postCode.$touch()"
          @focus="$v.invoice.clientAddress.postCode.$reset()"
        />
        <small :class="{'err-mssg' : $v.invoice.clientAddress.postCode.$error}" class="hide">required</small>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="client_country"
          >Country</label
        >
        <input
          type="text"
          required
          class="secondary pa-2 text--text"
          :class="{err: $v.invoice.clientAddress.country.$error}"
          id="client_country"
          v-model="invoice.clientAddress.country"
          @blur="$v.invoice.clientAddress.country.$touch()"
          @focus="$v.invoice.clientAddress.country.$reset()"
        />
        <small :class="{'err-mssg' : $v.invoice.clientAddress.country.$error}" class="hide">required</small>
      </div>
    </div>
    <div class="input-field mb-6">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <label class="form--text font-weight-bold" for="date"
            >Invoice Date</label
          >
          <v-text-field
            rounded
            dense
            color="due"
            class="secondary pt-2"
            :class="{err: $v.invoice.paymentDue.$error}"
            @blur="$v.invoice.paymentDue.$touch()"
            @focus="$v.invoice.paymentDue.$reset()"
            :value="formatDate"
            append-icon="mdi-calendar"
            readonly
            v-on="on"
            v-bind="attrs"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="invoice.paymentDue"
          @input="menu = false"
        ></v-date-picker>
      </v-menu>
      <small :class="{'err-mssg' : $v.invoice.paymentDue.$error}" class="hide">required</small>
    </div>
    <div class="input-field mb-6">
      <label class="form--text font-weight-bold" for="project_description"
        >Project Description</label
      >
      <input
        type="text"
        required
        class="secondary pa-2 text--text"
        :class="{err: $v.invoice.description.$error}"
        id="project_description"
        v-model="invoice.description"
        @blur="$v.invoice.description.$touch()"
        @focus="$v.invoice.description.$reset()"
      />
      <small :class="{'err-mssg' : $v.invoice.description.$error}" class="hide">required</small>
    </div>
    <div class="item_list">
      <h3 class="font-weight-bold my-2 mt-7">Item List</h3>
      <div class="items" v-for="item in invoice.items" :key="item.index">
        <div class="input-field">
          <label class="form--text font-weight-bold" for="city"
            >Item Name</label
          >
          <input
            type="text"
            required
            class="secondary pa-2 text--text"
            id="item_name"
            v-model="item.name"
          />
        </div>
        <div class="item-flex">
          <div class="input-field">
            <label class="form--text font-weight-bold" for="quantity"
              >Qty.</label
            >
            <input
              type="number"
              required
              class="secondary pa-2 text--text"
              id="quantity"
              v-model="item.quantity"
              @input="
                (e) => {
                  item.total = item.price * e.target.value;
                  item.price ? item.total : e.target.value;
                }
              "
            />
          </div>
          <div class="input-field">
            <label class="form--text font-weight-bold" for="price">Price</label>
            <input
              type="number"
              required
              class="secondary pa-2 text--text"
              id="price"
              v-model="item.price"
              @input="
                (e) => {
                  item.total = item.quantity * e.target.value;
                  item.quantity
                    ? (item.price = e.target.value)
                    : e.target.value;

                  invoice.total = item.total;
                }
              "
            />
          </div>
          <div class="input-field pt-8">
            <p class="font-weight-bold">
              &#xa3;{{ formatCurrency(item.total) }}
            </p>
          </div>
          <v-btn
            text
            class="text-capitalize form--text del-btn"
            @click="deleteItem(item)"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </div>
      </div>
      <v-btn
        class="text-capitalize form--text secondary rounded-pill mt-5 text-center add-btn my-3"
        @click="incrementItem"
        ><v-icon class="form--text">mdi-plus</v-icon> Add New Item</v-btn
      >
    </div>
    <small class="mt-5 d-block">{{err}}</small>
    <div class="submit-button button-flex secondary py-4 rounded-lg">
      <v-btn
        class="text-capitalize rounded-pill submit-btn discard-btn font-weight-bold"
        depressed
        @click="goHome"
        >Discard</v-btn
      >
      <v-btn
        class="text-capitalize rounded-pill submit-btn form font-weight-bold"
        depressed
        @click="onDraft"
        >Save as Draft</v-btn
      >
      <v-btn
        class="text-capitalize rounded-pill submit-btn btn font-weight-bold"
        depressed
        @click="submitForm"
        >save & Send</v-btn
      >
    </div>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import currencyFormatter from "@/mixins/formatCurrency";
import moment from "moment";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  data: () => ({
    menu: false,
    modal: false,
    err: null,
    select: null,
    net: [1, 7, 14, 30],
    invoice: {
      id: Math.random()
        .toString(36)
        .substring(7)
        .toUpperCase(),
      paymentDue: null,
      description: null,
      clientName: null,
      clientEmail: null,
      status: "pending",
      senderAddress: {
        street: null,
        city: null,
        postCode: null,
        country: null,
      },
      clientAddress: {
        street: null,
        city: null,
        postCode: null,
        country: null,
      },
      items: [
        {
          name: null,
          quantity: null,
          price: null,
          total: null,
        },
      ],
      total: null,
    },
  }),
  computed: {
    ...mapGetters(["filterById"]),
    formatDate() {
      return this.invoice.paymentDue
        ? moment(this.invoice.paymentDue).format("DD MMM YYYY")
        : "";
    },
  },
  validations: {
    invoice: {
      paymentDue: { required },
      description: { required },
      clientName: { required },
      clientEmail: { required, email },
      senderAddress: {
        street: { required },
        city: { required },
        postCode: { required },
        country: { required },
      },
      clientAddress: {
        street: { required },
        city: { required },
        postCode: { required },
        country: { required },
      },
      items: {
        $each: {
          name: { required },
          quantity: { required },
          price: { required },
        },
      },
    },
  },
  methods: {
    ...mapActions(["updateInvoice"]),
    submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.updateInvoice({
          id: this.$route.params.id,
          data: this.invoice
        });
        this.goHome();
      }
    },
    incrementItem() {
      this.invoice.items.push({
        name: null,
        quantity: null,
        price: null,
        total: null,
      });
    },
    deleteItem(i) {
      this.invoice.items.splice(this.invoice.items.indexOf(i), 1);
    },
    onDraft() {
      this.invoice.status = "draft";
      this.submitForm();
    },
    goHome() {
      this.$router.push({name: 'single'});
    },
  },
  mounted() {
    this.invoice  = this.filterById(this.$route.params.id)[0]
  },
  mixins: [currencyFormatter, validationMixin],
};
</script>

<style scoped lang="scss">
.input-field {
  margin: 1rem 0;
  position: relative;
  input {
    border: none;
    outline: none;
    display: block;
    width: 100%;
    border-radius: 5px;
    margin: 0.5rem 0 1rem;
    padding: 1rem !important;
    border: solid 1px #252945 !important;
    transition: ease 0.4s border;
    .theme--light & {
      color: #0c0e16 !important;
      border: solid 1px #dfe3fa !important;
    }
  }
  input:focus {
    border: solid 1px #7c5dfa !important;
  }
  .err {
    border: solid 1px #FA5D5D !important;
    .theme--light & {
      border: solid 1px #FA5D5D !important;
    }
  }
  .err-mssg {
    color: #FA5D5D !important;
  }
  .hide {
    color: transparent;
    position: absolute;
    top: 0px;
    right: 0;
    transition: color ease 0.4s;
  }
}
.form-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .input-field {
    flex-basis: 49%;
    margin: 0.2rem 0;
    &:last-child {
      flex-basis: 100%;
    }
  }
}
.item-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input-field {
    flex-basis: 20%;
    margin: 0.2rem 0;
  }
}
.item_list h3 {
  color: #777f98;
}
.button-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem !important;
  .v-btn {
    padding: 0.2rem 0.5rem !important;
    margin: 0 !important;
    color: #ffffff !important;
    font-weight: bolder !important;
    font-size: 10px;
    flex-basis: 30% !important;
    &:nth-child(2) {
      margin: 0 0.1rem !important;
    }
  }
}
.v-text-field--rounded {
  border-radius: 5px !important;
}
.v-input {
  height: 50px !important;
  margin: 0.4rem 0 !important;
  padding-top: 0.7rem !important;
}
.v-list {
  background: #252945 !important;
  .theme--light & {
    background: #ffffff !important;
  }
}
.add-btn {
  cursor: pointer;
  width: 100%;
  padding: 1.5rem !important;
}
.del-btn {
  margin: 1rem 0 0 0 !important;
  padding: 0 !important;
}
.discard-btn {
  background: #252945 !important;
  .theme--dark & {
    background: #141625 !important;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
@media screen and (min-width: 700px) {
  .form-flex {
    flex-wrap: nowrap;
    .input-field {
      flex-basis: 32.5%;
      &:last-child {
        flex-basis: 32.5%;
      }
    }
  }
  .button-flex {
    justify-content: flex-end;
    padding: 1rem !important;
    .v-btn {
      padding: 1rem !important;
      flex-basis: unset !important;
      &:nth-child(2) {
        margin: 0 0.5rem !important;
      }
    }
  }
  .date-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .input-field {
      flex-basis: 49%;
      margin: 0.2rem 0;
      &:last-child {
        flex-basis: 100%;
      }
    }
  }
}
</style>