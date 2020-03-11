<template>
    <div class="item about-container" id="about">
        <div class="about-content">
            <div>
                <div>
                <div class="row about-row">
                        <div class="col-md-6 image-column"></div>
                    <div class="col-md-6 about-column">
                        <div>
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
    .about-container {
        min-height: 100vh;
        overflow: auto;
        background-color: white;
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
    }

    .image-column {
        max-width: 450px;
        background-image: url('../../assets/about-image.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 550px;
    }

    .about-column {
        align-content: center;
        display: grid;
        padding: 0 0 0 50px;
    }

    .about-header {
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 900;
        text-align: center !important;
    }

    .about-paragraph {
        color: rgb(145, 22, 13);
        /*color: #17486b;*/
        font-style: italic;
        font-size: 17px;
        text-align: start;
    }

    @media screen and (max-width: 800px) {
        .image-column {
            display: none;
        }
        .about-column {
            padding: 10%;
            min-width: 100% !important;
        }
        .about-content {
            background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../../assets/about-image.jpg') no-repeat;
            background-size: cover;
        }
        .about-row {
            text-align: center;
        }
    }
</style>