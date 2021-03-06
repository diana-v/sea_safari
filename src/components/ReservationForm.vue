<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on }">
                <div class="offer-reservation-button">
                    <v-btn color="#91160d" dark v-on="on">Rezervacija</v-btn>
                </div>
            </template>
            <div class="offer-dialog" style="--v-error-base: #b71c1c">
                <v-card>
                    <v-card-title>
                        <span class="headline">Rezervacija</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                            color="#91160d"
                                            label="Vardas*"
                                            required
                                            v-model="name"
                                            :error-messages="nameErrors"
                                            :counter="30"
                                            @input="$v.name.$touch()"
                                            @blur="$v.name.$touch()"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select
                                            :items="getPassengers"
                                            label="Keleivių skaičius*"
                                            color="#91160d"
                                            required
                                            v-model="passenger"
                                            :error-messages="passengerErrors"
                                            @input="$v.passenger.$touch()"
                                            @blur="$v.passenger.$touch()"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                            color="#91160d"
                                            label="Telefono nr.*"
                                            required
                                            v-model="phone"
                                            :error-messages="phoneErrors"
                                            :counter="20"
                                            @input="$v.phone.$touch()"
                                            @blur="$v.phone.$touch()"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                            light
                                            color="red darken-4"
                                            v-model="email"
                                            :error-messages="emailErrors"
                                            label="El. Paštas*"
                                            required
                                            @input="$v.email.$touch()"
                                            @blur="$v.email.$touch()"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field color="#91160d" disabled v-bind:label=dest_comp></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-menu
                                            ref="menu"
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            :return-value.sync="date"
                                            transition="scale-transition"
                                            required
                                            offset-y
                                            min-width="290px"
                                            color="#91160d"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                    v-model="date"
                                                    label="Pasirinkite datą*"
                                                    prepend-icon="fas fa-calendar-alt"
                                                    readonly
                                                    v-on="on"
                                                    color="#91160d"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" color="#91160d" no-title scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="#91160d" @click="menu = false">Uždaryti</v-btn>
                                            <v-btn text color="#91160d" @click="$refs.menu.save(date)">Pasirinkti
                                            </v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*Būtina užpildyti</small>
                        <v-alert v-if="d_success" dense type="success">
                            Išsiųsta sėkmingai. Susisieksime su Jumis per artimiausias 24 val. patvirtinti rezervaciją.
                        </v-alert>
                        <v-alert v-if="d_error" dense type="error">Įvyko klaida, prašome bandyti dar kartą.</v-alert>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#91160d" text @click="dialog = false">Uždaryti</v-btn>
                        <v-btn color="#91160d" text v-bind:disabled="b_submit.disabled" @click="submit">Išsaugoti
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </v-row>
</template>

<script>
    import {validationMixin} from "vuelidate";
    import {maxLength, required, minLength, email} from "vuelidate/lib/validators";

    export default {
        props: ['destination'],
        data() {
            return {
                name: null,
                passenger: null,
                phone: null,
                email: null,
                date: new Date().toISOString().substr(0, 10),
                b_submit: {disabled: false},
                dialog: false,
                menu: false,
                d_error: false,
                d_success: false,
            }
        },
        computed: {
            getPassengers: function () {
                let people = [];
                for (let i = 0; i < 24; i++) {
                    if (i === 0) {
                        people.push({text: 'Patikslinsiu', value: i})
                    } else {
                        people.push({text: i, value: i})
                    }
                }
                return people
            },
            dest_comp: function () {
                return "Išvyka " + this.destination;
            },
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.maxLength && errors.push('Vardas negali viršyti 30 raidžių.');
                !this.$v.name.required && errors.push('Privaloma įvesti.');
                return errors
            },
            passengerErrors() {
                const errors = [];
                if (!this.$v.passenger.$dirty) return errors;
                !this.$v.passenger.required && errors.push('Privaloma įvesti.');
                return errors
            },
            phoneErrors() {
                const errors = [];
                if (!this.$v.phone.$dirty) return errors;
                !this.$v.phone.maxLength && errors.push('Telefonas negali viršyti 20 simbolių.');
                !this.$v.phone.required && errors.push('Privaloma įvesti.');
                return errors
            },
            emailErrors() {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.email && errors.push('Įveskite teisingą el. pašto adresą.');
                !this.$v.email.required && errors.push('Privaloma įvesti.');
                return errors
            },
        },
        methods: {
            submit: function () {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.d_error = true;
                    return
                }
                this.$http.post(this.$reservation_url, {
                    name: this.name,
                    passengers: this.passenger,
                    phone: this.phone,
                    email: this.email,
                    destination: this.destination,
                    date: this.date,
                })
                    .then(() => {
                        this.d_error = false;
                        this.d_success = true;
                    })
                    .catch(() => {
                        this.d_error = true;
                    })
            }
        },

        mixins: [validationMixin],

        validations: {
            name: {required, maxLength: maxLength(30)},
            passenger: {required},
            phone: {required, maxLength: maxLength(20), minLength: minLength(5)},
            email: {required, email},
            destination: {required},
            date: {required},
        },
    }
</script>

<style>
    .offer-reservation-button {
        margin: 2% 0 5% 0 !important;
    }
</style>
