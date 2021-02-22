<template>
  <div class="recepten">
    <h1>This is a recepten list</h1>

    <v-item-group>
      <v-item v-for="e in this.recepten" :key="e.name">
        <br />
        <router-link :to="{ name: 'Recept', params: { id: e.id } }"
          >Recept {{ e.id }}</router-link
        >
      </v-item>
    </v-item-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recepten: [
        { id: 1, name: "one" },
        { id: 2, name: "two" },
        { id: 3, name: "three" },
        { id: 4, name: "four" },
        { id: 5, name: "five" },
      ],
    };
  },
  mounted() {
    console.log("mounted");
    fetch("http://localhost:8080/recepten").then((response) => {
      console.log("recepten!", response);
      for (var r = 0; r < response.lengt; r++) {
        this.recepten.add({ id: r.id, name: r.naam });
      }
      console.log("recepten!", response);
    });
  },
};
</script>

<style scoped></style>
