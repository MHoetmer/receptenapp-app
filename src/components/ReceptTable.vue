<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="recept.ingredienten"
      item-key="naam"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      sort-by="naam"
    >
      <template #item.naam="{ item }">
        <router-link :to="`/ingredient/${item.id}`" class="link">
          {{ item.naam }}
        </router-link>
      </template>
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: { data: Array },
  data() {
    return {
      search: "",
      kosten: "",
      recept: this.data,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Naam",
          align: "start",
          sortable: true,
          value: "naam",
        },
        {
          text: "Hoeveelheid",
          align: "start",
          sortable: true,
          value: "hoeveelheid",
        },
      ];
    },
    methods: {
      filterOnlyCapsText(value, search) {
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value
            .toString()
            .toLocaleUpperCase()
            .indexOf(search) !== -1
        );
      },
    },
  },
};
</script>
<style scoped>
.link {
  font: roboto !important;
  color: rgb(104, 57, 183) !important;
  text-decoration: none;
}
</style>
