<template>
  <div>
    <h1>{{msg}}</h1>
    <b-container fluid="sm" class="test-container">
      <b-row class="justify-content-md-center">
        <div class="heading">
          <h2>HutEye records</h2>
        </div>
      </b-row>

      <b-row>
        <b-col cols="2">
          <b-button href="http://www.webc4t.de">Webc4t</b-button>
          <div id="app">
            <p>{{ count }}</p>
            <p>
              <button @click="increment">+</button>
              <button @click="decrement">-</button>
            </p>
          </div>
        </b-col>
        <b-col cols="8">
          <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
          </div>
        </b-col>
        <b-col cols="2">
          <b-container>
            <b-row>
              <h5>Information</h5>
            </b-row>
            <b-row>
              <div>
                <b-table hover :items="info"></b-table>
              </div>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  data() {
    return {
      fields: [
        {
          key: "assosiated_device",
          label: "Device ID",
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
          // Variant applies to the whole column, including the header and footer
          //variant: "danger"
        }
      ],
      different_devices: 0,
      errors: [],
      items: [],
      info: [
        { description: "Different devices", status: 0 },
        { description: "Amount of records", status: 0 },
        { description: "Last request html code", status: 418 },
        { description: "such info", status: "much wow" },
        { description: "Average Temperature", status: 0 },
        { description: "Average Humidity", status: 0 }
      ]
    };
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    getAverageTemp: function() {
      var average = -1;
      var sum = 0;
      this.items.forEach(function(item) {
        sum = sum + item.field1;
      });
      average = sum / this.items.length;
      return average.toFixed(2);
    },
    getAverageHumidity: function() {
      var average = -1;
      var sum = 0;
      this.items.forEach(function(item) {
        sum = sum + item.field2;
      });
      average = sum / this.items.length;
      return average.toFixed(2);
    },
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    }
  },
  props: {
    msg: String
  },
  created() {
    axios
      .get("http://localhost:8000/api/records/")
      .then(response => {
        this.items = response.data;
        console.log(response);
        var resArr = [];
        this.items.forEach(function(item) {
          var i = resArr.findIndex(
            x => x.assosiated_device_id == item.assosiated_device_id
          );
          if (i <= -1) {
            resArr.push({ assosiated_device_id: item.assosiated_device_id });
          }
        });
        this.info[0].status = resArr.length;
        this.info[1].status = this.items.length;
        this.info[2].status = response.status;
        this.info[4].status = this.getAverageTemp();
        this.info[5].status = this.getAverageHumidity();
      })
      .catch(e => {
        this.errors.push(e);
        this.info[1].status = -1;
      });
  }
};
</script>


<style scoped>
.heading {
  padding: 1rem;
}
</style>