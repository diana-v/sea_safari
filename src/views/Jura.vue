<template>
  <div class="offer-container">
    <b-navbar class="navbar navbar-expand-lg navbar-light toolbar" toggleable="lg">
      <b-navbar-brand class="navbar-brand toolbar-brand" href="/#home"><img class="toolbar-logo"
                                                                            src="../assets/home/sea_safari_logo.svg"
                                                                            alt="Plaukiantis laivas">
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
    <main class="row">
      <section class="col-md-6 offer-image"></section>
      <section class="col-md-6 description-column">
        <h1 class="offer-header">Ekstremali išvyka į jūrą</h1>
        <article class="offer-description">
          <p>Tai populiariausia "Sea Safari" pramoga. Šios trumpos kelionės metu turėsite galimybę praplaukti
            Danės upe, pasižvalgyti uosto akvatorijoje, pamatyti Baltijos jūros vartus.</p>
          <p>Skrodžiant Baltijos jūros bangas iki 90km/h greičiu greitaeigiu R.I.B. laivu pajausite visą jūros
            galybę, greitį, vėją ir vandens purslus! Tai pusvalandžio trukmės išvyka maršrutu Danės upė –
            Baltijos jūra – Danės upė, nenuvilianti net didžiausio adrenalino fanatiko. Ši pramoga puikiai
            tinka privatiems vakarėliams - mergvakariai, bernvakariai, gimtadieniai ar įmonių šventės.
            Atsižvelgiant į Jūsų pageidavimus, išvykos trukmę ir maršrutą galima keisti.</p>
          <ul>
            <li>Privatus plaukimas su 600 AG (tik Jūsų kompanija) - 240€ (iki 10 keleivių, papildomas keleivis +20€)</li>
            <li>Privatus plaukimas su 300 AG (tik jūsų kompanija) - 160€ (iki 10 keleivių)</li>
            <li>Jei yra jungiama keleivių grupė (ne privatus plaukimas) - 25€/asm</li>
          </ul>

        </article>
        <div class="icon-column">
          <div class="card bg-light shadow p-3 mb-3 icon-card" v-for="(detail, index) in details"
               v-bind:key="index">
            <div class="icon-content">
              <div>
                <div class="icon-container">
                  <img class="card-img icon-image"
                       v-bind:src="detail.icon" alt="Išvykos aprašmymas">
                  <p class="icon-title">{{ detail.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <res-form ref="dialog" destination="į Baltijos Jūrą"></res-form>
      </section>
    </main>
  </div>
</template>

<script>
import ReservationForm from '../components/ReservationForm';
import {BNavbar} from 'bootstrap-vue/src/components/navbar/navbar'
import {BNav} from 'bootstrap-vue/src/components/nav/nav'
import {BNavbarBrand} from 'bootstrap-vue/src/components/navbar/navbar-brand'
import {BNavbarToggle} from 'bootstrap-vue/src/components/navbar/navbar-toggle'
import {BNavItem} from 'bootstrap-vue/src/components/nav/nav-item'
import {BCollapse} from 'bootstrap-vue/src/components/collapse/collapse';

export default {
  components: {
    'res-form': ReservationForm,
    BNavbar,
    BNavbarBrand,
    BNav,
    BNavbarToggle,
    BNavItem,
    BCollapse
  },
  data() {
    return {
      dialog: false,
      details: [
        {title: 'Trukmė: 30min', icon: require('../assets/offer-icons/time.png')},
        {title: 'Kaina: €25/asm', icon: require('../assets/offer-icons/price.png')},
        {title: 'Apranga suteikiama', icon: require('../assets/offer-icons/shirt.png')},
        {title: 'Šiltuoju metų laiku', icon: require('../assets/offer-icons/season.png')},
        {title: 'Nuo 11-23 keleivių', icon: require('../assets/offer-icons/people.png')},
        {title: 'Būtina rezervacija', icon: require('../assets/offer-icons/info.png')},
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
  font-display: swap;
}

.offer-container {
  min-height: 100vh;
  /*padding-right: 2%;*/
}

.toolbar-logo {
  height: 50px;
}

.toolbar-brand {
  display: grid !important;
  font-size: 12px !important;
  color: #17486b !important;
  font-weight: bold;
  font-style: italic;
}

.toolbar {
  background: white !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
  width: 100vw;
  z-index: 50;
}

.toolbar-item > a {
  color: #17486b !important;
}

.toolbar-item > a:hover {
  color: #91160d !important;
}

.offer-image {
  background-image: url("../assets/offers/baltijos-jura.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.description-column {
  margin: auto 0;
  min-height: 100vh;
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
  padding: 2% 2%;
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
