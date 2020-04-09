<template>
  <b-container fluid="md" class="some-container">
    <b-row>
      <b-col>
        <div>
          <h1>Device Records</h1>
        </div>

        <b-button @click="loaddata">Click</b-button>

        <p>{{test}}</p>

        <D3BarChart :config="chart_config" :datum="devicerecords"></D3BarChart>

        <div>Router paramasd id: {{$route.params.id}}</div>

        <div>
          <b-table hover :items="devicerecords" :fields="fields"></b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LayoutLoggedIn from "../layouts/LayoutLoggedIn.vue";
import { D3BarChart } from "vue-d3-charts";
export default {
  name: "devicerecords",
  components: { D3BarChart },
  data() {
    return {
      fields: [
        {
          key: "created_at",
          label: "Time",
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
      chart_config: {
        key: "created_at",
        values: ["field1", "field2"],
        axis: {
          yTicks: 5,
          yFormat: ".0f"
        },
        color: {
          default: "#222f3e",
          current: "#41B882"
        }
      }
    };
  },
  watch: {
    $route(to) {
      console.log(to);
    }
  },
  methods: {
    loaddata() {
      this.$store.dispatch("getdevicerecords", this.$route.params.id);
    }
  },
  computed: {
    devicerecords() {
      return this.$store.state.devicerecords.slice(-4);
    },
    test() {
      return true;
    }
  },
  created() {
    this.$emit("update:layout", LayoutLoggedIn);
  },
  mounted() {
    this.$store.dispatch("getdevicerecords", this.$route.params.id);
  }
};
</script>


<style scoped>
</style>