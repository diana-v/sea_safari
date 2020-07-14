module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    pwa: {
        manifestOptions: {
            icons: [
                {
                    'src': 'static/favicons/android-icon-192x192.png',
                    'sizes': '192x192',
                    'type': 'image/png',
                },
                {
                    'src': 'static/favicons/android-icon-512x512.png',
                    'sizes': '512x512',
                    'type': 'image/png',
                },
                {
                    'src': 'static/favicons/favicon-16x16.png',
                    'sizes': '16x16',
                    'type': 'image/png',
                },
                {
                    'src': 'static/favicons/favicon-32x32.png',
                    'sizes': '32x32',
                    'type': 'image/png',
                },
                {
                    'src': 'static/favicons/favicon-96x96.png',
                    'sizes': '96x96',
                    'type': 'image/png',
                },
            ]
        }
    }
};