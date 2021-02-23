<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1>This is recept nr {{ this.id }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
