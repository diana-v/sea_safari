<template>
    <main class="safety-container safety-content row" id="safety">
        <section class="col-sm-12 safety-column slide-in-top" v-bind:class="animation">
            <h2 class="safety-header">Saugumas</h2>
            <p class="safety-paragraph">RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai
                atsakingai atsižvelgia į jūsų asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes
                naudojame šias saugumo priemones:</p>
        </section>
        <section class="col-sm-12">
            <div class="card-columns safety-card-column">
                <div class="card bg-light shadow p-3 mb-3 safety-card fade-in1" v-bind:class="animation">
                    <figure class="card-body text-center safety-card-content">
                        <img src="@/assets/safety/lifebouy.svg" class="safety-image" alt="Gelbėjimo ratas">
                        <figcaption class="card-text">Gelbėjimo ratas</figcaption>
                    </figure>
                </div>
                <div class="card bg-light shadow p-3 mb-3 safety-card fade-in2" v-bind:class="animation">
                    <figure class="card-body text-center safety-card-content">
                        <img src="@/assets/safety/lifevest.svg" class="safety-image" alt="Gelbėjimosi liemenė">
                        <figcaption class="card-text">Gelbėjimosi liemenė</figcaption>
                    </figure>
                </div>
                <div class="card bg-light shadow p-3 mb-3 safety-card hover-safety-card fade-in3"
                     v-bind:class="animation">
                    <figure class="card-body text-center safety-card-content">
                        <v-dialog
                                v-model="dialog"
                        >
                            <template v-slot:activator="{ on }">
                                <div v-on="on">
                                    <img src="@/assets/safety/wetsuit.svg" class="safety-image"
                                         alt="Neperšlampama apranga">
                                    <p class="card-text">Neperšlampama apranga</p>
                                </div>
                            </template>

                            <v-card>
                                <v-img :src="safety_img" max-height="550px" contain></v-img>
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
                    </figure>
                </div>
                <div class="card bg-light shadow p-3 mb-3 safety-card fade-in4" v-bind:class="animation">
                    <figure class="card-body text-center safety-card-content">
                        <img src="@/assets/safety/medkit.svg" class="safety-image" alt="Neperšlampama apranga">
                        <figcaption class="card-text">Vaistinėlė</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import { VDialog, VCard, VBtn, VImg, VCardActions, VSpacer } from 'vuetify/lib';

    export default {
        components: {
            VDialog,
            VCard,
            VBtn,
            VImg,
            VCardActions,
            VSpacer
        },
        props: ['animation'],
        data: () => ({
            safety_img: require('@/assets/safety/outfits.png'),
            dialog: false,
        })
    }
</script>

<style scoped>
    /* */
    /* SAFETY */
    /* */
    .safety-container {
        background-color: white;
    }

    .safety-content {
        padding: 6% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        max-width: 100vw;
    }

    .safety-column {
        padding-top: 0;
        opacity: 0;
    }

    .safety-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 2%;
        font-weight: 900;
    }

    .safety-paragraph {
        font-size: 17px !important;
        padding: 0 5%;
    }

    .safety-card-column {
        column-count: 2 !important;
    }

    .safety-card {
        border: none !important;
        height: 130px;
        min-width: 130px;
        opacity: 0;
    }

    .hover-safety-card:hover {
        color: #91160d;
        cursor: pointer;
    }

    .hover-safety-card {
        box-shadow: 0 0.5rem 1rem rgba(145, 22, 13, 0.2) !important;
    }

    .safety-card-content {
        padding: 0 5% !important;
    }

    .safety-image {
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 800px) {
        .safety-column {
            min-width: 100% !important;
            padding: 50px 0 0 0;
        }

        .safety-header {
            text-align: center;
        }

        .safety-paragraph {
            text-align: center;
            padding: 0;
        }

        .p-3 {
            padding: 1rem 0 !important;
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

    .fade-in1.animate {
        -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.75s both;
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.75s both;
    }

    .fade-in2.animate {
        -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
    }

    .fade-in3.animate {
        -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.25s both;
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.25s both;
    }

    .fade-in4.animate {
        -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.5s both;
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.5s both;
    }

    @-webkit-keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
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
    }
</style>