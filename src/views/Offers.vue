<template>
    <div class="offer">
        <div>
            <app-toolbar></app-toolbar>
            <h3 class="offer-header">Mūsų pasiūlymai</h3>
        </div>
        <div class="offer-paragraph-container">
            <p class="offer-paragraph">Esant nedidelei kompanijai, renkamos keleivių grupės išvykoms. Būtina išankstinė
                registracija telefonu arba Facebook žinute. Nesusirinkus minimaliam keleivių skaičiui, Jūsų noru išvykos
                nevykdomos arba keičiasi kaina asmeniui.</p>
            <p class="offer-paragraph">Privatiems užsakomiesiems plaukimams reikalinga išankstinė rezervacija ir
                avansas. </p>
            <p class="offer-paragraph">Esant labai blogoms oro sąlygoms, plaukimai nevykdomi, avansas grąžinamas.
                Pasikeitus Jūsų asmeniniams planams, prašome pranešti kuo anksčiau.</p>
            <p class="offer-paragraph">Visų išvykų eiga, maršrutai ir trukmė gali būti keičiami pagal Jūsų
                pageidavimus.</p>
            <p class="offer-paragraph">Pramoga neteikiama mažamečiams ar greičio bijantiems vaikams, nebent tai būtų
                privatus užsakymas, kurio metu greitį galėtume sumažinti iki tinkamo visiems keleiviams.</p>
            <p class="offer-paragraph">,,Sea Safari” siūlo du laivus, vienas jų 11 keleivinių vietų, kitas 12 vietų.
                Esant dideliam keleivių skaičiui, yra galimybė plaukti abiem laivais iš karto.</p>
        </div>
        <div>
            <div class="offer-container offer-column">
                <div class="card bg-light shadow p-3 mb-3 offer-card" v-for="(offer, index) in offers"
                     v-bind:key="index">
                    <div class="offer-content">
                        <div>
                            <img class="card-img offer-image"
                                 v-bind:src="offer.img">
                            <h2 class="offer-title">{{offer.title}}</h2>
                            <p class="offer-description">{{offer.description}}</p>
                            <div class="card-columns offer-column">
                                <div class="card-body text-center offer-card-content"
                                     v-for="(detail, index2) in offer.details" v-bind:key="index2">
                                    <img v-bind:src="detail.icon" class="detail-image">
                                    <p class="card-text">{{detail.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--            <div class="container offer-container">-->
            <!--                <div class="row display-flex">-->
            <!--                    <div class="col-md-6">-->
            <!--                        <div class="card offer-card" v-for="(offer, index) in offers" v-bind:key="index">-->
            <!--                            <div class="card-img-body offer-image">-->
            <!--                                <img class="card-img"-->
            <!--                                     v-bind:src="offer.img">-->
            <!--                            </div>-->
            <!--                            <div class="card-body">-->
            <!--                                <h4 class="card-title offer-title">{{offer.title}}</h4>-->
            <!--                                <p class="card-text offer-text">{{offer.description}}</p>-->
            <!--                            </div>-->
            <!--                            <div class="container-fluid row">-->
            <!--                                <div v-for="(detail, index2) in offer.details" v-bind:key="index2"-->
            <!--                                     class="col-6 col-sm-6 offer-details">-->
            <!--                                    <img class="offer-icon" v-bind:src="detail.icon">-->
            <!--                                    <div>-->
            <!--                                        <p>{{detail.title}}</p>-->
            <!--                                    </div>-->
            <!--                                </div>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script>
    import toolbar from '../components/toolbar'

    export default {
        data() {
            return {
                offers: [
                    {
                        img: require('../assets/slide_2.jpg'),
                        title: 'Ekstremali išvyka į jūrą',
                        description: 'Tai populiariausia ,,Sea Safari" pramoga. Šios trumpos kelionės metu turėsite galimybę praplaukti Danės upe, pasižvalgyti uosto akvatorijoje, pamatyti Baltijos jūros vartus. Skrodžiant Baltijos jūros bangas iki 90km/h greičiu greitaeigiu R.I.B. laivu pajausite visą jūros galybę, greitį, vėją ir vandens purslus! Tai pusvalandžio trukmės išvyka maršrutu Danės upė – Baltijos jūra – Danės upė, nenuvilianti net didžiausio adrenalino fanatiko. Ši pramoga puikiai tinka privatiems vakarėliams - mergvakariai, bernvakariai, gimtadieniai ar įmonių šventės. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.',
                        details: [
                            {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                            {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                            {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                            {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                            {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                            {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                        ]
                    },
                    {
                        img: require('../assets/minges-kaimas.jpg'),
                        title: 'Išvyka į Mingės kaimą',
                        description: 'Tai pažintinė kelionė laivu po Nemuno deltos parką, aplankant Uostadvarį ir Rusnės salą. Išvykos metu, aplankysite unikalų Lietuvos Venecija vadinamą kaimą, išvysite Vilhelmo kanalą ir Ventės ragą. Iš Mingės kaimo Minijos upe nuplauksite iki upeivių gyvenvietės Uostadvario, garsėjančio savo bokštu ir vandens kėlimo stoties muziejumi. Išlipus porai valandų į krantą, yra galimybė papietauti Kintuose, žuvies restorane arba Mingės kaime. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.',
                        details: [
                            {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                            {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                            {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                            {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                            {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                            {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                        ]
                    },
                    {
                        img: require('../assets/nida.jpg'),
                        title: 'Išvyka į Nidą',
                        description: 'Plaukdami Nidos pakrante pamatysite ne tik šį nuostabų gamtos kampelį, tačiau ir kitas savo grožiu stebinančias vietas: Nerijos krantus, Preilą, Didžiąsias Nidos kopas. Tai pasiplaukiojimas po Kuršių marias, stebint plačiai atsiveriantį Kuršių nerijos kraštovaizdį, išskirtinę augmeniją, žvejų gyvenvietes. Išlipus į krantą, siūlytume paskanauti šviežios žuvies patiekalų, pėsčiomis pasivaikščioti gyvenvietėje, aplankyti Parnidžio kopą. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.',
                        details: [
                            {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                            {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                            {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                            {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                            {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                            {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                        ]
                    },
                    {
                        img: require('../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išplaukę iš Klaipėdos apiplauksite uosto akvatoriją, grožėsitės unikaliu Kuršių nerijos kraštovaizdžiu, vėjo supūstytomis kopomis. Juodkrantė yra nedidelis, ramus ir tvarkingas kurortas, tai istorinis - urbanistinis draustinis. Kelionė laivu leis grožėtis Juodkrante iš vandens, o tai paliks tik dar daugiau neišdildomų įspūdžių. Išsilipus Juodkrantėje siūlytume aplankyti Raganų kalną, pasivaikščioti akmens skulptūrų parke, paskanauti šviežios žuvies. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.',
                        details: [
                            {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                            {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                            {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                            {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                            {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                            {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                        ]
                    },
                    {
                        img: require('../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išplaukę iš Klaipėdos apiplauksite uosto akvatoriją, grožėsitės unikaliu Kuršių nerijos kraštovaizdžiu, vėjo supūstytomis kopomis. Juodkrantė yra nedidelis, ramus ir tvarkingas kurortas, tai istorinis - urbanistinis draustinis. Kelionė laivu leis grožėtis Juodkrante iš vandens, o tai paliks tik dar daugiau neišdildomų įspūdžių. Išsilipus Juodkrantėje siūlytume aplankyti Raganų kalną, pasivaikščioti akmens skulptūrų parke, paskanauti šviežios žuvies. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.',
                        details: [
                            {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                            {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                            {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                            {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                            {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                            {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                        ]
                    },
                    {
                        img: require('../assets/juodkrante.jpg'),
                        title: 'Išvyka į Juodkrantę',
                        description: 'Išplaukę iš Klaipėdos apiplauksite uosto akvatoriją, grožėsitės unikaliu Kuršių nerijos kraštovaizdžiu, vėjo supūstytomis kopomis. Juodkrantė yra nedidelis, ramus ir tvarkingas kurortas, tai istorinis - urbanistinis draustinis. Kelionė laivu leis grožėtis Juodkrante iš vandens, o tai paliks tik dar daugiau neišdildomų įspūdžių. Išsilipus Juodkrantėje siūlytume aplankyti Raganų kalną, pasivaikščioti akmens skulptūrų parke, paskanauti šviežios žuvies. Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.',
                        details: [
                            {title: 'Trukmė: 30min', icon: require('../assets/time.png')},
                            {title: 'Kaina nuo: €15', icon: require('../assets/price.png')},
                            {title: 'Apranga suteikiama', icon: require('../assets/shirt.png')},
                            {title: 'Šiltuoju metų laiku', icon: require('../assets/season.png')},
                            {title: 'Nuo 11-23 keleivių', icon: require('../assets/people.png')},
                            {title: 'Būtina rezervacija', icon: require('../assets/info.png')},
                        ]
                    },
                ]
            }
        },
        components: {
            'app-toolbar': toolbar
        },
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

    html, body {
        font-family: 'Hind', 'Roboto';
    }

    .offer-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 5% 5% 2% 5%;
        font-weight: 900;
    }

    /*@media screen and (max-width: 575px) {*/
    /*    .offer-header {*/
    /*        padding: 0 7% 5% 7%;*/
    /*    }*/
    /*}*/

    .offer-paragraph-container {
        padding: 0 10% 0 10%;
    }

    .offer-container {
        padding: 0 7% 7% 7%;
    }

    /*.offer-paragraph {*/
    /*    text-align: start;*/
    /*    font-size: 17px;*/
    /*}*/

    .offer-image {
        max-height: 247px;
        overflow: hidden;
    }

    /*.offer-icon {*/
    /*    height: 40px;*/
    /*    width: 40px;*/
    /*}*/

    /*.offer {*/
    /*    background-color: #ffffff;*/
    /*    background-image: -webkit-linear-gradient(70deg, #0c3c60 65%, white 35%);*/
    /*}*/

    /*.card:hover .offer-title,*/
    /*.card:hover .offer-details {*/
    /*    font-weight: bold;*/
    /*    color: rgb(145, 22, 13);*/
    /*}*/

    /*.offer-text {*/
    /*    text-align: start;*/
    /*    min-height: 200px;*/
    /*}*/

    /*.offer-card {*/
    /*    height: 100%;*/
    /*    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 0.5px 1px;*/
    /*    transition: all .3s ease-in-out;*/
    /*}*/

    /*.offer-details {*/
    /*    padding-top: 0;*/
    /*    padding-bottom: 0;*/
    /*}*/

    /*.offer-card:hover {*/
    /*    box-shadow: rgba(225, 225, 225, 0.3) 0px 19px 43px, rgba(225, 225, 225, 0.3) 0px 4px 11px;*/
    /*}*/

    /*.row.display-flex {*/
    /*    display: flex;*/
    /*    flex-wrap: wrap;*/
    /*}*/

    /*.row.display-flex > [class*='col-'] {*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*}*/

    /*@media screen and (max-width: 990px) {*/
    /*    .offer-text {*/
    /*        min-height: 70%;*/
    /*    }*/
    /*}*/

    /*@media (min-width: 768px) {*/
    /*    .offer-container, .container-sm, .container-md {*/
    /*        max-width: none;*/
    /*    }*/
    /*}*/

    /*@media (min-width: 576px) {*/
    /*    .offer-container, .container-sm {*/
    /*        max-width: none;*/
    /*    }*/
    /*}*/

    /*@media (min-width: 768px) {*/
    /*    .offer-container {*/
    /*        max-width: none;*/
    /*    }*/
    /*}*/

    /*@media (min-width: 576px) {*/
    /*    .offer-container {*/
    /*        max-width: none;*/
    /*    }*/
    /*}*/


    .offer-container {
        overflow: auto;
        background-color: white;
    }

    .offer-title {
        font-size: 30px;
        /*letter-spacing: -2px;*/
        padding-bottom: 2%;
        font-weight: 900;
    }

    .offer-content {
        padding: 5% 10% 1% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .offer-description {
        font-size: 17px !important;
        padding: 0 8%;
    }

    .offer-card-content {
        padding: 0 !important;
    }

    .offer-card {
        border: none !important;
    }

    .detail-image {
        width: 60px;
        height: 60px;
    }

    .offer-column {
        padding: 0 5%;
        column-count: 2 !important;
    }
</style>