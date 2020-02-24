<template>
    <div class="snapper">
        <app-toolbar></app-toolbar>

        <div class="home-container">
            <div>
                <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"><i
                        class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank"><i
                        class="fab fa-facebook-f fa-2x"></i></a>
            </div>
            <h1 class="home-header">R.I.B. Charter Experience</h1>
        </div>

        <div class="about-container" id="about">
            <div class="about-content">
                <h2 class="about-header"> Apie Mus</h2>
                <div class="row about-row">
                    <div class="col-sm-5">
                        <p>Pasinaudokite proga apžiūrėti Lietuvos pajūrio kraštovaizdį ir uosto akvatoriją adrenalino
                            pripildytu ir jaudinančiu būdu. Mūsų RIB „Sea Safari“ laive jūs priartėsite prie gamtos ir
                            patirsite nepamirštamus įspūdžius.</p>
                        <p>„Sea Safari“ turi du RIB laivus, varomus 300 AG ir 600 AG varikliais, kurių maksimalus
                            greitis siekia iki 60 mazgų. Atstumas Klaipėda - Juodkrantė įveikiamas per 20 min., o
                            Klaipėda - Nida per 45 min. ,,Sea Safari" veikia ir kaip vandens taksi. Tai puiki galimybė
                            išvengti automobilių spūsčių, kelto ir ekologijos mokečio, vykstant į Nidą ar
                            Juodkrantę.</p>
                    </div>
                    <div class="col-sm-5">
                        <p>RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai atsakingai atsižvelgia į jūsų
                            asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo
                            priemones:</p>
                        <p>Mes teikiame paslaugas įmonių šventėms ir privatiems vakarėliams - gimtadieniai,
                            bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas išvykas į
                            populiariausias Lietuvos pajūrio vietas - Juodkrantė, Nida, Mingės kaimas ir kiti Jūsų
                            pasirinkti maršrutai.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="offers-container" id="offers">
            <div class="offers-content">
                <h2 class="offers-header">Pasiūlymai</h2>
                <div class="row">
                    <div class="col-sm-4" v-for="(card, index) in cards" v-bind:key="index">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <v-card
                                            class="mx-auto"
                                            max-width="344px"
                                            max-height="230px"
                                    >

                                        <v-img
                                                v-bind:src="card.img"
                                                height="170px"
                                        ></v-img>
                                        <v-card-title class="offers-title">
                                            {{card.title}}
                                        </v-card-title>
                                    </v-card>
                                </div>

                                <div class="flip-card-back">
                                    <v-card
                                            class="mx-auto"
                                            max-width="344"
                                            max-height="230px"
                                    >
                                        <v-card-subtitle class="offers-description">
                                            {{card.description}}
                                        </v-card-subtitle>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="safety-container" id="safety">
            <div class="safety-content">
                <h2 class="safety-header">Saugumas</h2>
                <p>RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai atsakingai atsižvelgia į jūsų
                    asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo priemones:</p>
                <div class="row safety-row">
                    <div class="col-sm-4">
                        <img class="safety-image">
                    </div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            cards: [
                {
                    title: 'Ekstremali išvyka į jūrą',
                    span_no: '01 | ',
                    description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/jura.jpg')
                },
                {
                    title: 'Išvyka į Mingės kaimą',
                    span_no: '02 | ',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/minges-kaimas.jpg')
                },
                {
                    title: 'Išvyka į Juodkrantę',
                    span_no: '03 | ',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/juodkrante.jpg')
                },
                {
                    title: 'Ekstremali išvyka į jūrą',
                    span_no: '04 | ',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/jura.jpg')
                },
                {
                    title: 'Išvyka į Mingės kaimą',
                    span_no: '05 | ',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/minges-kaimas.jpg')
                },
                {
                    title: 'Išvyka į Juodkrantę',
                    span_no: '06 | ',
                    description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.',
                    img: require('@/assets/juodkrante.jpg')
                },
            ],
        }),
    }
</script>

<style>
    .snapper {
        scroll-snap-type: y proximity;
        /*overflow-y: scroll;*/
    }

    .snapper * {
        scroll-snap-align: start;
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
        padding-bottom: 20px;
    }

    .about-content {
        padding: 10% 0;
    }

    .about-row {
        display: flex;
        justify-content: center;
        text-align: start;
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
        padding: 10% 10%;
    }

    .offers-title {
      font-size: 1rem !important;
    }

    .offers-description {
      font-size: 1rem !important;
      height: 230px;
      color: black !important;
      padding-top: 25% !important;
    }

    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 230px;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        background-color: #bbb;
        color: black;
    }

    .flip-card-back {
        background-color: #2980b9;
        color: white;
        transform: rotateY(180deg);
    }


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
        padding: 10% 10%;
    }
</style>
