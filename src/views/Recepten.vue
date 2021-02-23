<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1>Jouw recepten</h1>
      </v-col>
    </v-row>

    <recepten-table v-if="recepten" :data="recepten" />
  </v-container>
</template>

<script>
import ReceptenTable from "../components/ReceptenTable.vue";
import axios from "axios";
import authHeader from "../services/auth-header";

export default {
  components: { ReceptenTable },
  data() {
    return {
      recepten: [],
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var vm = this;
      axios
        .get("http://localhost:8080/recepten", { headers: authHeader() })
        .then(function(response) {
          return response.data;
        })
        .then(function(data) {
          vm.recepten = data;
        });
    },
  },
};
</script>

<style scoped></style>
