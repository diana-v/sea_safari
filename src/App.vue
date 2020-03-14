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
    /*font-family:"Hind", tahoma, verdana, arial;*/
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
