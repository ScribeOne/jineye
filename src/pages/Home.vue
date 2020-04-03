<template>
  <div>
    <h1>Hello</h1>
    <b-button @click="test">Click me</b-button>
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    info() {
      return this.$store.state.info;
    }
  },
  methods: {
    test() {
      this.$store.dispatch("test");
    }
  }, 
  
}
</script>


<style scoped>
</style>