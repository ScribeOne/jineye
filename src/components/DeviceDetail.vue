<template>
  <b-container fluid="sm" class="device-container">
    <b-row>
      <b-col>
        <div>
          <h1>{{device.device_name}}</h1>
          <div>
            <router-link :to="detailpath">records</router-link>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Name</p>
      </b-col>
      <b-col>
        <p>{{device.device_name}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>ID</p>
      </b-col>
      <b-col>
        <p>{{device.device_id}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Longitude</p>
      </b-col>
      <b-col>
        <p>{{device.longitude}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Latitude</p>
      </b-col>
      <b-col>
        <p>{{device.latitude}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Public</p>
      </b-col>
      <b-col>
        <p>{{device.public}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Field 1</p>
      </b-col>
      <b-col>
        <p>{{device.field1}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Field 2</p>
      </b-col>
      <b-col>
        <p>{{device.field2}}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p>Manufactured</p>
      </b-col>
      <b-col>
        <p>{{device.manufactured}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "devicedetail",
  props: ["device"],
  data() {
    return {};
  },
  computed: {
    detailpath() {
      return "/devicerecords/" + this.device.device_id;
    }
  }
};
</script>


<style scoped>
.device-container {
  background-color: rgba(245, 246, 250,1.0);
  padding: 1rem;
  margin: 2rem;
}
</style>