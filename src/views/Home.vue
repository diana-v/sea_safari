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
                <p>Pasirinkite iš mūsų siūlomų išvykų, skirtų smagiai praleisti laiką su šeima, pasilinksminti per darbo išvyką ar patirti nepamirštamą bernvakarį/mergvakarį.</p>
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-4 card-container" v-for="(card, index) in cards" v-bind:key="index">
                            <div class="card card-flip">
                                <div class="front card-block offer-image"
                                     v-bind:style="{ backgroundImage:  'url(' + card.img + ')' }">
                                    <h4 class="card-title offers-title">{{card.title}}</h4>
                                </div>
                                <div class="back card-block d-flex offers-description">
                                    <p class="justify-content-center align-self-center">{{card.description}}</p>
<!--                                    <a href="#" class="btn btn-outline-primary">Daugiau</a>-->
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
        })
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

    .offer-image {
        height: 130px;
        background-size: cover;
        border-radius: 0.25rem;
    }

    .offers-title {
        font-size: 17px !important;
        line-height: 40px;
        color: black;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        bottom: 0;
        width: 100%;
        /*margin: 0 !important;*/
    }

    .offers-description {
        font-size: 1rem !important;
        color: black !important;
        padding: 0 10px;
    }

    @media screen and (max-width: 990px) {
        .offers-description {
            font-size: 0.8rem !important;
        }

        .btn-outline-primary {
            font-size: 0.8rem !important;
        }
    }

    @media screen and (max-width: 765px) {
        .offers-description {
            font-size: 1rem !important;
        }

        .btn-outline-primary {
            font-size: 1rem !important;
        }
    }

    .card-container {
        perspective: 700px;
        padding-right: 5px !important;
        padding-left: 5px !important;
        padding-top: 0 !important;
    }

    .card-flip {
        position: relative;
        width: 100%;
        transform-style: preserve-3d;
        transition: all 0.5s ease-out;
        background: white;
        border: none;
        height: 200px;
    }

    .card-flip div {
        backface-visibility: hidden;
        transform-style: preserve-3d;
        height: 100%;
        width: 100%;
        border: none;
    }

    .card-flip .front {
        position: relative;
        z-index: 1;
    }

    .card-flip .back {
        position: absolute;
        z-index: 0;
        transform: rotateY(-180deg);
    }

    .card-container:hover .card-flip {
        transform: rotateY(180deg);
    }

    .card-block .btn-outline-primary {
        width: 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        bottom: 0;
        left: 0;
        position: absolute;
    }

    .card {
        margin-bottom: 10px;
        border: 1px solid #eee;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
        transition: all .3s ease-in-out;
        min-width: 200px !important;
    }

    .card:hover {
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
        transform: translate3d(0px, -1px, 0px);
    }

    .btn-outline-primary:hover {
        background-color: rgb(145, 22, 13) !important;
        border-color: rgb(145, 22, 13) !important;
    }

    .card-block .btn-outline-primary {
        border: 1px solid rgb(145, 22, 13);
        color: rgb(145, 22, 13);
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
