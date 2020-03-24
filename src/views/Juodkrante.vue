<template>
    <div class="offer-container">
        <b-navbar class="navbar navbar-expand-lg navbar-light fixed-top toolbar" toggleable="lg">
            <b-navbar-brand class="navbar-brand toolbar-brand" href="/#home"><img class="toolbar-logo"
                                                                                  src="../assets/logo.svg">SEA SAFARI
                LIETUVA
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-nav class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="/#about">Apie Mus
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="/#offers">Pasiūlymai
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="/#safety">Saugumas
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="/#review">Atsiliepimai
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="/#contact">Kontaktai
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>
        <div class="row">
            <div class="col-md-6 offer-image"></div>
            <div class="col-md-6 description-column">
                <h1 class="offer-header">Išvyka į Juodkrantę</h1>
                <div class="offer-description">
                    <p>Išplaukę iš Klaipėdos apiplauksite uosto akvatoriją, grožėsitės unikaliu
                        Kuršių nerijos kraštovaizdžiu, vėjo supūstytomis kopomis.</p>
                    <p>Juodkrantė yra nedidelis, ramus ir tvarkingas kurortas, tai istorinis - urbanistinis draustinis.
                        Kelionė laivu leis grožėtis Juodkrante iš
                        vandens, o tai paliks tik dar daugiau neišdildomų įspūdžių. Išsilipus Juodkrantėje siūlytume
                        aplankyti
                        Raganų kalną, pasivaikščioti akmens skulptūrų parke, paskanauti šviežios žuvies. Atsižvelgiant į
                        Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.</p>
                </div>
                <div class="icon-column">
                    <div class="card bg-light shadow p-3 mb-3 icon-card" v-for="(detail, index) in details"
                         v-bind:key="index">
                        <div class="icon-content">
                            <div>
                                <div class="icon-container">
                                    <img class="card-img icon-image"
                                         v-bind:src="detail.icon" alt="Išvykos aprašmymas">
                                    <h5 class="icon-title">{{detail.title}}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <res-form ref="dialog" destination="į Juodkrantę"></res-form>
            </div>
        </div>
    </div>
</template>

<script>
    import ReservationForm from '../components/ReservationForm';

    export default {
        components: {
            'res-form': ReservationForm
        },
        data() {
            return {
                dialog: false,
                details: [
                    {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                    {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                    {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                    {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                    {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                    {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                ]
            }
        },
        beforeRouteLeave(to, from, next) {
            if (this.$refs.dialog.dialog) {
                this.$refs.dialog.dialog = false;
                next(false)
            } else {
                next()
            }
        },
    }
</script>

<style scoped>
    html, body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    .offer-container {
        height: 100%;
        min-height: 100vh;
        padding-right: 2%;
        overflow: hidden;
    }

    .toolbar-logo {
        height: 40px;
        width: 130px;
    }

    .toolbar-brand {
        display: grid !important;
        font-size: 12px !important;
        color: #17486b !important;
        font-weight: bold;
        font-style: italic;
    }

    .fixed-top {
        z-index: 100;
    }

    .toolbar {
        background: white !important;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
    }

    .toolbar-item > a {
        color: #7c7c7d !important;
    }

    .toolbar-item > a:hover {
        color: #91160d !important;
    }

    .offer-image {
        background-image: url("../assets/juodkrante.jpg");
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        height: 100%;
    }

    .description-column {
        padding-top: 105px;
        height: 100vh;
        align-content: center;
        display: grid;
    }

    .offer-header {
        color: black;
        font-weight: 900;
        font-size: 3rem;
    }

    .offer-description {
        text-align: start;
        font-size: 17px;
        color: black;
        padding: 0 2%;
    }

    .icon-column {
        column-count: 3;
    }

    .icon-container {
        position: relative;
        text-align: center;
        color: white;
    }

    .icon-image {
        height: 50px;
        width: 50px;
        overflow: hidden;
        object-fit: cover;
    }

    .icon-title {
        color: black;
        font-size: 14px;
    }

    .icon-card {
        border: none !important;
        position: relative;
        padding: 2% !important;
    }

    .icon-column {
        column-count: 3;
        position: relative;
        text-align: center;
        color: white;
    }

    .icon-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    @media screen and (max-width: 770px) {
        .description-column {
            height: initial;
            padding: 5% 8% 0 8%;
        }
    }
</style>