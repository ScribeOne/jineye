<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="default">
      <b-navbar-brand href="#">
        <img src="@/assets/logo.png" height="42" width="42" />
      </b-navbar-brand>
      <b-navbar-brand href="#">JinEye</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Devices</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>


<style scoped>
</style>