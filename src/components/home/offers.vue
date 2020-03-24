<template>
    <div class="offers-container" id="offers">
        <div class="offers-content">
            <div class="offers-description-column">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="offers-header slide-in-top" v-bind:class="animation">Pasiūlymai</h2>
                        <p class="offers-paragraph slide-in-top" v-bind:class="animation">Mes teikiame paslaugas įmonių
                            šventėms ir privatiems
                            vakarėliams -
                            gimtadieniai,
                            bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas
                            išvykas į
                            populiariausias Lietuvos pajūri o vietas - Juodkrantė, Nida, Mingės kaimas ir kiti
                            Jūsų
                            pasirinkti maršrutai.</p>
                        <br>
                        <p class="offers-paragraph slide-in-top" v-bind:class="animation">Ieškote dovanos idėjos, kuri
                            paliktų neišdildomus
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

        <div class="card-deck offer-container offer-column">
            <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd1 align-items-stretch"
                         v-bind:class="animation" to="/baltijos-jura">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container flip-in-hor-bottom">
                            <img class="card-img offer-image"
                                 src="../../assets/slide_2_1x.jpg" alt="Išvyka">
                            <h2 class="offer-title">Ekstremali išvyka į jūrą</h2>
                        </div>
                        <p class="offer-description">Išvyka į Baltijos jūrą greitaeigiu R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pamatysite uosto akvatoriją, pajusite jūros galybę, greitį, vėją ir vandens purslus. Tai populiariausias mūsų pasiūlymas.</p>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd2"
                         v-bind:class="animation" to="/juodkrante">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container flip-in-hor-bottom">
                            <img class="card-img offer-image"
                                 src="../../assets/juodkrante.jpg" alt="Išvyka">
                            <h2 class="offer-title">Išvyka į Juodkrantę</h2>
                        </div>
                        <p class="offer-description">Išplaukę iš Klaipėdos, pamatysite unikalų Kuršių nerijos kraštovaizdį, vėjo supūstytas kopas. Kelionė laivu leis grožėtis Juodkrante iš vandens, o tai paliks tik dar daugiau neišdildomų įspūdžių.</p>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd3"
                         v-bind:class="animation" to="/nida">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container flip-in-hor-bottom">
                            <img class="card-img offer-image"
                                 src="../../assets/nida.jpg" alt="Išvyka">
                            <h2 class="offer-title">Išvyka į Nidą</h2>
                        </div>
                        <p class="offer-description">Plaukdami Nidos pakrante pamatysite ne tik šį nuostabų gamtos kampelį, tačiau ir kitas savo grožiu stebinančias vietas: plačiai atsiveriantį Kuršių nerijos kraštovaizdį, išskirtinę augmeniją, žvejų gyvenvietes.</p>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd4"
                         v-bind:class="animation" to="/minges-kaimas">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container flip-in-hor-bottom">
                            <img class="card-img offer-image"
                                 src="../../assets/minges-kaimas.jpg" alt="Išvyka">
                            <h2 class="offer-title">Išvyka į Mingės kaimą</h2>
                        </div>
                        <p class="offer-description">Pažintinės išvykos metu plauksite Nemuno deltos parku, aplankant Uostadvarį ir Rusnės salą. Išvysite Lietuvos Venecija vadinamą Mingės kaimą. Išsilaipinę į krantą, galėsite papietauti Kintuose, žuvies restorane. </p>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd5"
                         v-bind:class="animation" to="/vandens-taksi">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container flip-in-hor-bottom">
                            <img class="card-img offer-image"
                                 src="../../assets/vandens-taksi.jpg" alt="Išvyka">
                            <h2 class="offer-title">Vandens Taksi</h2>
                        </div>
                        <p class="offer-description">Mūsų laivai veikia ir kaip vandens taksi. Tai puiki galimybė išvengti automobilių spūsčių, kelto ir ekologijos mokesčio, vykstant į Nidą ar Juodkrantę. Greitai ir saugiai nuplukdinsime Jus į pageidaujamas vietas. </p>
                    </div>
                </div>
            </router-link>

            <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd6"
                         v-bind:class="animation" to="/privatus-vakareliai">
                <div class="offer-content">
                    <div>
                        <div class="image-title-container flip-in-hor-bottom">
                            <img class="card-img offer-image"
                                 src="../../assets/privatus-vakareliai.jpg" alt="Išvyka">
                            <h2 class="offer-title">Privatūs Vakarėliai</h2>
                        </div>
                        <p class="offer-description">Linksmai atšvęsite mergvakarius, bernvakarius ar įmonių vakarėlius tik savo kompanijoje. Galimi įvairūs Jūsų pasirinkti maršrutai su sustojimais. </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['animation'],
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
        opacity: 0;
    }

    .offers-paragraph {
        font-size: 17px;
        margin-bottom: 0;
        padding: 0 5%;
        opacity: 0;
    }

    .offers-gift {
        color: #91160d !important;
    }

    .offer-card {
        border: none !important;
        position: relative;
        opacity: 0;
        min-width: 350px;
    }

    .offer-container {
        background-color: #f8f9fa;
        padding: 1% 10% 3% 10%;
    }

    .offer-content {
        display: flex;
        justify-content: center;
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

    /* ANIMATE */
    .slide-in-top.animate {
        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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

    .swing-in-top-fwd1.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1s both;
    }

    .swing-in-top-fwd2.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1.5s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 1.5s both;
    }

    .swing-in-top-fwd3.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 2s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 2s both;
    }

    .swing-in-top-fwd4.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 2.5s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 2.5s both;
    }

    .swing-in-top-fwd5.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 3s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 3s both;
    }

    .swing-in-top-fwd6.animate {
        -webkit-animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 3.5s both;
        animation: swing-in-top-fwd 0.75s cubic-bezier(0.175, 0.885, 0.320, 1.275) 3.5s both;
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