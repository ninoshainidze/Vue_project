<template>
  <div>
    <div class="admin_navbar">
      <b-navbar
        class="fixed-top"
        toggleable="lg"
        type="dark"
        :class="{ change_color: scrollPosition > 50 }"
      >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link to="/admin">{{ $t("dashboard") }}</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/admin/controlPanel">{{
                $t("controlPanel")
              }}</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <languageSwitcher></languageSwitcher>
            <b-nav-item-dropdown right>
              <template #button-content>
                <img src="../../assets/admin.png" alt="" style="width: 30px" />
              </template>
              <b-dropdown-item href="#">
                <router-link to="/user/profile">{{
                  $t("profile")
                }}</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#">
              <router-link to="/" >
                <button @click="logOut">
                    {{ $t("logout") }}
                </button>
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
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
  name: "adminNavbar",
  components: {
    languageSwitcher,
    PageFooter,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    logOut(){
            this.$store.commit("logOut")
        }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.admin_navbar a {
  color: black;
}
</style>