<template>
  <b-container fluid="md" class="login-container">
    <b-row>
      <b-col>
        <Sidebar></Sidebar>
      </b-col>
      <b-col cols="8">
        <div>
          <h1>User details</h1>
        </div>

        <b-row>
          <b-col>
            <p>Username</p>
          </b-col>
          <b-col>
            <p>{{user.username}}</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p>E-mail address</p>
          </b-col>
          <b-col>
            <p>{{user.email}}</p>
          </b-col>
        </b-row>

         <b-row>
          <b-col>
            <p>Address</p>
          </b-col>
          <b-col>
            <p>{{user.profile.adress}}</p>
          </b-col>
        </b-row>

         <b-row>
          <b-col>
            <p>Birth Date</p>
          </b-col>
          <b-col>
            <p>{{user.profile.birth_date}}</p>
          </b-col>
        </b-row>

        <b-button @click="getuserdetails">userdetails api</b-button>
        <b-button @click="getuserdevices">userdevices api</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row></b-row>
  </b-container>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "about",
  components: {
    Sidebar
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userdevices() {
      return this.$store.state.userdevices;
    }
  },

  mounted() {
    this.$store.dispatch("getuserdetails");
    this.getuserdevices;
  },

  methods: {
    getuserdetails: function() {
      this.$store.dispatch("getuserdetails");
    },
    getuserdevices: function() {
      this.$store.dispatch("getuserdevices");
    }
  }
};
</script>


<style scoped>
</style>