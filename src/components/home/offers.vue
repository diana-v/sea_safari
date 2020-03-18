<template>
    <div class="offers-container" id="offers">
        <div class="offers-content">
            <div class="offers-description-column">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="offers-header slide-in-top" v-bind:class="animation">Pasiūlymai</h2>
                        <p class="offers-paragraph slide-in-top" v-bind:class="animation">Mes teikiame paslaugas įmonių šventėms ir privatiems
                            vakarėliams -
                            gimtadieniai,
                            bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas
                            išvykas į
                            populiariausias Lietuvos pajūri o vietas - Juodkrantė, Nida, Mingės kaimas ir kiti
                            Jūsų
                            pasirinkti maršrutai.</p>
                        <br>
                        <p class="offers-paragraph slide-in-top" v-bind:class="animation">Ieškote dovanos idėjos, kuri paliktų neišdildomus
                            įspūdžius
                            visus metus? ,,Sea Safari” siūlo įsigyti dovanų kuponus, pradžiuginančius kiekvieną!
                            Juos galite įsigyti <a href="https://www.geradovana.lt/sea-safari" target="_blank"
                                                   class="offers-gift" rel="noreferrer">Gera Dovana</a> arba <a
                                    href="https://www.dovanusala.lt/lt/s/1510-sea-safari"
                                    target="_blank" class="offers-gift" rel="noreferrer">Dovanų Sala</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="offer-container offer-column">
            <div class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd" v-bind:class="animation" v-for="(offer, index) in offers"
                 v-bind:key="index">
                <router-link :to="offer.routerUrl" class="offer-routes">
                    <div class="offer-content">
                        <div>
                            <div class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     v-bind:src="offer.img" alt="Išvyka">
                                <h2 class="offer-title">{{offer.title}}</h2>
                            </div>
                            <p class="offer-description">{{offer.description}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['animation'],
        data() {
            return {
                offers: [
                    {
                        img: require('../../assets/slide_2_1x.jpg'),
                        title: 'Ekstremali išvyka į jūrą',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                        routerUrl: '/baltijos-jura',
                    },
                    {
                        img: require('../../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                        routerUrl: '/juodkrante',
                    },
                    {
                        img: require('../../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                        routerUrl: '/juodkrante',
                    },
                    {
                        img: require('../../assets/nida.jpg'),
                        title: 'Išvyka į Nidą',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                        routerUrl: '/nida',
                    },
                    {
                        img: require('../../assets/minges-kaimas.jpg'),
                        title: 'Išvyka į Mingės kaimą',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                        routerUrl: '/minges-kaimas',
                    },
                    {
                        img: require('../../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                        routerUrl: '/juodkrante',
                    },
                ]
            }
        }
    };
</script>
<style scoped>
    /* */
    /* OFFERS */
    /* */
    .offers-container {
        background-color: #f8f9fa;
    }

    .offers-content {
        padding: 5% 10% 3% 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .offers-description-column {
        align-content: center;
        display: grid;
    }

    .offers-header {
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 900;
        text-align: center;
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }

    .offers-paragraph {
        font-size: 17px;
        margin-bottom: 0;
        padding: 0 5%;
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }

    .offers-gift {
        color: #91160d !important;
    }

    .offer-column {
        column-count: 3;
    }

    .offer-card {
        border: none !important;
        position: relative;
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }

    .offer-routes {
        text-decoration: none !important;
        color: black !important;
    }

    .offer-container {
        background-color: #f8f9fa;
        padding: 1% 10% 3% 10%;
    }

    .offer-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .image-title-container {
        position: relative;
        text-align: center;
        color: white;
    }

    .offer-image {
        height: 250px;
        overflow: hidden;
        object-fit: cover;
        filter: brightness(50%);
    }

    .offer-title {
        font-size: 30px;
        font-weight: 900;
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        word-wrap: break-word;
    }

    .offer-description {
        font-size: 17px;
        padding: 5% 5% 0 5%;
        text-align: start;
    }

    .shadow:hover {
        box-shadow: 0 0.5rem 1rem rgba(145, 22, 13, 0.5) !important;
    }

    @media screen and (max-width: 1200px) {
        .offer-column {
            column-count: 2;
        }
    }

    @media screen and (max-width: 750px) {
        .offer-column {
            column-count: 1;
        }

        .offers-description-column {
            padding-top: 50px;
        }
    }

    /* ANIMATE */
    .slide-in-top.animate {
        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
    }

    @-webkit-keyframes slide-in-top {
        0% {
            -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-top {
        0% {
            -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }

    .swing-in-top-fwd.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 2s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 2s both;
    }

    @-webkit-keyframes swing-in-top-fwd {
        0% {
            -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
            -webkit-transform-origin: top;
            transform-origin: top;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            -webkit-transform-origin: top;
            transform-origin: top;
            opacity: 1;
        }
    }
    @keyframes swing-in-top-fwd {
        0% {
            -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
            -webkit-transform-origin: top;
            transform-origin: top;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            -webkit-transform-origin: top;
            transform-origin: top;
            opacity: 1;
        }
    }
</style>