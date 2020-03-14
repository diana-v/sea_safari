<template>
    <div class="review-container" id="review">
        <div class="review-content">
            <div>
                <h2 class="review-header">Atsiliepimai</h2>
                    <div>
                        <v-carousel
                                cycle
                                height="350px"
                                class="review-carousel"
                                hide-delimiter-background
                                light
                        >
                            <v-carousel-item
                                    eager
                                    v-for="(review, i) in reviews"
                                    :key="i"
                                    class="review-carousel-item"
                            >
                                <img v-bind:src="review.img"
                                     class="review-image">
                                <h5 class="review-title">{{review.name}}</h5>
                                <p class="review-text">{{review.comment}}</p>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                reviews: [
                    {
                        img: require('../../assets/review_vilma.jpg'),
                        name: 'Zotovienė Vilma',
                        comment: 'NEREALIAI!!! Rekomendacijos pačios geriausios nuo mūsų šeimos. Plaukimą būtinai pakartosim'
                    },
                    {
                        img: require('../../assets/review_giedre.jpg'),
                        name: 'Giedrė Fid',
                        comment: 'Aukščiausias įvertinimas! Superiniai įspūdžiai! Būtina išbandyti!'
                    },
                    {
                        img: require('../../assets/review_vincentas.jpg'),
                        name: 'Vincentas Liškauskas',
                        comment: 'Nesitikėjau, kad Lietuvos vandenyse galima pamatyti tiek daug! Patiko, rekomenduoju'
                    },
                    {
                        img: require('../../assets/review_edvis.jpg'),
                        name: 'Edvis Izokaitis',
                        comment: 'Visiems rekomenduoju išbandyti šitą reikalą, adrenalino dozė garantuota'
                    }
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
        background-color: white;
    }

    .review-content {
        padding: 5% 10% 5% 10%;
        display: grid;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .review-header {
        font-size: 48px;
        letter-spacing: -2px;
        padding-bottom: 2%;
        font-weight: 900;
    }

    .review-carousel {
        width: 100vh;
    }

    .review-carousel-item {
        padding: 5% 10%;
    }

    .review-image {
        width: 120px;
        height: 120px;
        border-radius: 100px;
    }

    .review-title {
        margin: 10px 0 10px 0;
        font-size: 25px;
        color: #91160d;
    }

    .review-text {
        font-size: 18px;
    }

    @media screen and (max-width: 1100px) {
        .review-carousel {
            width: 80vh;
        }
    }

    @media screen and (max-width: 900px) {
        .review-carousel {
            width: 50vh;
        }
    }

    @media screen and (max-width: 550px) {
        .review-carousel {
            width: 40vh;
        }
        .review-carousel-item {
            padding: 10% 10%;
        }
    }
</style>