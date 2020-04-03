<template>
  <div id="app">
    <Header />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import Test from "./components/Test.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app {
}
</style>
