<template>
  <b-container fluid="md" class="login-container">
    <b-row class="text-center">
      <b-col></b-col>

      <b-col cols="8">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="username:"
              label-for="input-1"
              description="login with your account"
            >
              <b-form-input
                id="input-1"
                v-model="form.username"
                required
                placeholder="Enter username"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="password:"
              label-for="input-2"
              description="login with your account"
            >
              <b-form-input
                type="password"
                id="input-2"
                v-model="form.password"
                aria-describedby="password-help-block"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Login</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form));

      this.login();

     this.$router.push('home');

      /*this.login
        .then(() => {
          console.log(this.$store.getters.loggedIn);
          
        })
        .catch(error => console.log(error));
*/
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
    },
    login() {
      this.$store.dispatch("login", {
        username: this.form.username,
        password: this.form.password
      });
    }
  }
  //created() {
  //  console.log(this.$route);
  //}
};
</script>


<style scoped>
</style>