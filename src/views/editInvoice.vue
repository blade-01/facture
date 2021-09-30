<template>
  <div class="wrapper">
    <v-icon
      class="white--text close rounded-circle pa-2 d-desktop"
      @click="goHome"
      >mdi-close</v-icon
    >
    <div class="add primary px-2">
      <v-container>
        <Back class="d-mobile" />
        <div class="d-flex align-center mt-5">
          <h1>Edit <span class="hash">#</span>{{ id }}</h1>
        </div>
        <Form />
      </v-container>
    </div>
  </div>
</template>

<script>
import Form from "@/components/forms/editForm.vue";
import Back from "@/components/reuseables_/BackButton.vue";
export default {
  name: "Edit",
  props: ["id"],
  components: {
    Form,
    Back,
  },
  methods: {
    goHome() {
      this.$router.push({ name: "single" });
    },
  },
};
</script>

<style scoped lang="scss">
.add {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: -100%;
  z-index: 1000;
  overflow-y: scroll;
  animation: slideUp 0.4s forwards;
  &::-webkit-scrollbar {
    width: 8px;
    background: #141625;
  }
  &::-webkit-scrollbar-thumb {
    background: #7c5dfa;
    border-radius: 50px;
  }
  .hash {
    margin: 0 0 0 0.5rem !important;
    color: #7e88c3;
  }
}
@keyframes slideUp {
  to {
    bottom: 0;
  }
}
.back-btn {
  margin: 0 0 0.6rem 0 !important;
  padding: 0 !important;
}
@media screen and (min-width: 700px) {
  .add {
    width: 60%;
    top: 63px;
    padding: 0 2rem 5rem;
    border-radius: 0 20px 20px 0;
    animation: fadeIn 0.4s forwards;
    opacity: 0;
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  .wrapper {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 63px;
    left: 0;
    overflow: hidden;
  }
  .close {
    position: absolute;
    right: 30%;
    top: 10%;
    border: solid 2px #7c5dfa;
    transition: ease background 0.5s;
    cursor: pointer;
    &:hover {
      background: #7c5dfa;
    }
  }
}
</style>
