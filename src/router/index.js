import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Sea-Safari Lietuva | Nepamirštami įspūdžiai Jums',
            metaTags: [
                {
                    name: 'description',
                    content: 'Plaukdami su „Sea Safari“ jūs priartėsite prie gamtos ir patirsite nepamirštamus įspūdžius. Mes siūlome du R.I.B. laivus, varomus 300 AG ir 600 AG varikliais, kurių maksimalus greitis siekia net iki 60 mazgų.'
                },
                {
                    property: 'og:description',
                    content: 'Plaukdami su „Sea Safari“ jūs priartėsite prie gamtos ir patirsite nepamirštamus įspūdžius. Mes siūlome du R.I.B. laivus, varomus 300 AG ir 600 AG varikliais, kurių maksimalus greitis siekia net iki 60 mazgų.'
                }
            ]
        }
    },
    {
        path: '/baltijos-jura',
        name: 'Baltijos Jūra',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Jura.vue')
        },
        meta: {
            title: 'Sea-Safari Lietuva | Išvyka į Baltijos Jūrą',
            metaTags: [
                {
                    name: 'description',
                    content: 'Išvyka į Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.'
                },
                {
                    property: 'og:description',
                    content: 'Išvyka į Baltijos jūrą R.I.B. laivu įsimins ilgam. Praplauksite Danės upe, pajausite jūros galybę, greitį, vėją ir vandens purslus.'
                }
            ]
        }
    },
    {
        path: '/nida',
        name: 'Nida',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Nida.vue')
        },
        meta: {
            title: 'Sea-Safari Lietuva | Išvyka į Nidą',
            metaTags: [
                {
                    name: 'description',
                    content: 'Plaukdami Nidos pakrante, pamatysite šį nuostabų gamtos kampelį, plačiai atsiveriantį Kuršių nerijos kraštovaizdį, išskirtinę augmeniją ir žvejų gyvenvietes.'
                },
                {
                    property: 'og:description',
                    content: 'Plaukdami Nidos pakrante, pamatysite šį nuostabų gamtos kampelį, plačiai atsiveriantį Kuršių nerijos kraštovaizdį, išskirtinę augmeniją ir žvejų gyvenvietes.'
                }
            ]
        }
    },
    {
        path: '/minges-kaimas',
        name: 'Mingės Kaimas',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Minges-Kaimas.vue')
        },
        meta: {
            title: 'Sea-Safari Lietuva | Išvyka į Mingės Kaimą',
            metaTags: [
                {
                    name: 'description',
                    content: 'Išvykos metu, aplankysite unikalų Lietuvos Venecija vadinamą kaimą, išvysite Vilhelmo kanalą ir Ventės ragą.'
                },
                {
                    property: 'og:description',
                    content: 'Išvykos metu, aplankysite unikalų Lietuvos Venecija vadinamą kaimą, išvysite Vilhelmo kanalą ir Ventės ragą.'
                }
            ]
        }
    },
    {
        path: '/juodkrante',
        name: 'Juodkrantė',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Juodkrante.vue')
        },
        meta: {
            title: 'Sea-Safari Lietuva | Išvyka į Juodkrantę',
            metaTags: [
                {
                    name: 'description',
                    content: 'Išplaukę iš Klaipėdos apiplauksite uosto akvatoriją, grožėsitės unikaliu Kuršių nerijos kraštovaizdžiu, vėjo supūstytomis kopomis.'
                },
                {
                    property: 'og:description',
                    content: 'Išplaukę iš Klaipėdos apiplauksite uosto akvatoriją, grožėsitės unikaliu Kuršių nerijos kraštovaizdžiu, vėjo supūstytomis kopomis.'
                }
            ]
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
