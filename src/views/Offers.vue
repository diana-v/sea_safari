<template>
  <div class="offers">
    <div class="blog-wrap">
      <div class="blog-container">
        <v-card link hover
                class="blog-card">
          <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  class="white--text align-end"
                  height="200px"
          >
          </v-img>
          <v-card-title class="blog-card-title">Ekstremali išvyka į jūrą</v-card-title>
          <v-card-text class="text--primary">
            <div>Šis ekstremalus plaukimas Baltijos jūra su kateriu įsimins ilgam! Greitaeigis R.I.B. kateris ir
              audringa Baltijos jūra nenuvils ir didžiausio adrenalino fanatiko. Kelionės metu turėsite galimybe
              praplaukti Danės upe, pamatyti Baltijos jūros vartus. Skrodžianti Baltijos jūros bangas pajausite visą
              jūros galybę, greitį, vėją ir vandens purslus.</div>
          </v-card-text>
          <div class="time-cost-wrapper">
            <div class="column">
              <v-card-text class="offers-time-cost">Laikas:</v-card-text>
              <v-card-text class="offers-time-cost"><i class="fas fa-clock"></i> 30min</v-card-text>
            </div>
            <div class="column">
              <v-card-text class="offers-time-cost">Nuo:</v-card-text>
              <v-card-text class="offers-time-cost"><i class="fas fa-euro-sign"></i> 15</v-card-text>
            </div>
            <div class="column">
              <v-btn>Daugiau</v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>


<style>
  .time-cost-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    height: 125px;
  }
  .column {
    float: left;
    grid-column: 1fr;
    padding: 10px;
  }

  .offers-time-cost {
    padding-bottom: 0px;
    font-size: 1.25rem;
  }

  .offers {
    text-align: start;
  }

  .blog-container {
    float: left;
    margin: 20px 5%;
    width: 40%;
  }

  @media screen and (max-width: 825px) {
    .blog-container {
      width: 80%;
      margin: 0 auto;
      padding: 20px;
      float: unset;
    }
  }

  @media screen and (min-width: 1300px) {
    .blog-container {
      width: 30%;
      margin: 0 20px;
      padding: 20px;
      /*float: unset;*/
    }
  }

  .blog-card {
    text-decoration: none !important;
    width: 600px;
  }

  .blog-card-title {
    color: #0c3c60;
  }

  .blog-card-title:hover {
    color: #7f244b !important;
  }

  .blog-card-subtitle {
    border-bottom: 3px solid #7f244b;
    width: 150px;
  }

  .blog-wrap:hover .blog-card {
    opacity: .3;
  }

  .blog-wrap .blog-card:hover {
    opacity: 1;
  }

  .offers-cost-time {
    padding: none !important;
  }
</style>