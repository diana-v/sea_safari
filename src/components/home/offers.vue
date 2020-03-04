<template>
    <div class="item offers-container" id="offers">
        <div class="offers-content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="offers-header">Pasiūlymai</h2>
                    </div>
                    <div class="col-sm-12">
                        <p class="offers-paragraph">Mes teikiame paslaugas įmonių šventėms ir privatiems
                            vakarėliams -
                            gimtadieniai,
                            bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas
                            išvykas į
                            populiariausias Lietuvos pajūri o vietas - Juodkrantė, Nida, Mingės kaimas ir kiti
                            Jūsų
                            pasirinkti maršrutai.</p>
                        <p class="offers-paragraph">Jeigu nesugalvojate ką dovanoti artimam žmogui arba dvėjojate ar parinkta dovana
                            suteiks džiaugsmo, mes siūlome SeaSafari dovanų kuponus. <a href="#" class="offers-gift">Juos galite įsigyti čia.</a></p>
                    </div>
                    <div class="col-sm-12 offer-button-container">
                        <div class="my-2">
                            <v-btn large color="rgb(145, 22, 13)" class="offer-button" href="/pasiulymai">Mūsų
                                pasiūlymai
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* */
    /* OFFERS */
    /* */
    .offers-container {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        background-color: white;
    }

    .offers-header {
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 900;
        margin-bottom: 0;
    }

    .offers-content {
        padding: 5% 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .offer-button {
        color: white !important;
        text-decoration: none !important;
    }

    .offer-button-container {
        padding-top: 0 !important;
    }

    .offers-paragraph {
        font-size: 17px !important;
        padding: 0 3%;
        margin-bottom: 0;
    }

    .offers-gift {
        color: #91160d !important;
    }
</style>