<template>
  <b-container fluid="md" class="login-container">
    <b-row>
      <b-col class="test">
        <ul>
          <!-- 
          <li v-for="(fruit, index) in fruits" :key="`fruit-${index}`"></li>
        -->
        </ul>
        <b-button @click="loadItems">api</b-button>
        <b-button @click="getDistinctDevices">distinct items</b-button>
      </b-col>
      <b-col class="test" cols="8">
        <div>
          <div>
            <b-table hover :items="items" :fields="fields"></b-table>
          </div>
        </div>
      </b-col>
      <b-col class="test">
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "devicedetail",
  data() {
    return {
      fields: [
        {
          key: "assosiated_device.device_name",
          label: "Device Name",
          sortable: true
        },
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
      ],
      items: []
    };
  },
  methods: {
    loadItems() {
      this.$store.dispatch("getRecords");
      this.items = this.$store.state.records;
      console.log(this.items);
    },
    getDistinctDevices (){
      //const uniqueArr = [... new Set(this.items.map(data => data.assosiated_device.name))]
      console.log(this.items.keys())
    }

  },
  created() {
    this.loadItems;
  }
};
</script>


<style scoped>
.test {
  padding: 1rem;
  margin: 1rem;
}
</style>