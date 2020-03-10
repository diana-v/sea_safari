<template>
    <div class="item about-container" id="about">
        <div class="about-content">
            <div>
                <div>
                <div class="row about-row">
                        <div class="col-md-6 image-column">
                            <img class="about-image" src="@/assets/about-image.jpg">
                        </div>
                    <div class="col-md-6 about-column">
                        <div class="about-hp">
                            <h2 class="about-header"> Apie Mus</h2>
                            <p class="about-paragraph">Mūsų tikslas atskleisti tikrąjį, stulbinantį Lietuvos pajūrio
                                kraštovaizdį jaudinančiu ir įspūdžių kupinu būdu, plaukiant greitaeigiu R.I.B.
                                laivu.</p>
                            <p>Plaukdami su „Sea Safari“ jūs priartėsite prie gamtos ir patirsite nepamirštamus
                                įspūdžius. Mes siūlome du R.I.B. laivus, varomus 300 AG ir 600 AG varikliais, kurių
                                maksimalus greitis siekia net iki 60 mazgų.</p>
                            <p>Manevringi ir greitaeigiai laivai užtikrina saugias, patogias ir turiningas išvykas. Mes
                                garantuojame adrenalino pliupsnį ir praskaidrintą kasdienybę, nes mūsų keleivių emocijos
                                - didžiausias ,,Sea Safari" įkvėpimas! </p>
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
        name: "home_about",
    }
</script>

<style scoped>
    /* */
    /* ABOUT */
    /* */


    /* Inline #7 | http://localhost:8080/ */

    /*.about-paragraph[data-v-a7635c26] {*/
    /*    !* padding: 0 8%; *!*/
    /*    !* margin-bottom: 0; *!*/
    /*}*/

    /*!* Element | http://localhost:8080/ *!*/

    /*div.col-md-6:nth-child(2) {*/
    /*    align-content: center;*/
    /*    display: grid;*/
    /*}*/



    .about-container {
        min-height: 100vh;
        overflow: auto;
        background-color: white;
    }

    .about-column {
        align-content: center;
        display: grid;
        padding-right: 50px;
    }

    .image-column {
        max-width: 500px;
    }

    .about-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 0 0 2% 0;
        font-weight: 900;
        /*text-align: center;*/
    }

    .about-content {
        padding: 5% 5%;
        align-items: center;
        display: grid;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .about-row {
        display: flex;
        justify-content: center;
        text-align: start;
        font-size: 17px;
    }

    .about-image {
        max-height: 550px;
        top: 0;
    }

    @media screen and (max-width: 950px) {
        .image-column {
            display: none;
        }
        .about-column {
            padding: 10%;
            min-width: 100% !important;
        }
    }

    .about-paragraph {
        /*color: rgb(145, 22, 13);*/
        color: #17486b;
        font-style: italic;
        font-size: 17px !important;
        /*text-align: center;*/
    }

    /*.about-hp {*/
    /*    padding-bottom: 2px;*/
    /*}*/

    /*@media screen and (max-width: 575px) {*/
    /*    .contact-content {*/
    /*        padding: 0 10% 0 10%;*/
    /*    }*/
    /*}*/

    /*@media screen and (max-width: 480px) {*/
    /*    .about-paragraph {*/
    /*        text-align: start;*/
    /*        padding: 0;*/
    /*    }*/
    /*}*/
</style>