<template>
    <div class="item safety-container" id="safety">
        <div class="safety-content">
            <div>
                <h2 class="safety-header">Saugumas</h2>
                <p class="safety-paragraph">RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai
                    atsakingai atsižvelgia į jūsų
                    asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo
                    priemones:</p>
                <div class="card-columns safety-column">
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
        column-count: 2 !important;
    }

    @media screen and (max-width: 787px) {
        .safety-card {
            height: 130px;
        }
    }

    @media screen and (max-width: 575px) {
        .safety-column {
            padding: 0;
        }

        .p-3 {
            padding: 1rem 0 !important;
        }

        .safety-card {
            height: 130px;
        }

        .safety-content {
            padding: 0 10% 0 10%;
        }

        .safety-paragraph {
            padding: 0;
        }
    }

    .hover-safety-card:hover {
        color: #91160d;
        /*color: #17486b;*/
        cursor: pointer;
    }
</style>