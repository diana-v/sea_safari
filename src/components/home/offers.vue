<template>
    <div class="offers-container" id="offers">
        <div class="offers-content">
                    <div class="offers-description-column">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="offers-header">Pasiūlymai</h2>
                                <p class="offers-paragraph">Mes teikiame paslaugas įmonių šventėms ir privatiems
                                    vakarėliams -
                                    gimtadieniai,
                                    bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas
                                    išvykas į
                                    populiariausias Lietuvos pajūri o vietas - Juodkrantė, Nida, Mingės kaimas ir kiti
                                    Jūsų
                                    pasirinkti maršrutai.</p>
                                <br>
                                <p class="offers-paragraph">Ieškote dovanos idėjos, kuri paliktų neišdildomus įspūdžius
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
            <div class="card bg-light shadow p-3 mb-3 offer-card" v-for="(offer, index) in offers"
                 v-bind:key="index">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container">
                            <img class="card-img offer-image"
                                 v-bind:src="offer.img" alt="Išvyka">
                            <h2 class="offer-title">{{offer.title}}</h2>
                        </div>
                        <p class="offer-description">{{offer.description}}</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
</template>

<script>
    export default {
        data() {
            return {
                offers: [
                    {
                        img: require('../../assets/slide_2_1x.jpg'),
                        title: 'Ekstremali išvyka į jūrą',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    },
                    {
                        img: require('../../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    },
                    {
                        img: require('../../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    },
                    {
                        img: require('../../assets/nida.jpg'),
                        title: 'Išvyka į Nidą',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    },
                    {
                        img: require('../../assets/minges-kaimas.jpg'),
                        title: 'Išvyka į Mingės kaimą',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
                    },
                    {
                        img: require('../../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išvyka į  Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.',
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
    }

    .offers-paragraph {
        font-size: 17px;
        margin-bottom: 0;
        padding: 0 5%;
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

    .shadow:hover{
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
    }
</style>