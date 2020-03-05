<template>
  <v-app>
    <div class="app">
      <router-view></router-view>
    </div>
  </v-app>
</template>


<script>
  export default {
    name: "app",
  }
</script>

<style lang="scss">
  #app {
    font-family:"Hind", tahoma, verdana, arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
