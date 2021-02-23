<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <br />
        <v-container>
          <v-row align="center" justify="center" v-if="number > 0">
            <v-img
              :src="require(`@/assets/image${this.number}.jpg`)"
              max-width="60%"
              alt="Het hoofd en de romp van een geslagen mannetje;
          het vrouwtje heeft een groot hoofd en lange scherpe tanden"
            ></v-img>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return { number: 8, min: 1, max: 9 };
  },
  mounted() {
    this.getRandomNumber();
  },
  created() {
    this.getRandomNumber();
  },
  methods: {
    getRandomNumber: function() {
      this.number = this.generateNumber();
      this.$forceUpdate();
    },
    generateNumber: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
  },
};
</script>
