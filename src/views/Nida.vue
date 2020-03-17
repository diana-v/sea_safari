<template>
    <div class="offer-container">
        <b-navbar class="navbar navbar-expand-lg navbar-light fixed-top toolbar"
                  v-bind:class="scrolled_toolbar" toggleable="lg">
            <b-navbar-brand class="navbar-brand" href="/#home">Sea Safari</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-nav class="navbar-nav ml-auto mt-2 mt-lg-0" v-b-scrollspy:scrollspy-nested>
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
        <div class="container offer-description-container">
            <div class="row">
                <div class="col-md-6 offer-image"></div>
                <div class="col-md-6">
                    <h1 class="offer-header">Išvyka į Nidą</h1>
                    <div class="offer-description">
                        <p>Plaukdami Nidos pakrante pamatysite ne tik šį nuostabų gamtos kampelį, tačiau ir kitas savo grožiu stebinančias vietas: Nerijos krantus, Preilą, Didžiąsias Nidos kopas.</p>
                        <p>Tai pasiplaukiojimas po Kuršių marias, stebint plačiai atsiveriantį Kuršių nerijos kraštovaizdį, išskirtinę augmeniją, žvejų gyvenvietes. Išlipus į krantą, siūlytume paskanauti šviežios žuvies patiekalų, pėsčiomis pasivaikščioti gyvenvietėje, aplankyti Parnidžio kopą. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.</p>
                    </div>
                </div>
                <div class="col-sm-12 icon-column">
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                details: [
                    {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                    {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                    {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                    {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                    {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                    {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                ]
            }
        }
    }
</script>

<style scoped>
    html, body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    .offer-container {
        padding: 90px 0 2% 0;
        background: url("../assets/offer-background.svg") repeat;
        height: 100%;
        min-height: 100vh;
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

    .offer-description-container {
        background-color: white;
        padding: 2% 4% 0 4%;
    }

    .offer-image {
        background-image: url("../assets/nida.jpg");
        min-height: 400px;
        background-size: cover;
        background-position: center;
    }

    .offer-header {
        color: black;
        padding-left: 5%;
        font-weight: 900;
        font-size: 3rem;
        max-height: 100px;
    }

    .offer-description {
        text-align: start;
        font-size: 17px;
        color: black;
        padding: 5% 0 0 5%;
    }


    .icon-column {
        column-count: 6;
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
        font-size: 12px;
    }

    .icon-card {
        border: none !important;
        position: relative;
    }

    .icon-column {
        column-count: 6;
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
        .icon-column[data-v-4da1c8df] {
            column-count: 3;
        }
        .icon-card {
            min-height: 122px;
        }
    }
</style>