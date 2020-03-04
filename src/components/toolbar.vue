<template>
    <div>
        <v-toolbar color="transparent" elevation="0">
            <v-toolbar-title>
                <router-link to="/">
                    <v-img class="mr-3" src="@/assets/wetsuit.png" height="40px" width="50px"></v-img>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="d-none d-md-block" @mouseover="show_active = false" @mouseleave="show_active = true">
                <v-btn :href="item.link" class="nav-btn toolbar-link" text v-for="(item, index) in menu" :ripple="false" color="transparent"
                       :key="index">{{ item.title }}
                </v-btn>
            </v-toolbar-items>

            <v-toolbar-items>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn class="d-block d-md-none toolbar-link"
                               v-on="on"
                               text
                               color="transparent"
                               elevation="0">
                            <v-icon class="material-icons collapsed-btn">menu</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                                class="nav-btn"
                                :href="item.link"
                                v-for="(item, index) in menu"
                                :key="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "app",
        data: () => ({
            show_active : true,
            menu: [
                {title: 'Apie Mus', link: '/#about'},
                {title: 'Pasiūlymai', link: '/#offers'},
                {title: 'Saugumas', link: '/#safety'},
                {title: 'Atsiliepimai', link: '/#review'},
                {title: 'Kontaktai', link: '/#contact'},
            ]
        }),
        methods: {
            activeLink: function (expectedLink) {
                if (this.$route.fullPath == expectedLink && this.show_active == true) {
                    return 'active'
                }
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

    html, body {
        font-family: 'Hind', 'Roboto';
    }
    .toolbar-link {
        font-size: 20px;
        padding: 15px 20px !important;
        color: #0c3c60 !important;
        text-decoration: none;
        display: inline-block;
        position: relative;
    }
    .toolbar-link:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 3px;
        left: 50%;
        position: absolute;
        background: rgb(145, 22, 13);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    a.nav-btn:nth-child(1) > span:nth-child(1),
    a.nav-btn:nth-child(2) > span:nth-child(1),
    a.nav-btn:nth-child(3) > span:nth-child(1),
    a.nav-btn:nth-child(4) > span:nth-child(1),
    a.nav-btn:nth-child(5) > span:nth-child(1),
    .collapsed-btn {
        color: #17486b !important;
    }
    .toolbar-link:hover:after {
        width: 100%;
        left: 0;
    }

    .toolbar-link.active:after {
        width: 100%;
        left: 0;
    }
</style>