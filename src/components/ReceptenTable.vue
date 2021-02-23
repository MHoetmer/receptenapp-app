<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      item-key="naam"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      sort-by="naam"
    >
      <template #item.naam="{ item }">
        <router-link :to="`/recept/${item.id}`" class="link">
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
      <template v-slot:body.append>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="bereidingstijd"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
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
      bereidingstijd: "",
      recepten: this.data,
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
          text: "Bereidingstijd",
          align: "start",
          sortable: true,
          value: "bereidingstijd",
          filter: (value) => {
            if (!this.bereidingstijd) return true;
            return value < parseInt(this.bereidingstijd);
          },
        },
        {
          text: "Kosten",
          align: "start",
          sortable: true,
          value: "kosten",
        },
        {
          text: "Ingevoerd door",
          align: "start",
          sortable: true,
          value: "persoon",
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
