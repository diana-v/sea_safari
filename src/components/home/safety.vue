<template>
    <div class="item safety-container" id="safety">
        <div class="safety-content">
<!--            <div class="col-md-6 image-column">-->
<!--            </div>-->
<!--            <div class="col-md-6 safety-column">-->
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="safety-header">Saugumas</h2>
                        <p class="safety-paragraph">RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai
                            atsakingai atsižvelgia į jūsų
                            asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo
                            priemones:</p>
                    </div>

                    <div class="col-sm-12">
                        <div class="card-columns safety-card-column">
                            <div class="card bg-light shadow p-3 mb-3 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/lifebouy.png" class="safety-image">
                                    <p class="card-text">Gelbėjimo ratas</p>
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-3 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/lifevest.png" class="safety-image">
                                    <p class="card-text">Gelbėjimosi liemenė</p>
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-3 safety-card hover-safety-card">
                                <div class="card-body text-center safety-card-content">

                                    <v-dialog
                                            v-model="dialog"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <div v-on="on">
                                                <img src="@/assets/wetsuit.png" class="safety-image">
                                                <p class="card-text">Neperšlampama apranga</p>
                                            </div>
                                        </template>

                                        <v-card>
                                            <v-img :src="safety_img" max-height="560px" contain></v-img>
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
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-3 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/medkit.png" class="safety-image">
                                    <p class="card-text">Vaistinėlė</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--    </div>-->
</template>

<script>
    export default {
        data: () => ({
            safety_img: require('@/assets/aprangos.png'),
            dialog: false,
        })
    }
</script>

<style scoped>
    /* */
    /* SAFETY */
    /* */
    .safety-container {
        min-height: 100vh;
        overflow: auto;
        background-color: white;
    }

    .safety-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 2%;
        font-weight: 900;
    }

    .safety-content {
        /*padding: 5% 5%;*/
        padding: 10% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    /*.safety-column {*/
    /*    align-content: center;*/
    /*    display: grid;*/
    /*    padding: 0 0 0 50px;*/
    /*}*/

    /*.image-column {*/
    /*    max-width: 450px;*/
    /*    background-image: url('../../assets/safety-image.jpg');*/
    /*    background-repeat: no-repeat;*/
    /*    background-size: cover;*/
    /*    height: 550px;*/
    /*}*/

    .safety-paragraph {
        font-size: 17px !important;
        text-align: start;
    }

    .safety-card-content {
        padding: 0 5% !important;
    }

    .safety-card {
        border: none !important;
        height: 130px;
        min-width: 130px;
    }

    .safety-image {
        width: 60px;
        height: 60px;
    }

    .safety-card-column {
        column-count: 2 !important;
    }

    @media screen and (max-width: 575px) {
        /*.safety-column {*/
        /*    padding: 0;*/
        /*}*/

        /*.p-3 {*/
        /*    padding: 1rem 0 !important;*/
        /*}*/

        /*.safety-content {*/
        /*    padding: 0 10% 0 10%;*/
        /*}*/

        /*.safety-paragraph {*/
        /*    padding: 0;*/
        /*}*/
    }

    @media screen and (max-width: 800px) {
        .image-column {
            display: none;
        }
        .safety-column {
            min-width: 100% !important;
            padding: 0;
        }
        .safety-header {
            text-align: center;
        }
        .safety-paragraph {
            text-align: center;
            padding: 0;
        }
        /*.safety-content {*/
        /*    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../../assets/offer-image.jpg') no-repeat;*/
        /*    background-size: cover;*/
        /*    padding: 0 10% 0 10%;*/
        /*}*/
        .p-3 {
            padding: 1rem 0 !important;
        }
    }

    .hover-safety-card:hover {
        color: #91160d;
        /*color: #17486b;*/
        cursor: pointer;
    }
</style>