<template>
  <div>
    <!-- <ul id="devicelist">
      <li v-for="device in userdevices" :key="device.device_id">
        {{device.device_name}}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "about",
  props: {},
  data() {
    return {};
  },
  computed: {
    userdevices(){
      return this.$store.state.userdevices
    }
  }
  
};
</script>


<style scoped>
</style>