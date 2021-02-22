<template>
  <div class="recepten">
    <h1>This is recept nr {{this.id}}</h1>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    }
}
</script>