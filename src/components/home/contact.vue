<template>
    <div class="contact-container">
        <div class="contact-content">
            <div class="slide-in-bottom" id="contact" v-bind:class="animation">
                <main class="contact-border">
                    <h2 class="contact-header">Kontaktai</h2>
                    <p class="contact-paragraph">Rezervacijos priimamos el. paštu, telefonu arba susisiekus per
                        Facebook.</p>
                    <div class="container">
                        <div class="row">
                            <section class="col-sm-6 contact-column">
                                <p class="contact-details-header">Adresas:</p>
                                <p class="contact-details-paragraph">Danės g. 5, Klaipėda</p>

                                <p class="contact-details-header">El. Paštas:</p>
                                <p class="contact-details-paragraph">seasafari.lietuva@gmail.com</p>

                                <p class="contact-details-header">Telefonas:</p>
                                <p class="contact-details-paragraph">+37067572133</p>

                                <figure class="social-media-container">
                                    <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"
                                       alt="Instagram" rel="noreferrer">
                                        <font-awesome-icon :icon="['fab', 'instagram']" class="icon instagram-icon" alt="Instagram"/>
                                        Instagram</a>
                                    <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank" alt="Facebook"
                                       rel="noreferrer">
                                        <font-awesome-icon :icon="['fab', 'facebook']" class="icon facebook-icon" alt="Facebook"/>
                                        Facebook</a>
                                </figure>
                            </section>
                            <section class="col-sm-6 contact-column">
                                <form
                                        style="--v-error-base: #b71c1c">
                                    <v-text-field
                                            light
                                            v-model="name"
                                            :error-messages="nameErrors"
                                            :counter="30"
                                            label="Vardas"
                                            required
                                            @input="$v.name.$touch()"
                                            @blur="$v.name.$touch()"
                                    ></v-text-field>
                                    <v-text-field
                                            light
                                            color="red darken-4"
                                            v-model="email"
                                            :error-messages="emailErrors"
                                            label="El. Paštas"
                                            required
                                            @input="$v.email.$touch()"
                                            @blur="$v.email.$touch()"
                                    ></v-text-field>
                                    <v-textarea
                                            light
                                            v-model="message"
                                            :counter="250"
                                            required
                                            rows="3"
                                            no-resize
                                            label="Žinutė"
                                            :error-messages="messageErrors"
                                            @input="$v.message.$touch()"
                                            @blur="$v.message.$touch()"
                                    ></v-textarea>

                                    <v-btn class="contact-button mr-4" @click="submit">
                                        Pateikti
                                    </v-btn>
                                </form>
                            </section>
                        </div>
                    </div>
                </main>
                <div style="--v-error-base: #b71c1c">
                    <v-alert v-if="c_error" dense type="error">{{c_error_msg}}</v-alert>
                    <v-alert v-if="c_success" dense type="success">
                        Išsiųsta sėkmingai. Susisieksime su Jumis per artimiausias 24 val..
                    </v-alert>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {validationMixin} from "vuelidate";
    import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

    import { VAlert, VBtn, VTextarea, VTextField } from 'vuetify/lib';

    export default {
        components: {
            VAlert,
            VBtn,
            VTextarea,
            VTextField
        },
        props: ['animation'],
        data: () => ({
            name: null,
            email: null,
            message: null,
            c_error: false,
            c_success: false,
            c_error_msg: null,
        }),
        methods: {
            submit() {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.c_error = true;
                    this.c_error_msg = "Įvyko klaida, prašome patikrinti duomenis ir bandyti dar kartą."
                    return
                }
                this.$http.post(this.$contact_url, {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                    .then(() => {
                        this.c_error = false;
                        this.c_success = true;
                    })
                    .catch((error) => {
                        this.c_error = true;
                        this.c_error_msg = error.response.data;
                    })
            }
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Vardas negali viršyti 30 raidžių.');
                !this.$v.name.required && errors.push('Privaloma įvesti.');
                return errors
            },
            emailErrors() {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('Įveskite teisingą el. pašto adresą.');
                !this.$v.email.required && errors.push('Privaloma įvesti.');
                return errors
            },
            messageErrors() {
                const errors = [];
                if (!this.$v.message.$dirty) return errors;
                !this.$v.message.minLength && errors.push('Įveskite žinutę.');
                !this.$v.message.required && errors.push('Privaloma įvesti.');
                return errors
            },
        },
        mixins: [validationMixin],

        validations: {
            name: {required, maxLength: maxLength(30)},
            email: {required, email},
            message: {required, minLength: minLength(20)},
        },
    }
</script>

<style scoped>
    /* */
    /* CONTACT */
    /* */
    .contact-container {
        background: url('../../assets/contact/contact-image.jpeg') no-repeat;
        background-size: cover;
        height: 100vh;
        min-height: 1000px;
    }

    .contact-content {
        padding: 5% 10% 1% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .contact-border {
        background-size: cover;
        background-color: white;
        padding: 3%;
    }

    .contact-header {
        color: black;
        font-size: 48px;
        letter-spacing: -2px;
        padding: 5% 0 2% 0;
        font-weight: 900;
    }

    .contact-paragraph {
        font-size: 17px !important;
        padding: 0 8%;
        margin-bottom: 0;
        color: black;
    }

    .contact-details-header {
        color: black;
        text-align: start;
        margin-top: 5%;
        font-weight: bold;
        font-size: 20px;
    }

    .contact-details-paragraph {
        margin-bottom: 0 !important;
        text-align: start;
        color: black;
        word-wrap: break-word;
    }

    .social-media-container {
        padding-top: 15%;
        width: 70px;
        display: flex;
    }

    .social-media-container > a:nth-child(1) {
        padding-right: 20px;
    }

    .social-media-container > a {
        color: #91160d;
    }

    .facebook-icon {
        color: rgb(145, 22, 13);
        height: 48px;
        width: 48px;
    }

    .instagram-icon {
        color: rgb(145, 22, 13);
        height: 48px;
        width: 48px;
    }

    .contact-column {
        padding: 2% 5% 2% 5%!important;
    }

    .contact-button {
        color: white !important;
        text-decoration: none !important;
        margin-top: 10%;
        background-color: rgb(145, 22, 13) !important;
        border-color: rgb(145, 22, 13) !important;
    }

    div.v-input:nth-child(1) {
        padding-top: 0;
    }

    div.v-input:nth-child(2) {
        padding-top: 30px;
    }

    @media screen and (max-width: 600px) {
        .contact-content {
            padding: 0 10% 0 10%;
        }

        .contact-border-container {
            width: initial;
            height: initial;
            padding-top: 10%;
        }
    }

    /* ANIMATE */
    .slide-in-bottom.animate {
        -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-in-bottom {
        0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-bottom {
        0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media only screen and (max-width: 768px) {
        * {
            /*CSS transitions*/
            -o-transition-property: none !important;
            -moz-transition-property: none !important;
            -ms-transition-property: none !important;
            -webkit-transition-property: none !important;
            transition-property: none !important;
            /*CSS transforms*/
            -o-transform: none !important;
            -moz-transform: none !important;
            -ms-transform: none !important;
            -webkit-transform: none !important;
            transform: none !important;
            /*CSS animations*/
            -webkit-animation: none !important;
            -moz-animation: none !important;
            -o-animation: none !important;
            -ms-animation: none !important;
            animation: none !important;
            opacity: 1 !important;
        }
    }
</style>