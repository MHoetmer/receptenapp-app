<template>
  <v-app>
    <v-app-bar color="rgb(228, 245, 239)" dark app>
      <v-toolbar-title class="headline text-uppercase">
        <span color="rgb(44, 62, 81)">Recepten</span>
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn-toggle v-model="text" group>
        <v-btn color="deep-purple">
          <router-link to="/" class="btn">Home</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/about" class="btn">About</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/recepten" class="btn">Recepten</router-link>
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>
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
    return {};
  },
  created() {},
};
</script>
<style scoped>
.btn {
  color: rgb(104, 57, 183) !important;
  text-decoration: none;
}
.title {
  color: rgb(92, 192, 143);
}
</style>
