<template>
  <div id="nav-dafult">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="/">{{ $t("slogan") }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-col class="mr-4">
              <SelectLanguage />
            </b-col>
          </b-nav-form>
          <b-nav-form>
            <b-button
              class="mx-2 my-sm-0"
              @click="buttonFunctions(`sign-in`)"
              >{{ $t("user.sign_in") }}</b-button
            >
            <b-button
              class="mx-2 my-sm-0"
              @click="buttonFunctions(`register`)"
              >{{ $t("user.register") }}</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import SelectLanguage from "./SelectLanguage";
export default {
  name: "Navbar",
  components: {
    SelectLanguage,
  },
  data() {
    return {};
  },
  methods: {
    buttonFunctions(val) {
      if (val == "sign-in") {
        this.$router.push({
          name: "SignIn",
          params: { id: "sign-in" },
        });
      } else if (val == "register") {
        this.$router.push({
          name: "Register",
          params: { id: "register" },
        });
      }
    },
  },
};
</script>

<style></style>
