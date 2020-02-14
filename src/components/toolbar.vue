<template>
<nav class="navbar navbar-expand-lg navbar-light bg-none">
    <a class="navbar-brand" href="/">Sea Safari</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav ml-auto">
            <li class="nav-item">
                <a class="nav-link toolbar-link" href="/apie-mus">Apie Mus</a>
            </li>
            <li class="nav-item">
                <a class="nav-link toolbar-link" href="/pasiulymai">Pasiūlymai</a>
            </li>
            <li class="nav-item">
                <a class="nav-link toolbar-link" href="/kontaktai">Kontaktai</a>
            </li>
        </ul>
    </div>
</nav>
</template>

<style>
    .toolbar-link {
        font-size: 24px;
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
        background: red;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    .toolbar-link:hover:after {
        width: 100%;
        left: 0;
    }
</style>
<!--<template>-->
<!--    <v-toolbar flat class="transparent">-->
<!--    <v-toolbar-title>-->
<!--        <router-link to="/">-->
<!--            <v-text class="nav-btn">Sea Safari ZAZA</v-text>-->
<!--            &lt;!&ndash;            <v-img class="mr-3" src="@/assets/tl_logo.png" height="40px" width="50px"></v-img>&ndash;&gt;-->
<!--        </router-link>-->
<!--    </v-toolbar-title>-->
<!--    <v-spacer></v-spacer>-->
<!--    <v-toolbar-items class="d-none d-md-block">-->
<!--        <v-btn active-class="zaza" :to="item.link" class="nav-btn" text v-for="(item, index) in menu"-->
<!--               :key="index">{{ item.title }}-->
<!--        </v-btn>-->
<!--    </v-toolbar-items>-->

<!--    <v-toolbar-items :ripple="false">-->
<!--        <v-menu offset-y>-->
<!--            <template v-slot:activator="{ on }">-->
<!--                <v-btn :ripple="false"-->
<!--                       class="d-block d-md-none nav-small"-->
<!--                       v-on="on">-->
<!--                    <v-icon class="material-icons">menu</v-icon>-->
<!--                </v-btn>-->
<!--            </template>-->
<!--            <v-list :ripple="false">-->
<!--                <v-list-item-->
<!--                        class="nav-btn"-->
<!--                        :to="item.link"-->
<!--                        v-for="(item, index) in menu"-->
<!--                        :key="index">-->
<!--                    <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--                </v-list-item>-->
<!--            </v-list>-->
<!--        </v-menu>-->
<!--    </v-toolbar-items>-->
<!--</v-toolbar>-->
<!--</template>-->



<!--<script>-->
<!--  export default {-->
<!--      data: () => ({-->
<!--          menu: [-->
<!--              {title: 'Apie Mus', link: '/apie-mus'},-->
<!--              {title: 'Pasiūlymai', link: '/pasiulymai'},-->
<!--              {title: 'Kontaktai', link: '/kontaktai'},-->
<!--          ]-->
<!--      }),-->
<!--  }-->
<!--</script>-->
