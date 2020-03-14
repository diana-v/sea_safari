<template>
    <div class="contact-container" id="contact">
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
                                        :rules="rules"
                                        :counter="250"
                                        required
                                        rows="3"
                                        no-resize
                                        label="Žinutė"
                                ></v-textarea>

                                <v-btn class="contact-button mr-4" @click="submit">
                                    Pateikti
                                </v-btn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {validationMixin} from "vuelidate";
    import {email, maxLength, required} from "vuelidate/lib/validators";

    export default {
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
                !this.$v.name.maxLength && errors.push('Vardas negali viršyti 30 raidžių.')
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
        mixins: [validationMixin],

        validations: {
            name: {required, maxLength: maxLength(30)},
            email: {required, email},
        },
    }
</script>

<style scoped>
    /* */
    /* CONTACT */
    /* */
    .contact-container {
        background:  url('../../assets/contact-image.jpeg') no-repeat;
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
    }

    .contact-details-paragraph {
        margin-bottom: 0 !important;
        text-align: start;
        color: black;
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

    .contact-column {
        padding: 2% 8% !important;
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

    @media screen and (max-width: 575px) {
        .contact-content {
            padding: 0 10% 0 10%;
        }
    }
</style>