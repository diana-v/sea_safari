<template>
    <div class="item about-container" id="about">
        <div class="about-content">
            <div>
                <div class="about-hp">
                    <h2 class="about-header"> Apie Mus</h2>
                    <p class="about-paragraph">Pasinaudokite proga apžiūrėti Lietuvos pajūrio kraštovaizdį ir
                        uosto
                        akvatoriją
                        adrenalino pripildytu ir jaudinančiu būdu.</p>
                </div>
                <div class="row about-row">
                    <div class="col-sm-5">
                        <p> Mūsų RIB „Sea Safari“ laive jūs priartėsite prie gamtos
                            ir patirsite nepamirštamus įspūdžius. "Sea Safari" turi du RIB laivus, varomus 300
                            AG ir
                            600 AG varikliais, kurių maksimalus
                            greitis siekia net iki 60 mazgų.</p>
                    </div>
                    <div class="col-sm-5">
                        <p> Atstumas Klaipėda - Juodkrantė įveikiamas per 20 min., o
                            Klaipėda - Nida per 45 min. "Sea Safari" veikia ir kaip vandens taksi. Tai puiki
                            galimybė išvengti automobilių spūsčių, kelto ir ekologijos mokečio, vykstant į
                            Nidą/Juodkrantę.</p>
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
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
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