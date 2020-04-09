<template>
  <div id="app">
    <Header />

    <main >
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: `LayoutDefault`,
  components: { Header },
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
</style>

