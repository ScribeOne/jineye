<template>
  <div>
    <h1>Hello</h1>
    <D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>
  </div>
</template>

<script>
import { D3BarChart } from "vue-d3-charts";
import LayoutDefault from "../layouts/LayoutDefault.vue";
export default {
  name: "home",
  components: { D3BarChart},
  data() {
    return {
      chart_title: "Your title goes here",
      chart_source: "Your source goes here",
      chart_data: [
        //...
        { hours: 1648, production: 9613, year: "2007" },
        { hours: 2479, production: 6315, year: "2008" },
        { hours: 3200, production: 2541, year: "2009" }
      ],
      chart_config: {
        key: "year",
        currentKey: "",
        values: ["hours"],
        axis: {
          yTicks: 3
        },
        color: {
          default: "#222f3e",
          current: "#41B882"
        }
      }
    };
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
  created() {
    this.$emit("update:layout", LayoutDefault);
  }
};
</script>


<style scoped>
</style>