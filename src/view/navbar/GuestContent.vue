<template>
  <div>
    <div class="plain_navbar">
      <b-navbar
        class="fixed-top"
        toggleable="lg"
        type="dark"
        :class="{ change_color: scrollPosition > 50 }"
      >
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/">{{ $t("home") }}</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/about">{{ $t("about") }}</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/OurService">our service</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/contact">{{ $t("contact") }}</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <router-link to="/Login"
              ><button>{{ $t("login") }}</button></router-link
            >
            <router-link to="/SignUp"><button>sign up</button></router-link>
            <languageSwitcher></languageSwitcher>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view />
      <PageFooter />
    </div>
  </div>
</template>


<script>
import languageSwitcher from "../../components/LanguageSwitcheButton/languageSwitcher";
import PageFooter from "../../components/footer/pageFooter";

export default {
  name: "userNavbar",
  data() {
    return {
      scrollPosition: null,
    };
  },
  components: {
    languageSwitcher,
    PageFooter,
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
     
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.plain_navbar a {
  color: black;
}
.plain_navbar button {
  border-radius: 20px;
  background: #00bcd4;
  height: 40px;
  border: none;
}
.change_color {
  background-color: white;
}
</style>