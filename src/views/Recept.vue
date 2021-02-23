<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1>{{ this.recept.naam }}</h1>
        <h3>Ingredienten</h3>
      </v-col>
    </v-row>

    <recept-table v-if="recept" :data="recept" />
  </v-container>
</template>

<script>
import ReceptTable from "../components/ReceptTable.vue";
export default {
  components: { ReceptTable },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      var vm = this;
      const res = await fetch(
        `http://localhost:8080/recept/${vm.$route.params.id}`
      ).catch((err) => console.log("ERR" + err));
      const data = await res.json();
      this.$forceUpdate();
      vm.recept = data;
    },
  },
};
</script>
