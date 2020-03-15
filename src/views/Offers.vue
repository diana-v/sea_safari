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
                            <div class="image-title-container">
                                <img class="card-img offer-image"
                                     v-bind:src="offer.img">
                                <h2 class="offer-title">{{offer.title}}</h2>
                            </div>
                            <p class="offer-description">{{offer.description}}</p>
                            <div class="card-columns offer-details-column">
                                <div class="card-body text-center offer-card-content"
                                     v-for="(detail, index2) in offer.details" v-bind:key="index2">
                                    <img v-bind:src="detail.icon" class="detail-image">
                                    <p class="card-text detail-title">{{detail.title}}</p>
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
    @media screen and (max-width: 700px ) {
        .offer-column {
            padding: 0;
            column-count: 1 !important;
        }
    }

    .offer-column {
        column-count: 2;
    }

    .image-title-container {
        position: relative;
        text-align: center;
        color: white;
    }

    .offer-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding: 5% 5% 2% 5%;
        font-weight: 900;
    }

    .offer-paragraph-container {
        padding: 0 10% 0 10%;
    }

    .offer-container {
        padding: 0 7% 7% 7%;
    }

    .offer-paragraph {
        text-align: start;
        font-size: 17px;
    }

    .offer-image {
        height: 250px;
        overflow: hidden;
        object-fit: cover;
        filter: brightness(50%);
    }

    .detail-title {
        font-size: 15px;
    }

    .offer-container {
        overflow: auto;
        background-color: white;
    }

    .offer-title {
        font-size: 30px;
        font-weight: 900;
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        word-wrap: break-word;
    }

    .offer-content {
        /*padding: 5% 10% 1% 10%;*/
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .offer-description {
        font-size: 15px;
        padding: 5% 5% 0 5%;
        text-align: start;
    }

    .offer-card-content {
        padding: 0 !important;
    }

    .offer-card {
        border: none !important;
        /*min-height: 770px !important;*/
        position: relative;
    }

    .detail-image {
        width: 50px;
        height: 50px;
    }

    .offer-details-column {
        /*padding: 0 5%;*/
        column-count: 2 !important;
        /*position: absolute;*/
        /*bottom: 0 !important;*/
        /*width: 100%;*/
        /*left: 0;*/
    }
</style>