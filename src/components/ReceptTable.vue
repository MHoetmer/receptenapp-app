<template>
  <div>
    <a>TABLE</a>
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
        <router-link :to="`/ingredient/${item.id}`">
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
          text: "Kosten",
          align: "start",
          sortable: true,
          value: "kosten",
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
