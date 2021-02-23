<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1>This is a recepten list</h1>
        <v-item-group>
          <v-item v-for="(v, i) in recepten" :key="v.id">
            <a>Recept {{ v.naam }} {{ i }}</a>
          </v-item>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      recepten: [{ id: 1, naam: "one" }],
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
