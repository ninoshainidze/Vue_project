<template>
  <div>
    <div class="container" style="margin-top: 100px">
      <div class="col-sm-12 text-center">
        <h1>{{ $t("welcomeMassage") }}</h1>
        <img alt="Vue logo" src="../assets/icons8-whois-100.png" />
      </div>
    </div>

    <div
      class="container text-center"
      style="margin-bottom: 100px; margin-top: 40px"
    >
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            :name="$t('username')"
            rules="required|alpha|max:5|min:3"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="username"
                :placeholder="$t('username')"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            :name="$t('password')"
            rules="required|max:5|min:2"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                :placeholder="$t('password')"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <button>{{$t("Submit")}}</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>

import firebase from "../firebase";
const db = firebase.firestore();

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      role: "",
      locale: "en",
      users: {},
    };
  },
  methods: {
    onSubmit() {

      db.collection("members")
        .get()
        .then((querySnapshot) => {
    
          querySnapshot.forEach((doc) => {
            
            this.users = doc.data();
            
            if (
              this.username == this.users["username"] &&
              this.password == this.users["password"]
            ) {
              this.$store.state.user.role = this.users["role"];
              localStorage.setItem("role", this.users["role"]);
              this.$store.commit("logIn");
              this.$router.push(this.$store.state.user.role);
            }
            
          });
        });
    },
  },
};
</script>

<style scoped>
.form-group span,
.error {
  color: red;
}
.form-group input {
  width: 25%;
  margin-left: 37.5%;
}
 button{
    background: #00bcd4;
    border:none !important;
    border-radius: 50px;
    height: 40px;
    width: 90px;
}
</style>