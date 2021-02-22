<template>
  <v-app>
    <v-toolbar dense floating>
      <v-toolbar-title class="headline text-uppercase">
        <span>Recepten</span>
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/recepten">Recepten</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
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
<style scoped></style>
