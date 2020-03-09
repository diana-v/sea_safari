<template>
    <div class="item about-container" id="about">
        <div class="about-content">
            <div>
                <div class="about-hp">
                    <h2 class="about-header"> Apie Mus</h2>
                    <p class="about-paragraph">Mūsų tikslas atskleisti tikrąjį, stulbinantį Lietuvos pajūrio kraštovaizdį jaudinančiu ir įspūdžių kupinu būdu, plaukiant greitaeigiu R.I.B. laivu.</p>
                </div>
                <div class="row about-row">
                    <div class="col-sm-5">
                        <p>Plaukdami su „Sea Safari“ jūs priartėsite prie gamtos ir patirsite nepamirštamus įspūdžius. Mes siūlome du R.I.B. laivus, varomus 300 AG ir 600 AG varikliais, kurių maksimalus greitis siekia net iki 60 mazgų.</p>
                    </div>
                    <div class="col-sm-5">
                        <p>Manevringi ir greitaeigiai laivai užtikrina saugias, patogias ir turiningas išvykas. Mes garantuojame adrenalino pliupsnį ir praskaidrintą kasdienybę, nes mūsų keleivių emocijos - didžiausias ,,Sea Safari" įkvėpimas! </p>
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

    .about-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 0 0 2% 0;
        font-weight: 900;
    }

    .about-content {
        padding: 10% 10%;
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

    .about-paragraph {
        color: rgb(145, 22, 13);
        padding: 0 8%;
        font-style: italic;
        font-size: 17px !important;
        margin-bottom: 0;
    }

    .about-hp {
        padding-bottom: 2px;
    }

    @media screen and (max-width: 575px) {
        .contact-content {
            padding: 0 10% 0 10%;
        }
    }

    @media screen and (max-width: 480px) {
        .about-paragraph {
            text-align: start;
            padding: 0;
        }
    }
</style>