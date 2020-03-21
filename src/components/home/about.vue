<template>
    <div id="about">
        <div class="about-content">
            <div>
                <div>
                    <div class="row about-row">
                        <div class="col-md-6 image-column slide-in-left" v-bind:class="animation"></div>
                        <div class="col-md-6 about-column">
                            <div>
                                <h2 class="about-header slide-in-right slide-in-right1" v-bind:class="animation"> Apie Mus</h2>
                                <p class="about-paragraph-red slide-in-right slide-in-right2" v-bind:class="animation">Mūsų tikslas atskleisti
                                    tikrąjį, stulbinantį Lietuvos pajūrio
                                    kraštovaizdį jaudinančiu ir įspūdžių kupinu būdu, plaukiant greitaeigiu R.I.B.
                                    laivu.</p>
                                <p class="about-paragraph slide-in-right slide-in-right3" v-bind:class="animation">Plaukdami su „Sea Safari“ jūs priartėsite prie
                                    gamtos ir patirsite nepamirštamus
                                    įspūdžius. Mes siūlome du R.I.B. laivus, varomus 300 AG ir 600 AG varikliais, kurių
                                    maksimalus greitis siekia net iki 60 mazgų.</p>
                                <p class="about-paragraph slide-in-right slide-in-right3" v-bind:class="animation">Manevringi ir greitaeigiai laivai užtikrina
                                    saugias, patogias ir turiningas išvykas. Mes
                                    garantuojame adrenalino pliupsnį ir praskaidrintą kasdienybę, nes mūsų keleivių
                                    emocijos
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
        props: ['animation']
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
        background-image: url('../../assets/about-image.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 550px;
        background-position: top;
        opacity: 0;
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
        opacity: 0;
    }

    .about-paragraph-red {
        color: rgb(145, 22, 13);
        font-style: italic;
        font-size: 17px;
        text-align: start;
        opacity: 0;
    }

    .about-paragraph {
        color: black;
        font-size: 17px;
        text-align: start;
        opacity: 0;
    }

    @media screen and (max-width: 750px) {
        .about-header {
            padding-top: 10%;
        }

        .about-column {
            padding: 0;
        }
    }

    /* ANIMATION */
    .slide-in-left.animate {
        -webkit-animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
        animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
    }

    @-webkit-keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }


    .slide-in-right1.animate {
        -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
    }

    .slide-in-right2.animate {
        -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;
    }

    .slide-in-right3.animate {
        -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
    }

    @-webkit-keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    @-webkit-keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>