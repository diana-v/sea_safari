<template>
    <div class="item offers-container" id="offers">
        <div class="offers-content">
                    <div class="col-md-6 offers-column">
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
                                                           class="offers-gift">Gera Dovana</a> arba <a
                                            href="https://www.dovanusala.lt/lt/s/1510-sea-safari?gclid=EAIaIQobChMItsP97M-B6AIVGaqaCh11owdtEAAYAiAAEgKEZfD_BwE"
                                            target="_blank" class="offers-gift">Dovanų Sala</a>.</p>
                            </div>
                            <div class="col-sm-12">
                                <div class="my-2">
                                    <v-btn large color="rgb(145, 22, 13)" class="offers-button" href="/pasiulymai">Mūsų
                                        pasiūlymai
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 image-column">
                    </div>
                </div>
            </div>
</template>

<style scoped>
    /* */
    /* OFFERS */
    /* */
    .offers-container {
        min-height: 100vh;
        overflow: auto;
        background-color: white;
    }

    .offers-content {
        padding: 5% 5%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .offers-column {
        align-content: center;
        display: grid;
        padding: 0 50px 0 0;
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
        text-align: start;
    }

    .offers-gift {
        color: #91160d !important;
    }

    .offers-button {
        color: white !important;
        text-decoration: none !important;
        background-color: #91160d !important;
        border-color: #91160d !important;
    }

    .image-column {
        max-width: 450px;
        background-image: url('../../assets/offer-image.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 550px;
    }

    @media screen and (max-width: 800px) {
        .image-column {
            display: none;
        }
        .offers-column {
            padding: 10%;
            min-width: 100% !important;
        }
        .offers-header {
            text-align: center;
        }
        .offers-paragraph {
            text-align: center;
        }
        .offers-content {
            background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../../assets/offer-image.jpg') no-repeat;
            background-size: cover;
        }
    }
</style>