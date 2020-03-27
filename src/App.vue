<template>
  <div id="app">
    <Header />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Test msg="Welcome Test" />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Test,
    Header
  }
};
</script>

<style>
#app {
}
</style>
