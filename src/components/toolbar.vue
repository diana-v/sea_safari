<template>
<nav class="navbar navbar-expand-lg navbar-light bg-none">
    <b-link class="navbar-brand" to="/">Sea Safari</b-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <div class="nav-wrapper">
        <ul class="navbar-nav nav ml-auto" @mouseover="show_active = false" @mouseleave="show_active = true" >
            <li class="nav-item">
                <b-link class="nav-link toolbar-link" v-bind:class="activeLink('/apie-mus')" href="/#about">Apie Mus</b-link>
            </li>
            <li class="nav-item" >
                <b-link class="nav-link toolbar-link" v-bind:class="activeLink('/pasiulymai')" href="/#offers">Pasiūlymai</b-link>
            </li>
            <li class="nav-item" >
                <b-link class="nav-link toolbar-link" v-bind:class="activeLink('/safety')" href="/#safety">Saugumas</b-link>
            </li>
            <li class="nav-item">
                <b-link class="nav-link toolbar-link" v-bind:class="activeLink('/kontaktai')" href="/#contact" >Kontaktai</b-link>
            </li>
        </ul>
        </div>
    </div>
</nav>
</template>

<script>
    export default {
        data: () => ({
            show_active : true,
            collapse : true
        }),
        methods: {
            activeLink: function (expectedLink) {
                if (this.$route.fullPath == expectedLink && this.show_active == true) {
                    console.log("showing active for", expectedLink)
                    return 'active'
                }
            }
        }
    };
</script>

<style>
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
    .toolbar-link:hover:after {
        width: 100%;
        left: 0;
    }

    .toolbar-link.active:after {
        width: 100%;
        left: 0;
    }
</style>