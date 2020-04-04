<template>
  <b-container fluid="md" class="some-container">
    <b-row>
      <b-col>
        <Sidebar></Sidebar>
      </b-col>
      <b-col cols="8">

        <DeviceDetail v-for="device in devices" :device="device" :key="device.id"></DeviceDetail>

      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import DeviceDetail from "../components/DeviceDetail.vue";

export default {
  name: "devices",
  components: {
    Sidebar,
    DeviceDetail
  },
  data() {
    return {};
  },
  methods: {
    getdevices: function() {
      this.$store.dispatch("getuserdevices");
    }
  },
  computed: {
    devices() {
      return this.$store.state.userdevices;
    }
  },
  mounted() {
    console.log("hello")
    this.getdevices;
  }
};
</script>


<style scoped>
</style>