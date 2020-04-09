<template>
  <div>
    <DeviceDetail v-for="device in devices" :device="device" :key="device.id"></DeviceDetail>
  </div>
</template>

<script>
import LayoutLoggedIn from "../layouts/LayoutLoggedIn.vue";
import DeviceDetail from "../components/DeviceDetail.vue";

export default {
  name: "devices",
  components: {
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
    console.log("hello");
    this.getdevices;
  },
  created() {
    this.$emit("update:layout", LayoutLoggedIn);
  }
};
</script>


<style scoped>
</style>