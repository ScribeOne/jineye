<template>
  <!-- Load an icon library -->

  <!-- <ul id="devicelist">
      <li v-for="device in userdevices" :key="device.device_id">
        {{device.device_name}}
      </li>
    </ul>
    <b-list-group flush class="sidebar">
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Morbi leo risus</b-list-group-item>
      <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
  </b-list-group>-->

  <!-- The sidebar -->
  <div class="sidebar">
    <button class="dropdown-btn" @click="toggleDropdown">
      Records
      <i class="fa fa-caret-down"></i>
    </button>
    <div ref="dropdown" class="dropdown-container">
      <router-link
        v-for="device in userdevices"
        :key="device.device_id"
        :to="'/devicerecords/'+device.device_id"
      >Device {{device.device_id}}</router-link>
    </div>
    <router-link :to="{name : 'devices'}" class-active="active">Geräte</router-link>
    <router-link :to="{name : 'profile'}" class-active="active">Profil</router-link>
    <router-link :to="{name : 'about'}" class-active="active">Info</router-link>
  </div>
</template>

<script>
export default {
  name: "about",
  props: {},
  data() {
    return {};
  },
  methods: {
    toggleDropdown: function() {
      if (this.$refs.dropdown.style.display == "block") {
        this.$refs.dropdown.style.display = "none";
      } else {
        this.$refs.dropdown.style.display = "block";
      }
      console.log(this.$refs);
    },
  },
  computed: {
    userdevices() {
      return this.$store.state.userdevices;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style scoped>
</style>