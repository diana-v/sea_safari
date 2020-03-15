<template>
    <div class="safety-container" id="safety">
        <div class="safety-content">
            <div class="row">
                <div class="col-sm-12 safety-column">
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
                                <img src="@/assets/lifebouy.png" class="safety-image" alt="Gelbėjimo ratas">
                                <p class="card-text">Gelbėjimo ratas</p>
                            </div>
                        </div>
                        <div class="card bg-light shadow p-3 mb-3 safety-card">
                            <div class="card-body text-center safety-card-content">
                                <img src="@/assets/lifevest.png" class="safety-image" alt="Gelbėjimosi liemenė">
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
                                            <img src="@/assets/wetsuit.png" class="safety-image" alt="Neperšlampama apranga">
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
                                <img src="@/assets/medkit.png" class="safety-image" alt="Neperšlampama apranga">
                                <p class="card-text">Vaistinėlė</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        background-color: white;
    }

    .safety-content {
        padding: 3% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .safety-column {
        padding-top: 0;
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
            padding: 0;
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
</style>