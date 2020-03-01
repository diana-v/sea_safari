<template>
    <div>
        <vue-scroll-snap fullscreen>

            <div id="pp-nav" class="right eut-dark" style="color: rgb(0, 0, 0); margin-top: -53.5px;">
                <ul>
                    <li data-tooltip="">
                        <a class="nav-btn active" href="#home">
                            <span style="border-color: rgb(0, 0, 0);"> </span>
                        </a>
                    </li>
                    <li data-tooltip="">
                        <a class="nav-btn" href="#about">
                            <span style="border-color: rgb(0, 0, 0);"> </span>
                        </a>
                    </li>
                    <li data-tooltip="">
                        <a class="nav-btn" href="#offers">
                            <span style="border-color: rgb(0, 0, 0);"> </span>
                        </a>
                    </li>
                    <li data-tooltip="">
                        <a class="nav-btn" href="#safety">
                            <span style="border-color: rgb(0, 0, 0);"> </span>
                        </a>
                    </li>
                    <li data-tooltip="">
                        <a class="nav-btn" href="#contact">
                            <span style="border-color: rgb(0, 0, 0);"> </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="item home-container" id="home">
                <app-toolbar></app-toolbar>
                <div class="home-content">
<!--                    <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"><i-->
<!--                            class="fab fa-instagram fa-2x"></i></a>-->
<!--                    <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank"><i-->
<!--                            class="fab fa-facebook-f fa-2x"></i></a>-->
                </div>
                <h1 class="home-header">R.I.B. Charter Experience</h1>
            </div>

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
                            </div>
                            <div class="col-sm-12">
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

            <div class="item safety-container" id="safety">
                <div class="safety-content">
                    <div>
                        <h2 class="safety-header">Saugumas</h2>
                        <p class="safety-paragraph">RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai
                            atsakingai atsižvelgia į jūsų
                            asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo
                            priemones:</p>
                        <div class="card-columns safety-column">
                            <div class="card bg-light shadow p-3 mb-5 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/lifebouy.png" class="safety-image">
                                    <p class="card-text">Gelbėjimo ratas</p>
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-5 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/lifevest.png" class="safety-image">
                                    <p class="card-text">Gelbėjimosi liemenė</p>
                                </div>
                            </div>
                            <div class="card bg-light shadow p-3 mb-5 safety-card">
                                <div class="card-body text-center safety-card-content">
                                    <img src="@/assets/medkit.png" class="safety-image">
                                    <p class="card-text">Vaistinėlė</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item contact-container" id="contact">
                <div class="contact-content">
                    <div class="contact-border">
                        <h2 class="contact-header">Kontaktai</h2>
                        <p class="contact-paragraph">Rezervacijos priimamos el. paštu, telefonu arba susisiekus per
                            Facebook.</p>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 contact-column">
                                    <div>
                                        <h5 class="contact-details-header">Adresas:</h5>
                                        <p class="contact-details-paragraph">Danės g. 5, Klaipėda</p>
                                        <p class="contact-details-paragraph">Palangos Tiltas, Palanga</p>
                                    </div>
                                    <div>
                                        <h5 class="contact-details-header">El. Paštas:</h5>
                                        <p class="contact-details-paragraph">seasafari.lietuva@gmail.com</p>
                                    </div>
                                    <div>
                                        <h5 class="contact-details-header">Telefonas:</h5>
                                        <p class="contact-details-paragraph">+37067572133</p>
                                    </div>
                                    <div class="social-media-container">
                                        <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"><i
                                                class="fab fa-instagram fa-2x"></i></a>
                                        <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank"><i
                                                class="fab fa-facebook-f fa-2x"></i></a>
                                    </div>
                                </div>
                                <div class="col-sm-6 contact-column">
                                    <form
                                        style="--v-error-base: #b71c1c">
                                        <v-text-field
                                                dark
                                                color="red darken-4"
                                                v-model="name"
                                                :error-messages="nameErrors"
                                                :counter="10"
                                                label="Vardas"
                                                required
                                                @input="$v.name.$touch()"
                                                @blur="$v.name.$touch()"
                                        ></v-text-field>
                                        <v-text-field
                                                dark
                                                color="red darken-4"
                                                v-model="email"
                                                :error-messages="emailErrors"
                                                label="El. Paštas"
                                                required
                                                @input="$v.email.$touch()"
                                                @blur="$v.email.$touch()"
                                        ></v-text-field>
                                        <v-text-field
                                                dark
                                                color="red darken-4"
                                                :rules="rules"
                                                :counter="250"
                                                required
                                                rows="1"
                                                label="Žinutė"
                                        ></v-text-field>

                                        <v-btn color="rgb(145, 22, 13)" class="contact-button mr-4" @click="submit">
                                            Pateikti
                                        </v-btn>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </vue-scroll-snap>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, maxLength, email} from 'vuelidate/lib/validators'


    export default {
        mixins: [validationMixin],

        validations: {
            name: {required, maxLength: maxLength(10)},
            email: {required, email},
        },

        data: () => ({
            name: '',
            email: '',
            rules: [
                value => !!value || 'Privaloma įvesti.',
                value => (value || '').length >= 20 || 'Min 20 characters',
            ]

        }),
        methods: {
            submit() {
                this.$v.$touch()
            }
        },
        computed: {
            nameErrors() {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Vardas negali viršyti 10 raidžių.')
                !this.$v.name.required && errors.push('Privaloma įvesti.')
                return errors
            },
            emailErrors() {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Įveskite teisingą el. pašto adresą.')
                !this.$v.email.required && errors.push('Privaloma įvesti.')
                return errors
            },
        },

        mounted() {
            var header = document.getElementById("pp-nav");
            var btns = header.getElementsByClassName("nav-btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active");
                    current[0].className = current[0].className.replace(" active", "");
                    this.className += " active";
                });
            }
        }
    }


</script>
<style scoped>

</style>
<style>
    @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

    html, body {
        font-family: 'Hind', 'Roboto';
    }

    #pp-nav.right {
        right: 2%;
    }

    #pp-nav {
        position: fixed;
        z-index: 100;
        top: 50%;
        opacity: 1;
    }

    #pp-nav li, .pp-slidesNav li {
        display: block;
        width: 14px;
        height: 13px;
        margin: 7px;
        position: relative;
    }

    #pp-nav li a, .pp-slidesNav li a {
        display: block;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-decoration: none;
    }

    #pp-nav span, .pp-slidesNav span {
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        height: 4px;
        width: 4px;
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        -webkit-transition: all 0.1s ease-in-out;
        -moz-transition: all 0.1s ease-in-out;
        -o-transition: all 0.1s ease-in-out;
        transition: all 0.1s ease-in-out;
    }

    #pp-nav.eut-dark li span {
        background-color: #000000;
    }

    #pp-nav li .active span, .pp-slidesNav .active span {
        height: 12px;
        width: 12px;
        margin: -6px 0 0 -6px;
        border-radius: 100%;
    }

    /* */
    /* HOME */
    /* */
    .home-header {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 15px;
        margin-top: 2%;
        font-size: 250%;
        font-weight: 900;
        /*color: rgb(145, 22, 13);*/
        color: #17486b;
    }

    .home-container {
        min-height: 100%;
    }

    .home-content {
        padding-top: 50vh;
    }

    .social-media-container {
        padding-top: 10%;
        width: 70px;
    }

    .fa-facebook-f {
        color: rgb(145, 22, 13);
        padding-left: 10px;
    }

    .fa-instagram {
        color: rgb(145, 22, 13);
        padding-right: 10px;
    }

    /* */
    /* ABOUT */
    /* */
    .about-container {
        min-height: 100%;
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

    /* */
    /* OFFERS */
    /* */
    .offers-container {
        min-height: 100%;
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

    .offers-paragraph {
        font-size: 17px !important;
        padding: 0 3%;
        margin-bottom: 0;
    }

    /* */
    /* SAFETY */
    /* */
    .safety-container {
        min-height: 100%;
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
    }

    @media screen and (max-width: 787px) {
        .safety-card {
            height: 130px;
        }
    }

    @media screen and (max-width: 575px) {
        .safety-card {
            height: 116px;
        }

        .safety-content {
            padding: 0 10% 0 10%;
        }

        .safety-paragraph {
            padding: 0;
        }
    }

    /* */
    /* CONTACT */
    /* */
    .contact-container {
        min-height: 100%;
        background-image: linear-gradient(to top right, rgba(64, 64, 64, .7), rgba(64, 64, 64, .7)), url("../assets/map.png");
        background-size: cover;
    }

    .contact-header {
        color: white;
        font-size: 48px;
        letter-spacing: -2px;
        padding: 5% 0 2% 0;
        font-weight: 900;
    }

    .contact-content {
        padding: 5% 10% 1% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .contact-border {
        border: 3px solid white;
    }

    .contact-paragraph {
        font-size: 17px !important;
        padding: 0 8%;
        color: white;
        margin-bottom: 0;
    }

    .contact-details-paragraph {
        margin-bottom: 0 !important;
        text-align: start;
        color: white;
    }

    .contact-details-header {
        color: rgb(145, 22, 13);
        text-align: start;
        margin-top: 5%;
        font-weight: bold;
    }

    .contact-column {
        padding: 2% 8% !important;
    }

    .contact-button {
        color: white !important;
        text-decoration: none !important;
        margin-top: 10%;
    }

    div.v-input:nth-child(1) {
        padding-top: 0;
    }

    div.v-input:nth-child(2) {
        padding-top: 22px;
    }

    @media screen and (max-width: 575px) {
        .contact-details-header {
            margin-top: 2%;
        }

        .social-media-container {
            padding-top: 3%;
        }

        .contact-paragraph {
            margin-bottom: 0 !important;
            padding: 0;
        }

        div.container:nth-child(3) {
            padding-top: 0;
        }

        div.col-sm-6:nth-child(2) {
            padding-top: 0;
        }

        div.v-input:nth-child(2) {
            padding-top: 0;
        }

        .contact-button {
            margin-top: 0;
        }

        div.v-input:nth-child(3) {
            padding-top: 0;
        }

        .contact-header {
            padding-bottom: 0;
            margin-bottom: 0;
            padding-top: 2%;
        }

        .contact-content {
            padding: 0 10% 0 10%;
        }
    }
</style>
