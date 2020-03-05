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
                            <p class="card-text">{{review.comment}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                reviews: [
                    {img:'https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-1/c0.10.320.320a/p320x320/71567983_10215536984278907_8133566068800094208_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=nsH-yrDbMFoAX94npRQ&_nc_ht=scontent.fvno2-1.fna&oh=a0b26866ee162db9197914c82118d129&oe=5E9A3592', name:'Zotovienė Vilma', comment:'NEREALIAI!!! Rekomendacijos pačios geriausios nuo mūsų šeimos. Plaukimą būtinai pakartosim'},
                    {img:'https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-1/p320x320/50971857_2277009785650752_5787176888979947520_o.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=ahhyMsLKPjgAX_yDyjw&_nc_ht=scontent.fvno2-1.fna&_nc_tp=6&oh=3a04615c8c611fe8a5ed3d0b3429f292&oe=5E82BBCB', name:'Giedrė Fid', comment:'Aukščiausias įvertinimas! Superiniai įspūdžiai! Būtina išbandyti!'},
                    {img:'https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-1/p320x320/70185471_2646483418703692_9039602227483770880_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=68LQmJ3JnfcAX__TtwB&_nc_ht=scontent.fvno2-1.fna&_nc_tp=6&oh=a521e7097d84e42614e2abe5163f4eac&oe=5E82BC50', name:'Vincentas Liškauskas', comment:'Nesitikėjau, kad Lietuvos vandenyse galima pamatyti tiek daug! Patiko, rekomenduoju'},
                    {img:'https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-1/p320x320/26734481_2007816725902956_5528178524180619501_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=V7kEkYqWCV0AX8LCXi-&_nc_ht=scontent.fvno2-1.fna&_nc_tp=6&oh=3428331a409b5e1374fa48a91defdede&oe=5E952411', name:'Edvis Izokaitis', comment:'Visiems rekomenduoju išbandyti šitą reikalą, adrenalino dozė garantuota'}
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
        margin: 10px 0 0 0;
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