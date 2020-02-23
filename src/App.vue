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
    font-family:"lucida grande", tahoma, verdana, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .app {
    background-image: url("https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/59979457_1078530229013606_565074729577218048_n.jpg?_nc_cat=101&_nc_ohc=KM1XAHtrACYAX-FOKU8&_nc_ht=scontent.fvno2-1.fna&oh=35142619fc576dc7c473550a8c05b330&oe=5EC732C6");  -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }

  .nav-btn {
    font-size: 20px !important;
    text-transform: none !important;
  }

  .nav-btn:hover {
    text-decoration: none;
  }

  .nav-small {
    background-color: rgba(255,255,255, 0) !important;
    box-shadow: none !important;
  }

  /*.v-toolbar__content {*/
  /*  background: rgba(255,255,255, 0) !important;*/
  /*}*/

  .v-btn__content {
    color: #0c3c60 !important;
  }
</style>
