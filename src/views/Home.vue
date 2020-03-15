<template>
    <div class="app-container">
        <b-navbar class="navbar navbar-expand-lg navbar-light fixed-top toolbar"
                  v-bind:class="scrolled_toolbar" toggleable="lg">
            <b-navbar-brand class="navbar-brand" href="#home">Sea Safari</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-nav class="navbar-nav ml-auto mt-2 mt-lg-0" v-b-scrollspy:scrollspy-nested>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="#about">Apie Mus
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="#offers">Pasiūlymai
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="#safety">Saugumas
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="#review">Atsiliepimai
                    </b-nav-item>
                    <b-nav-item class="nav-item ml-4 toolbar-item" href="#contact">Kontaktai
                    </b-nav-item>
                </b-nav>
            </b-collapse>
        </b-navbar>

        <div id="scrollspy-nested" data-offset="50" class="home-scroll">
            <div class="home-container" id="home">
                <div>
                    <h1 class="home-header">R.I.B. CHARTER EXPERIENCE</h1>
                </div>
            </div>
            <s_about></s_about>
            <s_offers></s_offers>
            <s_safety></s_safety>
            <s_review></s_review>
            <s_contact></s_contact>
        </div>
    </div>
</template>

<script>
    import about_section from "../components/home/about";
    import offers_section from "../components/home/offers";
    import safety_section from "../components/home/safety";
    import review_section from "../components/home/review";
    import contact_section from "../components/home/contact";

    export default {
        name: "app",
        components: {
            's_about': about_section,
            's_offers': offers_section,
            's_safety': safety_section,
            's_review': review_section,
            's_contact': contact_section,
        },
        data() {
            return {
                scrolled_toolbar: 'transparent',
                menu: [
                    {title: 'Apie Mus', link: '/#about'},
                    {title: 'Pasiūlymai', link: '/#offers'},
                    {title: 'Saugumas', link: '/#safety'},
                    {title: 'Atsiliepimai', link: '/#review'},
                    {title: 'Kontaktai', link: '/#contact'},
                ],
            }
        },

        mounted() {
            this.lastScrollPosition = window.pageYOffset
            window.addEventListener('scroll', this.onScroll)
            const viewportMeta = document.createElement('meta')
            viewportMeta.name = 'viewport'
            viewportMeta.content = 'width=device-width, initial-scale=1'
            document.head.appendChild(viewportMeta)
        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
        },

        methods: {
            onScroll() {
                if ((window.pageYOffset < 0) || (Math.abs(window.pageYOffset) < 120)) {
                    this.scrolled_toolbar = 'transparent'
                    return
                }
                this.scrolled_toolbar = 'toolbar-scrolled';
            }
        }
    }
</script>

<style>
    html, body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-display: swap;
    }

    .app-container {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .toolbar {
        font-size: 18px;
    }

    .toolbar-item > a {
        color: white !important;
    }

    .toolbar :hover {
        color: #91160d !important;
    }

    .toolbar-scrolled {
        background: white !important;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3) !important;
    }

    .toolbar-scrolled .toolbar-item > a {
        color: #7c7c7d !important;
    }

    .toolbar-scrolled .toolbar-item > a:hover {
        color: #91160d !important;
    }

    .home-scroll {
        position: relative;
    }

    .home-container {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/slide_2.jpg");
        background-repeat: no-repeat;
        position: relative;
        background-position: top;
        background-attachment: fixed;
    }

    .home-header {
        font-weight: 900;
        font-size: 5rem;
        color: white;
        width: 100%;
        position: absolute;
        top: 50%;
    }

    @media screen and (max-width: 720px) {
        .home-header {
            font-size: 3rem;
        }
    }

    @media screen and (max-width: 600px) {
        .home-container {
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/slide_2_2.jpg");
        }
    }
</style>
