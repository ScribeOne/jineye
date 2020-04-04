<template>
  <b-container fluid="md" class="some-container">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div>
          <h1>Device Records</h1>
        </div>

        <b-button @click="loaddata">Click</b-button>

        <div>Router param id: {{$route.params.id}}</div>

        <div>
          <b-table hover :items="devicerecords" :fields="fields"></b-table>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      fields: [
        {
          key: "field1",
          label: "Temperature",
          sortable: true
        },
        {
          key: "field2",
          label: "Humidity",
          sortable: true
        }
      ]
    };
  },
  methods: {
    loaddata() {
      console.log("test123");

      this.$store.dispatch("getdevicerecords", this.$route.params.id);
    }
  },
  computed: {
    devicerecords() {
      return this.$store.state.devicerecords;
    }
  },
  mounted() {
    this.$store.dispatch("getdevicerecords", this.$route.params.id);
  }
};
</script>


<style scoped>
</style>