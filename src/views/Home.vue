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
                    <li data-tooltip="">
                        <a class="nav-btn" href="#contact">
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
                        <p class="about-paragraph">Pasinaudokite proga apžiūrėti Lietuvos pajūrio kraštovaizdį ir uosto
                            akvatoriją
                            adrenalino pripildytu ir jaudinančiu būdu.</p>
                    </div>
                    <div class="row about-row">
                        <div class="col-sm-5">
                            <p> Mūsų RIB „Sea Safari“ laive jūs priartėsite prie gamtos
                                ir patirsite nepamirštamus įspūdžius. "Sea Safari" turi du RIB laivus, varomus 300 AG ir
                                600 AG varikliais, kurių maksimalus
                                greitis siekia net iki 60 mazgų.</p>
                        </div>
                        <div class="col-sm-5">
                            <p> Atstumas Klaipėda - Juodkrantė įveikiamas per 20 min., o
                                Klaipėda - Nida per 45 min. "Sea Safari" veikia ir kaip vandens taksi. Tai puiki
                                galimybė išvengti automobilių spūsčių, kelto ir ekologijos mokečio, vykstant į
                                Nidą/Juodkrantę.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item offers-container" id="offers">
                <div class="offers-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="offers-header">Pasiūlymai</h2>
                            </div>
                            <div class="col-sm-12">
                                <p class="offers-paragraph">Mes teikiame paslaugas įmonių šventėms ir privatiems
                                    vakarėliams -
                                    gimtadieniai,
                                    bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas
                                    išvykas į
                                    populiariausias Lietuvos pajūri o vietas - Juodkrantė, Nida, Mingės kaimas ir kiti
                                    Jūsų
                                    pasirinkti maršrutai.</p>
                            </div>
                            <div class="col-sm-12">
                                <div class="my-2">
                                    <v-btn large color="rgb(145, 22, 13)" class="offer-button" href="/pasiulymai">Mūsų
                                        pasiūlymai
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item safety-container" id="safety">
                <div class="safety-content">
                    <div>
                        <h2 class="safety-header">Saugumas</h2>
                        <p class="safety-paragraph">RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai
                            atsakingai atsižvelgia į jūsų
                            asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo
                            priemones:</p>
                        <div class="card-columns safety-column">
                            <div class="card bg-light shadow p-3 mb-5 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/lifebouy.png" class="safety-image">
                                    <p class="card-text">Gelbėjimo ratas</p>
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-5 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/lifevest.png" class="safety-image">
                                    <p class="card-text">Gelbėjimosi liemenė</p>
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-5 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/medkit.png" class="safety-image">
                                    <p class="card-text">Vaistinėlė</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item contact-container" id="contact">
                <div class="contact-content">
                    <h2 class="contact-header">Kontaktai</h2>

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
            ]
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
    @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

    html, body {
        font-family: 'Hind', 'Roboto';
    }

    #pp-nav.right {
        right: 2%;
    }

    #pp-nav {
        position: fixed;
        z-index: 100;
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

    /* */
    /* HOME */
    /* */
    .home-header {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 15px;
        margin-top: 2%;
        font-size: 250%;
        font-weight: 900;
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

    /* */
    /* ABOUT */
    /* */
    .about-container {
        height: 100vh;
        background-color: white;
    }

    .about-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 20px 0 5% 0;
        font-weight: 900;
    }

    .about-content {
        padding: 10% 10%;
        align-items: center;
        display: grid;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .about-row {
        display: flex;
        justify-content: center;
        text-align: start;
        font-size: 17px;
    }

    .about-paragraph {
        color: rgb(145, 22, 13);
        padding: 0 8%;
        font-style: italic;
        font-size: 17px !important;
    }

    .about-hp {
        padding-bottom: 2px;
    }

    @media screen and (max-width: 480px) {
        .about-paragraph {
            text-align: start;
            padding: 0;
        }
    }

    /* */
    /* OFFERS */
    /* */
    .offers-container {
        height: 100vh;
        background-color: white;
    }

    .offers-header {
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 900;
    }

    .offers-content {
        padding: 5% 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .offer-button {
        color: white !important;
        text-decoration: none !important;
    }

    .offers-paragraph {
        font-size: 17px !important;
        padding: 0 3%;
    }

    /* */
    /* SAFETY */
    /* */
    .safety-container {
        height: 100vh;
        background-color: white;
    }

    .safety-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 20px;
        font-weight: 900;
    }

    .safety-content {
        padding: 5% 10% 1% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .safety-paragraph {
        font-size: 17px !important;
        padding: 0 8%;
    }

    .safety-card-content {
        padding: 0 !important;
    }

    .safety-card {
        border: none !important;
    }

    .safety-image {
        width: 60px;
        height: 60px;
    }

    .safety-column {
        padding: 0 5%;
    }

    @media screen and (max-width: 787px) {
        .safety-card {
            height: 130px;
        }
    }

    @media screen and (max-width: 575px) {
        .safety-card {
            height: 116px;
        }
    }

    /* */
    /* CONTACT */
    /* */
    .contact-container {
        height: 100vh;
        background-image: linear-gradient(to top right, rgba(64, 64, 64, .5), rgba(64, 64, 64, .5)), url("../assets/map.png");
        background-size: cover;
    }

    .contact-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 20px 0 5% 0;
        font-weight: 900;
    }
</style>
