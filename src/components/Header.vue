<template>
  <div class="topnav">
    <router-link :to="{name : 'home'}">
     <!--  <img src="@/assets/logo.png" height="30" width="30" /> -->
    </router-link>
    <router-link :to="{name : 'profile'}">JinEye</router-link>
    <div class="topnav-right">
      <router-link v-if="!loggedIn" :to="{name: 'login'}">Login</router-link>
      <a v-else @click="logout">{{username}}</a>
    </div>
  </div>

  <!--
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

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!loggedIn" :to="{name : 'login'}">Login</b-nav-item>
          <b-nav-item v-else @click="logout">{{username}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  -->
</template>

<script>
export default {
  name: "Header",
  computed: {
    loggedIn: function() {
      return this.$store.getters.loggedIn;
    },
    username: function() {
      return this.$store.state.username;
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
/* Add a black background color to the top navigation */
.topnav {
  background-color: rgba(245, 246, 250,1.0);
  overflow: hidden;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 3.5rem;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  height: inherit;
  color: rgba(61, 61, 61,1.0);

  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4caf50;
  color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}
</style>