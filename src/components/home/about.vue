<template>
    <div id="about">
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
    .about-content {
        padding: 5% 10%;
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
        background-image: url('../../assets/slide_3.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 550px;
        background-position: top;
    }

    .about-column {
        align-content: center;
        display: grid;
        padding: 0 0 0 70px;
    }

    .about-header {
        font-size: 48px;
        letter-spacing: -2px;
        font-weight: 900;
    }

    .about-paragraph {
        color: rgb(145, 22, 13);
        font-style: italic;
        font-size: 17px;
        text-align: start;
    }

    @media screen and (max-width: 750px) {
        .about-header {
            padding-top: 10%;
        }
        .about-column {
            padding: 0;
        }
    }
</style>