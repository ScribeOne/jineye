<template>
  <div id="app">
    <Header />

    <Sidebar></Sidebar>

    <main class="main">
      <slot />
    </main>

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: `LayoutLoggedIn`,
  components: { Header, Sidebar },
  data() {
    return {
      user: null
    };
  },
  created() {
    // Simulate fetching user data.
    setTimeout(() => {
      this.user = { name: `John Doe` };
    }, 2000);
  }
};
</script>

<style >
.layout {
  height: 100vh;
}
</style>
