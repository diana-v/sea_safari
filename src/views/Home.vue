<template>
    <div>
        <vue-scroll-snap fullscreen>

<!--            <div id="pp-nav" class="right eut-dark" style="color: rgb(0, 0, 0); margin-top: -53.5px;">-->
<!--                <ul>-->
<!--                    <li data-tooltip="">-->
<!--                        <a class="nav-btn active" href="#home">-->
<!--                            <span style="border-color: rgb(0, 0, 0);"> </span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li data-tooltip="">-->
<!--                        <a class="nav-btn" href="#about">-->
<!--                            <span style="border-color: rgb(0, 0, 0);"> </span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li data-tooltip="">-->
<!--                        <a class="nav-btn" href="#offers">-->
<!--                            <span style="border-color: rgb(0, 0, 0);"> </span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li data-tooltip="">-->
<!--                        <a class="nav-btn" href="#safety">-->
<!--                            <span style="border-color: rgb(0, 0, 0);"> </span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li data-tooltip="">-->
<!--                        <a class="nav-btn" href="#review">-->
<!--                            <span style="border-color: rgb(0, 0, 0);"> </span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <li data-tooltip="">-->
<!--                        <a class="nav-btn" href="#contact">-->
<!--                            <span style="border-color: rgb(0, 0, 0);"> </span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>-->

            <div class="item home-container" id="home">
                <v-carousel
                        cycle
                        height="100%"
                        hide-delimiter-background
                        :show-arrows="false"
                        hide-delimiters
                >
                    <v-carousel-item
                            eager
                            v-for="(slide, i) in slides"
                            :key="i"

                    >
                        <v-img v-bind:src="slide"
                               eager
                               height="100%">
                            <app-toolbar></app-toolbar>
                            <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                            >
                                <h1 class="home-header">R.I.B. CHARTER EXPERIENCE</h1>
                            </v-row>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>

                <!--                <div class="home-content">-->
                <!--                    &lt;!&ndash;                    <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"><i&ndash;&gt;-->
                <!--                    &lt;!&ndash;                            class="fab fa-instagram fa-2x"></i></a>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                    <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank"><i&ndash;&gt;-->
                <!--                    &lt;!&ndash;                            class="fab fa-facebook-f fa-2x"></i></a>&ndash;&gt;-->
                <!--                </div>-->
            </div>

            <s_about></s_about>
            <s_offers></s_offers>
            <s_safety></s_safety>
            <s_review></s_review>
            <s_contact></s_contact>

        </vue-scroll-snap>
    </div>
</template>

<script>
    import about_section from "../components/home/about";
    import offers_section from "../components/home/offers";
    import safety_section from "../components/home/safety";
    import review_section from "../components/home/review";
    import contact_section from "../components/home/contact";
    import toolbar from '../components/toolbar'
    import VueScrollSnap from "vue-scroll-snap";


    export default {
        components: {
            's_about': about_section,
            's_offers': offers_section,
            's_safety': safety_section,
            's_review': review_section,
            's_contact': contact_section,
            'app-toolbar': toolbar,
            'vue-scroll-snap': VueScrollSnap
        },
        data() {
            return {
                slides: [
                    // {src: require('../assets/slide_1.jpg')},
                    {src: require ('../assets/slide_2.jpg')},
                    // {src: require('../assets/slide_3.jpg')},
                ]
            }
        },

        mounted() {
            var header = document.getElementById("pp-nav");
            var btns = header.getElementsByClassName("nav-btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active");
                    current[0].className = current[0].className.replace(" active", "");
                    this.className += " active";
                });
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

    html, body {
        font-family: 'Hind', 'Roboto';
    }

    /*#pp-nav.right {*/
    /*    right: 2%;*/
    /*}*/

    /*#pp-nav {*/
    /*    position: fixed;*/
    /*    z-index: 100;*/
    /*    top: 50%;*/
    /*    opacity: 1;*/
    /*}*/

    /*#pp-nav li, .pp-slidesNav li {*/
    /*    display: block;*/
    /*    width: 14px;*/
    /*    height: 13px;*/
    /*    margin: 7px;*/
    /*    position: relative;*/
    /*}*/

    /*#pp-nav li a, .pp-slidesNav li a {*/
    /*    display: block;*/
    /*    position: relative;*/
    /*    z-index: 1;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    cursor: pointer;*/
    /*    text-decoration: none;*/
    /*}*/

    /*#pp-nav span, .pp-slidesNav span {*/
    /*    border-radius: 50%;*/
    /*    position: absolute;*/
    /*    z-index: 1;*/
    /*    height: 4px;*/
    /*    width: 4px;*/
    /*    left: 50%;*/
    /*    top: 50%;*/
    /*    margin: -2px 0 0 -2px;*/
    /*    -webkit-transition: all 0.1s ease-in-out;*/
    /*    -moz-transition: all 0.1s ease-in-out;*/
    /*    -o-transition: all 0.1s ease-in-out;*/
    /*    transition: all 0.1s ease-in-out;*/
    /*}*/

    /*#pp-nav.eut-dark li span {*/
    /*    background-color: #000000;*/
    /*}*/

    /*#pp-nav li .active span, .pp-slidesNav .active span {*/
    /*    height: 12px;*/
    /*    width: 12px;*/
    /*    margin: -6px 0 0 -6px;*/
    /*    border-radius: 100%;*/
    /*}*/

    /* */
    /* HOME */
    /* */
    .home-header {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 30px;
        margin-top: 15%;
        font-size: 50px;
        font-weight: 900;
        color: rgb(145, 22, 13);
        /*color: #17486b;*/
        width: 100%;
    }

    .home-container {
        min-height: 100vh;
        overflow: auto;
    }

    /*.home-content {*/
    /*    padding-top: 50vh;*/
    /*}*/

</style>
