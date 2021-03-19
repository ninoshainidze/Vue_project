<template>
  <div class="sign_up">
    <div
      class="container text-center"
      style="margin-bottom: 100px; margin-top: 100px"
    >
      <h1>Sign up</h1>
      <ValidationObserver>
        <form>
          <ValidationProvider
            :name="$t('name')"
            rules="required|max:10|min:2"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="name"
                :placeholder="$t('name')"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            :name="$t('lastname')"
            rules="required|max:15|min:2"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="lastname"
                :placeholder="$t('lastname')"
              />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
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
        </form>
      </ValidationObserver>
      <div class="Submit_buttom">
        <button type="submit" >
          <router-link to="/Login">
            <base-button type="success" @click="onSubmit()">{{
              $t("Submit")
            }}</base-button>
          </router-link>  
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";
const db = firebase.firestore();

import swal from "sweetalert2";

import "sweetalert2/dist/sweetalert2.css";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      password: "",
      role:"user",
      locale: "en",
      items: [],
    };
  },
  methods: {
    showSwal(type) {
      if (type === "success") {
        swal.fire({
          title: this.$t('Successfully_Registered'),
          text: "now you can login to the page",
          buttonsStyling: false,
          confirmButtonClass: "btn btn-success",
          icon: "success",
        });
        
      }
    },
    
    onSubmit() {
        db.collection('members')
        .doc()
        .set({
            role:this.role,
            name: this.name,
            lastname: this.lastname,
            username: this.username,
            password: this.password,
        })
        .then(() => {
          this.showSwal('success');
        });
      
    },
  },
};
</script>

<style scoped>
.Submit_buttom button{
    background: #00bcd4;
    border:none !important;
    border-radius: 50px;
    height: 40px;
    width: 90px;
}
.sign_up input {
  width: 50%;
  margin-left: 25%;
}
.sign_up span,
.error {
  color: red;
}
</style>