<template>
    <v-toolbar flat class="transparent">
    <v-toolbar-title>
        <router-link to="/">
            <v-text class="nav-btn">Sea Safari ZAZA</v-text>
            <!--            <v-img class="mr-3" src="@/assets/tl_logo.png" height="40px" width="50px"></v-img>-->
        </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-none d-md-block">
        <v-btn active-class="zaza" :to="item.link" class="nav-btn" text v-for="(item, index) in menu"
               :key="index">{{ item.title }}
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items :ripple="false">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                       class="d-block d-md-none nav-small"
                       v-on="on">
                    <v-icon class="material-icons">menu</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                        class="nav-btn"
                        :to="item.link"
                        v-for="(item, index) in menu"
                        :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar-items>
</v-toolbar>
</template>



<script>
  export default {
      data: () => ({
          menu: [
              {title: 'Apie Mus', link: '/apie-mus'},
              {title: 'Pasiūlymai', link: '/pasiulymai'},
              {title: 'Kontaktai', link: '/kontaktai'},
          ]
      }),
  }
</script>
