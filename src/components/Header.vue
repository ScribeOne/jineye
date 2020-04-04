<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="default">
      <b-navbar-brand :to="{name : 'home'}">
        <img src="@/assets/logo.png" height="42" width="42" />
      </b-navbar-brand>
      <b-navbar-brand :to="{name : 'home'}">JinEye</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name : 'profile'}">Profile</b-nav-item>
          <b-nav-item :to="{name : 'devices'}">Devices</b-nav-item>
          <b-nav-item :to="{name : 'about'}">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!loggedIn" :to="{name : 'login'}">Login</b-nav-item>
          <b-nav-item v-else @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    loggedIn: function() {
      return this.$store.getters.loggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
    }
  }
};
</script>


<style scoped>
</style>