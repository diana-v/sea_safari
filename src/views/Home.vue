<template>
    <div>
        <app-toolbar></app-toolbar>
        <vue-scroll-snap fullscreen>

                        <div id="pp-nav" class="right eut-dark" style="color: rgb(0, 0, 0); margin-top: -53.5px;">
                            <ul>
                                <li data-tooltip="">
                                    <a class="nav-btn active" href="#home">
                                        <span style="border-color: rgb(0, 0, 0);"> </span>
                                    </a>
                                </li>
                                <li data-tooltip="">
                                    <a class="nav-btn" href="#about">
                                        <span style="border-color: rgb(0, 0, 0);"> </span>
                                    </a>
                                </li>
                                <li data-tooltip="">
                                    <a class="nav-btn" href="#offers">
                                        <span style="border-color: rgb(0, 0, 0);"> </span>
                                    </a>
                                </li>
                                <li data-tooltip="">
                                    <a class="nav-btn" href="#safety">
                                        <span style="border-color: rgb(0, 0, 0);"> </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

            <div class="item home-container" id="home">
                <div>
                    <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"><i
                            class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank"><i
                            class="fab fa-facebook-f fa-2x"></i></a>
                </div>
                <h1 class="home-header">R.I.B. Charter Experience</h1>
            </div>

            <div class="item about-container" id="about">
                <div class="about-content">
                    <div class="about-hp">
                    <h2 class="about-header"> Apie Mus</h2>
                    <p class="about-paragraph">Pasinaudokite proga apžiūrėti Lietuvos pajūrio kraštovaizdį ir uosto akvatoriją
                        adrenalino pripildytu ir jaudinančiu būdu.</p>
                    </div>
                    <div class="row about-row">
                        <div class="col-sm-5">
                            <p> Mūsų RIB „Sea Safari“ laive jūs priartėsite prie gamtos
                                ir patirsite nepamirštamus įspūdžius.„Sea Safari“ turi du RIB laivus, varomus 300 AG ir 600 AG varikliais, kurių maksimalus
                                greitis siekia iki 60 mazgų.</p>
                        </div>
                        <div class="col-sm-5">
                            <p> Atstumas Klaipėda - Juodkrantė įveikiamas per 20 min., o
                                Klaipėda - Nida per 45 min. ,,Sea Safari" veikia ir kaip vandens taksi. Tai puiki
                                galimybė išvengti automobilių spūsčių, kelto ir ekologijos mokečio, vykstant į Nidą/Juodkrantę.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item offers-container" id="offers">
                <div class="offers-content">
                    <h2 class="offers-header">Pasiūlymai</h2>
                    <p>Mes teikiame paslaugas įmonių šventėms ir privatiems vakarėliams - gimtadieniai,
                        bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas išvykas į
                        populiariausias Lietuvos pajūrio vietas - Juodkrantė, Nida, Mingės kaimas ir kiti Jūsų
                        pasirinkti maršrutai.</p>

                    <v-carousel
                            cycle
                            height="400"
                            hide-delimiter-background
                    >
                        <v-carousel-item
                                v-for="(card, i) in cards"
                                :key="i"
                        >
                            <v-img
                                    v-bind:src=card.img
                                    height="100%"
                            >
                                <v-row
                                        class="fill-height"
                                        align="center"
                                        justify="center"
                                >
                                    <h4 class="card-title offers-title">{{card.title}}</h4>

                                </v-row>
                            </v-img>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </div>

            <div class="item safety-container" id="safety">
                <div class="safety-content">
                    <h2 class="safety-header">Saugumas</h2>
                    <p>RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai atsakingai atsižvelgia į jūsų
                        asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo
                        priemones:</p>
                    <div class="row safety-row">
                        <div class="col-sm-4">
                            <img class="safety-image">
                        </div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                    </div>
                </div>
            </div>
        </vue-scroll-snap>
    </div>
</template>

<script>
    export default {
        data: () => ({
            cards: [
                {
                    title: 'Ekstremali išvyka į jūrą',
                    description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/jura.jpg')
                },
                {
                    title: 'Išvyka į Mingės kaimą',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/minges-kaimas.jpg')
                },
                {
                    title: 'Išvyka į Juodkrantę',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/juodkrante.jpg')
                },
                {
                    title: 'Ekstremali išvyka į jūrą',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/jura.jpg')
                },
                {
                    title: 'Išvyka į Mingės kaimą',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/minges-kaimas.jpg')
                },
                {
                    title: 'Išvyka į Juodkrantę',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/juodkrante.jpg')
                },
            ],
        }),
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
    #pp-nav.right {
        right: 2%;
    }

    #pp-nav {
        position: fixed;
        z-index: 100;
        /*margin-top: -32px;*/
        top: 50%;
        opacity: 1;
    }

    #pp-nav li, .pp-slidesNav li {
        display: block;
        width: 14px;
        height: 13px;
        margin: 7px;
        position: relative;
    }

    #pp-nav li a, .pp-slidesNav li a {
        display: block;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-decoration: none;
    }

    #pp-nav span, .pp-slidesNav span {
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        height: 4px;
        width: 4px;
        border: 0;
        border-top-color: currentcolor;
        border-right-color: currentcolor;
        border-bottom-color: currentcolor;
        border-left-color: currentcolor;
        background: #000000;
        background-color: rgb(0, 0, 0);
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        -webkit-transition: all 0.1s ease-in-out;
        -moz-transition: all 0.1s ease-in-out;
        -o-transition: all 0.1s ease-in-out;
        transition: all 0.1s ease-in-out;
    }

    #pp-nav.eut-dark li span {
        background-color: #000000;
    }

    #pp-nav li .active span, .pp-slidesNav .active span {
        height: 12px;
        width: 12px;
        margin: -6px 0 0 -6px;
        border-radius: 100%;
    }

    /* HOME */
    .home-header {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 15px;
        margin-top: 2%;
        font-size: 250%;
    }

    .home-container {
        padding-top: 50vh;
        height: 100vh;
    }

    .fa-facebook-f {
        color: #0c3c60;
        padding-left: 10px;
    }

    .fa-instagram {
        color: #0c3c60;
        padding-right: 10px;
    }


    /* ABOUT */
    .about-container {
        height: 100vh;
        background-color: white;
    }

    .about-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 20px 0 5% 0;
    }

    .about-content {
        padding: 10% 10%;
        align-items: center;
        display: grid;
    }

    .about-row {
        display: flex;
        justify-content: center;
        text-align: start;
    }

    .about-paragraph {
        color: rgb(145, 22, 13);
        padding: 0 5%;
        font-style: italic;
    }

    .about-hp {
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        .about-paragraph {
            text-align: start;
            padding: 0;
        }
    }

    /* OFFERS */
    .offers-container {
        height: 100vh;
        background-color: white;
    }

    .offers-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 20px;
    }

    .offers-content {
        padding: 5% 10%;
    }

    .offers-title {
        font-size: 17px !important;
        line-height: 40px;
        color: black;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        bottom: 38px;
        width: 100%;
    }

    /*.v-carousel__controls {*/
    /*    background: rgba(255, 255, 255, 0.8);*/
    /*}*/

    /*.offers-description {*/
    /*    font-size: 1rem !important;*/
    /*    background-color: rgba(255, 255, 255, 0.8);*/
    /*    position: absolute;*/
    /*    width: 100%;*/
    /*    color: black !important;*/
    /*    padding: 0 10px;*/
    /*}*/

    /*@media screen and (max-width: 990px) {*/
    /*    .offers-description {*/
    /*        font-size: 0.8rem !important;*/
    /*    }*/

    /*    .btn-outline-primary {*/
    /*        font-size: 0.8rem !important;*/
    /*    }*/
    /*}*/

    /*@media screen and (max-width: 765px) {*/
    /*    .offers-description {*/
    /*        font-size: 1rem !important;*/
    /*    }*/

    /*    .btn-outline-primary {*/
    /*        font-size: 1rem !important;*/
    /*    }*/
    /*}*/

    /*.card-container {*/
    /*    perspective: 700px;*/
    /*    padding-right: 5px !important;*/
    /*    padding-left: 5px !important;*/
    /*    padding-top: 0 !important;*/
    /*}*/

    /*.card-flip {*/
    /*    position: relative;*/
    /*    width: 100%;*/
    /*    transform-style: preserve-3d;*/
    /*    transition: all 0.5s ease-out;*/
    /*    background: white;*/
    /*    border: none;*/
    /*    height: 200px;*/
    /*}*/

    /*.card-flip div {*/
    /*    backface-visibility: hidden;*/
    /*    transform-style: preserve-3d;*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*    border: none;*/
    /*}*/

    /*.card-flip .front {*/
    /*    position: relative;*/
    /*    z-index: 1;*/
    /*}*/

    /*.card-flip .back {*/
    /*    position: absolute;*/
    /*    z-index: 0;*/
    /*    transform: rotateY(-180deg);*/
    /*}*/

    /*.card-container:hover .card-flip {*/
    /*    transform: rotateY(180deg);*/
    /*}*/

    /*.card-block .btn-outline-primary {*/
    /*    width: 100%;*/
    /*    border-top-left-radius: 0;*/
    /*    border-top-right-radius: 0;*/
    /*    bottom: 0;*/
    /*    left: 0;*/
    /*    position: absolute;*/
    /*}*/

    /*.card {*/
    /*    margin-bottom: 10px;*/
    /*    border: 1px solid #eee;*/
    /*    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;*/
    /*    transition: all .3s ease-in-out;*/
    /*    min-width: 200px !important;*/
    /*}*/

    /*.card:hover {*/
    /*    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;*/
    /*    transform: translate3d(0px, -1px, 0px);*/
    /*}*/

    /*.btn-outline-primary:hover {*/
    /*    background-color: rgb(145, 22, 13) !important;*/
    /*    border-color: rgb(145, 22, 13) !important;*/
    /*}*/

    /*.card-block .btn-outline-primary {*/
    /*    border: 1px solid rgb(145, 22, 13);*/
    /*    color: rgb(145, 22, 13);*/
    /*}*/

    /* SAFETY */
    .safety-container {
        height: 100vh;
        background-color: white;
    }

    .safety-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 20px;
    }

    .safety-content {
        padding: 5% 10%;
    }
</style>
