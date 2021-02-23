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
      fetch("http://localhost:8080/recepten")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          vm.recepten = data;
        });
    },
  },
};
</script>

<style scoped></style>
