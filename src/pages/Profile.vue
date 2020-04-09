<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
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
              <p>{{userprofile.adress}}</p>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <p>Birth Date</p>
            </b-col>
            <b-col>
              <p>{{userprofile.birth_date}}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-button ref="mybutton" @click="getrefs">Get refs</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LayoutLoggedIn from "../layouts/LayoutLoggedIn.vue";
export default {
  name: "profile",
  components: {},
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userprofile() {
      return this.$store.state.userprofile;
    },
    userdevices() {
      return this.$store.state.userdevices;
    }
  },

  created() {
    this.$emit("update:layout", LayoutLoggedIn);
  },

  mounted() {
    this.$store.dispatch("getuserdetails");
    this.$store.dispatch("getuserdevices");
  },

  methods: {
    getrefs: function() {
        console.log(this.$refs)
        this.$refs.mybutton.innerHTML = "Hello"
    },
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