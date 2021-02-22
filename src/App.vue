<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn>
        <router-link to="/">Home</router-link>
      </v-btn>

      <v-btn>
        <router-link to="/about">About</router-link>
      </v-btn>

      <v-btn text>
        <router-link to="/recepten">Recepten</router-link>
      </v-btn>
    </v-app-bar>
    <div class="recepten">
      <v-item-group>
        <v-item v-for="e in this.recepten" :key="e.name">
          <router-link :to="{ name: 'Recept', params: { id: e.id } }"
            >Recept {{ e.id }}</router-link
          >
        </v-item>
      </v-item-group>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

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
    fetch("http://localhost:8080/recepten")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        for (var r = 0; r < data.length; r++) {
          //this.recepten.add({ id: data[r].id, name: data[r].naam });
        }
        console.log("data!", data);
      });
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
v-item {
  list-style-type: none;
  padding: 0;

  color: #42b983;
}
v-item {
  margin: 0 10px;
}
v-btn {
  color: #42b983;
}
</style>
