<template>
  <v-form @submit.prevent>
    <p class="btn--text font-weight-bold my-2 mt-4">Bill From</p>
    <div class="input-field">
      <label class="form--text font-weight-bold" for="street_address">Street Address</label>
      <input type="text" required class="secondary pa-2 text--text" id="street_address"/>
    </div>
    <div class="form-flex">
      <div class="input-field">
        <label class="form--text font-weight-bold" for="city">City</label>
        <input type="text" required class="secondary pa-2 text--text" id="city" />
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="post_code">Post Code</label>
        <input type="text" required class="secondary pa-2 text--text"  id="post_code"/>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="country">Country</label>
        <input type="text" required class="secondary pa-2 text--text" id="country"  />
      </div>
    </div>
    <p class="btn--text font-weight-bold my-2 mt-4">Bill To</p>
    <div class="input-field">
      <label class="form--text font-weight-bold" for="name">Client's Name</label>
      <input type="text" required class="secondary pa-2 text--text" id="name"  />
    </div>
    <div class="input-field">
      <label class="form--text font-weight-bold" for="email">Client's Email</label>
      <input type="email" required class="secondary pa-2 text--text"  id="email" />
    </div>
    <div class="input-field">
      <label class="form--text font-weight-bold" for="client_address">Street Address</label>
      <input type="text" required class="secondary pa-2 text--text" id="client_address" />
    </div>
    <div class="form-flex">
      <div class="input-field">
        <label class="form--text font-weight-bold" for="client_city">City</label>
        <input type="text" required class="secondary pa-2 text--text" id="client_city" />
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="client_post_code">Post Code</label>
        <input type="text" required class="secondary pa-2 text--text" id="client_post_code" />
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="client_country">Country</label>
        <input type="text" required class="secondary pa-2 text--text" id="client_country" />
      </div>
    </div>
    <div class="date-flex">
      <div class="input-field">
        <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <label class="form--text font-weight-bold" for="date">Invoice Date</label>
            <v-text-field
              rounded 
              :value="computedDateFormattedDatefns"
              dense
              class="secondary pt-2"
              v-model="date"
              append-icon="mdi-calendar"
              readonly
              v-on="on"
              v-bind="attrs"></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              @input="menu = false"></v-date-picker>
        </v-menu>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="project_description">Payment Terms</label>
        <v-select
          v-model="select"
          :items="lists"
          required
          dense
          class="secondary pt-2"
          rounded
        ></v-select>
      </div>
      <div class="input-field">
        <label class="form--text font-weight-bold" for="project_description">Project Description</label>
        <input type="text" required class="secondary pa-2 text--text" id="project_description" />
      </div>
    </div>
    <div class="item_list">
      <h3 class="form--text font-weight-bold my-2 mt-4">Item List</h3>
      <div class="items" v-for="item in items" :key="item.index">
        <div class="input-field">
          <label class="form--text font-weight-bold" for="city">Item Name</label>
          <input type="text" required class="secondary pa-2 text--text" id="item_name" />
        </div>
        <div class="item-flex">
          <div class="input-field">
            <label class="form--text font-weight-bold" for="quantity">Qty.</label>
            <input type="number" required class="secondary pa-2 text--text"  id="quantity"/>
          </div>
          <div class="input-field">
            <label class="form--text font-weight-bold" for="price">Price</label>
            <input type="number" required class="secondary pa-2 text--text"  id="price"/>
          </div>
          <v-btn text class="text-capitalize text--text del-btn" @click="deleteItem"><v-icon>mdi-delete</v-icon></v-btn>
        </div>
      </div>   
      <div class="text-capitalize form--text secondary rounded-pill pa-3 mt-5 d-block text-center add-btn my-3" @click="incrementItem"><v-icon class="form--text">mdi-plus</v-icon> Add New Item</div>
    </div>
    <div class="submit-button button-flex secondary pa-2 py-4 rounded-lg">
      <v-btn class="text-capitalize text--text rounded-pill submit-btn primary font-weight-bold" depressed>Discard</v-btn>
      <v-btn class="text-capitalize text--text rounded-pill submit-btn form font-weight-bold" depressed>Save as Draft</v-btn>
      <v-btn class="text-capitalize text--text rounded-pill submit-btn btn font-weight-bold" depressed>save & Send</v-btn>
    </div>
  </v-form>
</template>

<script>
import { format, parseISO } from 'date-fns'
export default {
  data: () => ({
    date: null,
    menu: false,
    modal: false,
    items: 1,
    select: null,
    lists: [
      'Net 1 day',
      'Net 7 days',
      'Net 30 days',
    ]
  }),
  computed: {
    computedDateFormattedDatefns () {
      return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
    },
  },
  methods: {
    incrementItem() {
      this.items++
    },
    deleteItem() {
      // this.items = this.items.filter(item => item != item)
      console.log('deleted')
    }
  }
}
</script>

<style scoped lang="scss">
.input-field {
  margin: 1rem 0;
  input {
    border: none;
    outline: none;
    display: block;
    width: 100%;
    border-radius: 5px;
    margin: 0.4rem 0;
    padding: 0.6rem 1rem !important;
    border: solid 1px #514D57 !important;
    transition: ease 0.4s border;
  }
  input:focus {
    border: solid 1px #7c5dfa !important;
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
.button-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem !important;
  .v-btn {
    padding: 0.5rem !important;
    margin: 0 !important;
    &:nth-child(2) {
      margin: 0 0.1rem !important;
    }
  }
}
.v-text-field--rounded {
  border-radius: 5px !important;
}
.v-input {
  height: 40px !important;
  margin: 0.4rem 0 !important;
}
.v-list {
  background: #252945 !important;
  .theme--light & {
    background: #ffffff !important;
  }
}
.add-btn {
  cursor: pointer;
}
.del-btn {
  margin: 1.5rem 0 0 0 !important;
  padding: 0 !important;
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
    .v-btn {
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