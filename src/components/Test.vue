<template>
  <div>
    <h1>{{msg}}</h1>
    <b-container fluid class="test-container">
      <b-row>
        <b-col cols="2">
          <b-button>Button</b-button>
        </b-col>
        <b-col cols="8">
          <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
          </div>
        </b-col>
        <b-col cols="2">3 of 3</b-col>
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
          key: "timestamp",
          sortable: true
        },
        {
          key: "device",
          sortable: true
        },
        
        {
          key: "value01",
          label: "Temperature",
          sortable: true
        },
        {
          key: "value02",
          label: "Humidity",
          sortable: true
          // Variant applies to the whole column, including the header and footer
          //variant: "danger"
        }
      ],
      errors: [],
      items: []
    };
  },
  props: {
    msg: String
  },
  created() {
    axios
      .get("http://localhost:8000/api/measurement/")
      .then(response => {
        this.items = response.data;
        console.log(this.items);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>


<style scoped>
</style>