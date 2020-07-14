<template>
    <main class="offers-container" id="offers">
        <div class="offers-content offers-description-column row">
            <article class="col-sm-12">
                <h2 class="offers-header slide-in-top" v-bind:class="animation">Pasiūlymai</h2>
                <p class="offers-paragraph slide-in-top" v-bind:class="animation">Mes teikiame paslaugas įmonių
                    šventėms ir privatiems vakarėliams - gimtadieniai, bernvakariai, mergvakariai. Renkame grupes
                    išvykoms į jūrą. Siūlome turiningas išvykas į populiariausias Lietuvos pajūri o vietas - Juodkrantė,
                    Nida, Mingės kaimas ir kiti Jūsų pasirinkti maršrutai.</p>
                <br>
                <v-dialog
                        v-model="dialog"
                >
                    <template v-slot:activator="{ on }">
                        <p class="offers-paragraph slide-in-top" v-bind:class="animation">Ieškote dovanos idėjos, kuri
                            paliktų neišdildomus įspūdžius visus metus? ,,Sea Safari” siūlo įsigyti
                            <a v-on="on" class="offers-giftcard">dovanų kuponus</a>, pradžiuginančius kiekvieną! Dovanų
                            kuponus galite užsisakyti susisiekę
                            el. paštu arba Facebook žinute.</p>
                    </template>
                    <v-card>
                        <v-img :src="giftcard_img" max-height="550px" contain></v-img>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="red darken-4"
                                    text
                                    @click="dialog = false"
                            >
                                Uždaryti
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </article>
        </div>

        <div class="card-deck offer-container">
            <div class="row">
                <router-link tag="div"
                             class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd1 align-items-stretch"
                             v-bind:class="animation" to="/baltijos-jura">
                    <section class="offer-content">
                        <article>
                            <figure class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     src="../../assets/offers/baltijos-jura-sm.jpg" alt="Išvyka">
                                <h2 class="offer-title">Ekstremali išvyka į jūrą</h2>
                            </figure>
                            <p class="offer-description">Išvyka į Baltijos jūrą greitaeigiu R.I.B. laivu įsimins
                                ilgam.
                                Praplauksite Danės upe, pamatysite uosto akvatoriją, pajusite jūros galybę, greitį,
                                vėją
                                ir vandens purslus. Tai populiariausias mūsų pasiūlymas.</p>
                        </article>
                    </section>
                </router-link>

                <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd2"
                             v-bind:class="animation" to="/juodkrante">
                    <section class="offer-content">
                        <article>
                            <figure class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     src="../../assets/offers/juodkrante-sm.jpg" alt="Išvyka">
                                <h2 class="offer-title">Išvyka į Juodkrantę</h2>
                            </figure>
                            <p class="offer-description">Išplaukę iš Klaipėdos, pamatysite unikalų Kuršių nerijos
                                kraštovaizdį, vėjo supūstytas kopas. Kelionė laivu leis grožėtis Juodkrante iš
                                vandens,
                                o tai paliks tik dar daugiau neišdildomų įspūdžių.</p>
                        </article>
                    </section>
                </router-link>

                <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd3"
                             v-bind:class="animation" to="/nida">
                    <section class="offer-content">
                        <article>
                            <figure class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     src="../../assets/offers/nida-sm.jpg" alt="Išvyka">
                                <h2 class="offer-title">Išvyka į Nidą</h2>
                            </figure>
                            <p class="offer-description">Plaukdami Nidos pakrante pamatysite ne tik šį nuostabų
                                gamtos
                                kampelį, tačiau ir kitas savo grožiu stebinančias vietas: plačiai atsiveriantį
                                Kuršių
                                nerijos kraštovaizdį, išskirtinę augmeniją, žvejų gyvenvietes.</p>
                        </article>
                    </section>
                </router-link>
            </div>

            <div class="row">
                <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd4"
                             v-bind:class="animation" to="/minges-kaimas">
                    <section class="offer-content">
                        <article>
                            <figure class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     src="../../assets/offers/minges-kaimas-sm.jpg" alt="Išvyka">
                                <h2 class="offer-title">Išvyka į Mingės kaimą</h2>
                            </figure>
                            <p class="offer-description">Pažintinės išvykos metu plauksite Nemuno deltos parku,
                                aplankant Uostadvarį ir Rusnės salą. Išvysite Lietuvos Venecija vadinamą Mingės
                                kaimą.
                                Išsilaipinę į krantą, galėsite papietauti Kintuose, žuvies restorane. </p>
                        </article>
                    </section>
                </router-link>

                <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd5"
                             v-bind:class="animation" to="/vandens-taksi">
                    <section class="offer-content">
                        <article>
                            <figure class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     src="../../assets/offers/water-taxi-sm.jpg" alt="Išvyka">
                                <h2 class="offer-title">Vandens Taksi</h2>
                            </figure>
                            <p class="offer-description">Mūsų laivai veikia ir kaip vandens taksi. Tai puiki
                                galimybė
                                išvengti automobilių spūsčių, kelto ir ekologijos mokesčio, vykstant į Nidą ar
                                Juodkrantę. Greitai ir saugiai nuplukdinsime Jus į pageidaujamas vietas. </p>
                        </article>
                    </section>
                </router-link>

                <router-link tag="div" class="card bg-light shadow p-3 mb-3 offer-card swing-in-top-fwd6"
                             v-bind:class="animation" to="/privatus-vakareliai">
                    <section class="offer-content">
                        <article>
                            <figure class="image-title-container flip-in-hor-bottom">
                                <img class="card-img offer-image"
                                     src="../../assets/offers/private-parties-sm.jpg" alt="Išvyka">
                                <h2 class="offer-title">Privatūs Vakarėliai</h2>
                            </figure>
                            <p class="offer-description">Linksmai atšvęsite mergvakarius, bernvakarius ar įmonių
                                vakarėlius tik savo kompanijoje. Galimi įvairūs Jūsų pasirinkti maršrutai su
                                sustojimais. </p>
                        </article>
                    </section>
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
    import { VDialog, VCard, VImg, VCardActions, VSpacer, VBtn } from 'vuetify/lib';

    export default {
        components: {
            VDialog,
            VCard,
            VImg,
            VCardActions,
            VSpacer,
            VBtn
        },
        props: ['animation'],
        data: () => ({
            giftcard_img: require('@/assets/offers/giftcard.jpg'),
            dialog: false,
        })
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

    .offers-giftcard {
        color: #91160d;
    }

    .offers-giftcard:hover {
        color: #91160d;
        border-bottom: 1px solid #91160d;
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
        padding: 4% 5% 1% 5%;
        text-align: start;
    }

    .shadow:hover {
        box-shadow: 0 0.5rem 1rem rgba(145, 22, 13, 0.5) !important;
    }

    @media screen and (max-width: 575px) {
        .offer-card {
            min-width: initial;
        }
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

    @media only screen and (max-width: 768px) {
        * {
            /*CSS transitions*/
            -o-transition-property: none !important;
            -moz-transition-property: none !important;
            -ms-transition-property: none !important;
            -webkit-transition-property: none !important;
            transition-property: none !important;
            /*CSS transforms*/
            -o-transform: none !important;
            -moz-transform: none !important;
            -ms-transform: none !important;
            -webkit-transform: none !important;
            transform: none !important;
            /*CSS animations*/
            -webkit-animation: none !important;
            -moz-animation: none !important;
            -o-animation: none !important;
            -ms-animation: none !important;
            animation: none !important;
            opacity: 1 !important;
        }

        .offer-title {
            top: 40%;
            left: 5%;
        }
    }
</style>