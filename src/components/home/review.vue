<template>
    <div class="item review-container" id="review">
        <div class="review-content">
            <div>
                <h2 class="review-header">Atsiliepimai</h2>
                <div>
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let url = `${this.$FB_HOST}${this.$FB_PAGE}/ratings`;
            this.$http({'url': url, method: "GET", params: {"access_token": this.$FB_KEY}}).then(result => {
                this.entry = result.data;
            }, error => {
                console.error(error);
            });
        },
    }
</script>

<style scoped>
    /* */
    /* REVIEW */
    /* */
    .review-container {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        background-color: white;
    }

    .review-content {
        padding: 5% 10% 1% 10%;
        display: flex;
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
        padding: 0 5%;
        column-count: 2 !important;
    }

</style>