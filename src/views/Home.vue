<template>
  <div class="snapper">
    <app-toolbar></app-toolbar>

    <div class="home-container">
      <div>
        <a href="https://www.instagram.com/seasafari.lietuva/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="https://www.facebook.com/seasafari.lietuva/" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
      </div>
      <h1 class="home-header">R.I.B. Charter Experience</h1>
    </div>

    <div class="about-container" id="about">
      <div class="about-content">
      <h2 class="about-header"> Apie Mus</h2>
        <div class="row about-row">
          <div class="col-sm-5">
            <p>Pasinaudokite proga apžiūrėti Lietuvos pajūrio kraštovaizdį ir uosto akvatoriją adrenalino pripildytu ir jaudinančiu būdu. Mūsų RIB „Sea Safari“ laive jūs priartėsite prie gamtos ir patirsite nepamirštamus įspūdžius.</p>
            <p>„Sea Safari“ turi du RIB laivus,  varomus 300 AG ir  600 AG varikliais, kurių maksimalus greitis siekia iki 60 mazgų. Atstumas Klaipėda - Juodkrantė įveikiamas per 20 min., o Klaipėda - Nida per 45 min. ,,Sea Safari" veikia ir kaip vandens taksi. Tai puiki galimybė išvengti automobilių spūsčių, kelto ir ekologijos mokečio, vykstant į Nidą ar Juodkrantę.</p>
          </div>
          <div class="col-sm-5">
            <p>Mes teikiame paslaugas įmonių šventėms ir privatiems vakarėliams - gimtadieniai, bernvakariai, mergvakariai. Renkame grupes išvykoms į jūrą. Siūlome turiningas išvykas į populiariausias Lietuvos pajūrio vietas - Juodkrantė, Nida, Mingės kaimas ir kiti Jūsų pasirinkti maršrutai.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="offers-container" id="offers">
      <div class="offers-content">
        <h2 class="offers-header">Pasiūlymai</h2>
          <div class="row offers-row">
            <div class="col-sm-4 offers-column" v-for="(card, index) in cards" v-bind:key="index"
            >
              <v-img v-bind:src="card.img" gradient="rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)" class="offer-image">
              <div class="offers-title"><a><span class="offers-number">{{card.span_no}}</span>{{card.title}}</a></div>
              <p class="offers-description">{{card.description}}</p>
              </v-img>
            </div>
          </div>
        </div>
      </div>

    <div class="safety-container" id="safety">
      <div class="safety-content">
      <h2 class="safety-header">Saugumas</h2>
        <p>RIB laivai yra manevringi ir labai saugūs, o mūsų laivavedžiai atsakingai atsižvelgia į jūsų asmeninio saugumo užtikrinimą kiekvieno plaukimo metu. Mes naudojame šias saugumo priemones:</p>
        <div class="row safety-row">
          <div class="col-sm-4">
            <img class="safety-image">
          </div>
          <div class="col-sm-4"></div>
          <div class="col-sm-4"></div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Ekstremali išvyka į jūrą', span_no: '01 | ', description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.', img:require('@/assets/jura.jpg')},
        { title: 'Išvyka į Mingės kaimą', span_no: '02 | ', description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.', img:require('@/assets/minges-kaimas.jpg')},
        { title: 'Išvyka į Juodkrantę', span_no: '03 | ', description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.', img:require('@/assets/juodkrante.jpg')},
        { title: 'Ekstremali išvyka į jūrą', span_no: '04 | ', description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.', img:require('@/assets/jura.jpg')},
        { title: 'Išvyka į Mingės kaimą', span_no: '05 | ', description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.', img:require('@/assets/minges-kaimas.jpg')},
        { title: 'Išvyka į Juodkrantę', span_no: '06 | ', description: 'Skrodžianti Baltijos jūros bangas pajausite visą jūros galyb, greitį, vėją ir vandens purslus.', img:require('@/assets/juodkrante.jpg')},
      ],
    }),
  }
</script>

<style>
  .snapper {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }

  .snapper div {
    scroll-snap-align: start;
  }
  /* HOME */
  .home-header {
    background-color: rgba(255,255,255, 0.5);
    padding: 15px;
    margin-top: 2%;
    font-size: 250%;
  }
   .home-container {
     padding-top: 50vh;
     height: 100vh;
   }

   .fa-facebook-f {
     color: #0c3c60;
     padding-left: 10px;
   }

   .fa-instagram {
     color: #0c3c60;
     padding-right: 10px;
   }


   /* ABOUT */
  .about-container {
    height: 100vh;
    background-color: white;
  }

  .about-header {
    font-size: 48px;
    letter-spacing: -2px;
    padding-bottom: 20px;
  }

  .about-content {
    padding: 10% 0;
  }

  .about-row {
    display: flex;
    justify-content: center;
    text-align: start;
  }



  /* OFFERS */
  .offers-container {
    height: 100vh;
    background-color: white;
  }

  .offers-header {
    font-size: 48px;
    letter-spacing: -2px;
    padding-bottom: 20px;
  }

  .offers-content {
    padding: 10% 10%;
  }

  .offers-number {
    color: white;
    font-weight: bold;
  }

  .offers-title {
    text-decoration: none;
    text-align: start;
    padding: 20px 20px 0 20px;
    color: white;
    font-weight: bold;
  }

  .offers-description {
    text-align: start;
    padding: 20px 20px 0 20px;
    color: white;
  }

  /*.offers-title:hover {*/
  /* !*color: #91160d !important;*!*/
  /*  color: white;*/
  /*}*/

  .offers-column {
    background-origin: content-box;
    background-size: cover;
    padding: 20px 20px;
  }

  .offer-image:hover {
    box-shadow: 0 0 20px rgba(33,33,33,.6);
  }

  div.offers-column:nth-child(3) > div:nth-child(1) > div:nth-child(1) {
    padding-bottom: 67% !important;
  }

  div.col-sm-4:nth-child(6) > div:nth-child(1) > div:nth-child(1) {
    padding-bottom: 67% !important;
  }

  .offer-image {
    border-radius: 7px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42));
  }

  /* SAFETY */
  .safety-container {
    height: 100vh;
    background-color: white;
  }

  .safety-header {
    font-size: 48px;
    letter-spacing: -2px;
    padding-bottom: 20px;
  }

  .safety-content {
    padding: 10% 10%;
  }

</style>
