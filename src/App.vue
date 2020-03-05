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

  .app {
    /*background-image: url("https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/59979457_1078530229013606_565074729577218048_n.jpg?_nc_cat=101&_nc_ohc=KM1XAHtrACYAX-FOKU8&_nc_ht=scontent.fvno2-1.fna&oh=35142619fc576dc7c473550a8c05b330&oe=5EC732C6");  -webkit-background-size: cover;*/
    /*-moz-background-size: cover;*/
    /*-o-background-size: cover;*/
    /*background-size: cover;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  }
</style>
