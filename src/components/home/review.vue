<template>
    <div class="item review-container" id="review">
        <div class="review-content">
            <div>
                <h2 class="review-header">Atsiliepimai</h2>
                <div class="card-columns review-column">
                    <div class="card bg-light shadow p-3 mb-3 review-card" v-for="(review, i) in reviews" :key="i">
                        <div class="card-body text-center review-card-content">
                            <img v-bind:src="review.img" class="review-image">
                            <h4 class="card-title review-title">{{review.name}}</h4>
                            <p class="card-text review-text">{{review.comment}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!--<template>-->
<!--    <div class="item review-container" id="review">-->
<!--        <div class="review-content">-->
<!--            <div class="col-md-6 safety-column">-->
<!--                <div class="row">-->
<!--                    <div>-->
<!--                        <h2 class="review-header">Atsiliepimai</h2>-->
<!--                        <div class="card-columns review-column">-->
<!--                            <div class="card bg-light shadow p-3 mb-3 review-card" v-for="(review, i) in reviews" :key="i">-->
<!--                                <div class="card-body text-center review-card-content">-->
<!--                                    <img v-bind:src="review.img" class="review-image">-->
<!--                                    <h4 class="card-title review-title">{{review.name}}</h4>-->
<!--                                    <p class="card-text review-text">{{review.comment}}</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-md-6 image-column">-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<script>
    export default {
        data () {
            return {
                reviews: [
                    {img: require ('../../assets/review_vilma.jpg'), name:'Zotovienė Vilma', comment:'NEREALIAI!!! Rekomendacijos pačios geriausios nuo mūsų šeimos. Plaukimą būtinai pakartosim'},
                    {img: require ('../../assets/review_giedre.jpg'), name:'Giedrė Fid', comment:'Aukščiausias įvertinimas! Superiniai įspūdžiai! Būtina išbandyti!'},
                    {img: require ('../../assets/review_vincentas.jpg'), name:'Vincentas Liškauskas', comment:'Nesitikėjau, kad Lietuvos vandenyse galima pamatyti tiek daug! Patiko, rekomenduoju'},
                    {img: require ('../../assets/review_edvis.jpg'), name:'Edvis Izokaitis', comment:'Visiems rekomenduoju išbandyti šitą reikalą, adrenalino dozė garantuota'}
                ],
            }
        }
    }
</script>

<style scoped>
    /* */
    /* REVIEW */
    /* */
    .review-container {
        min-height: 100vh;
        overflow: auto;
        background-color: white;
    }

    .review-column .review-card {
        display: grid;
    }

    .review-content {
        padding: 5% 10% 1% 10%;
        display: grid;
        justify-content: center;
        align-items: center;
        height: 100%;
        /*background: linear-gradient(rgba(255,255,255, 1), rgba(17,110,149, 1)) no-repeat;*/
        /*background-size: cover;*/
    }

    .review-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 2%;
        font-weight: 900;
    }

    .review-column {
        column-count: 2 !important;
    }

    .review-card-content {
        padding: 0 !important;
    }

    .review-card {
        border: none !important;
        min-height: 250px;
        padding: 0.5rem !important;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .review-image {
        width: 80px;
        height: 80px;
        border-radius: 100px;
    }

    .review-title {
        margin: 10px 0 10px 0;
        /*color: #17486b;*/
        color: #91160d;
    }

    .review-text {
        padding: 0 15px 0 15px;
    }

    @media screen and (max-width: 630px ) {
        .review-column {
            padding: 0;
            column-count: 1 !important;
        }
        .review-card {
            min-height: initial !important;
        }
        .review-content {
            padding: 0 10% 0 10%;
        }
        .review-image {
            display: none;
        }
        .review-title {
            padding: 2%;
        }
    }
</style>