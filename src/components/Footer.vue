<template>
    <v-card flat tile class="grey lighten-3 text-center" width="100%">
        <v-card-text>
            <v-tooltip bottom v-for="icon in icons" :key="icon.index">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-4" icon v-bind="attrs" v-on="on" @click="openLink(icon.link)">
                        <v-icon size="24px">
                            {{ icon.icon }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>{{ icon.name }}</span>
            </v-tooltip>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
                <a class="footerLinks">AR PvPlatform Datenschutzbestimmung</a>
                <a class="footerLinks">Impressum</a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="">
            {{ new Date().getFullYear() }} — <strong>Powered by Vuetify</strong>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        icons: [
            { name: 'Youtube', icon: 'mdi-youtube', link: 'https://www.youtube.com/channel/UCPscWtfnpPcChkWBu1u-vZQ' },
            { name: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com/AvocadoUkulele' },
            { name: 'Instagram', icon: 'mdi-instagram', link: 'https://www.instagram.com/jpl_fotography/' },
            { name: 'Thingiverse', icon: 'mdi-printer-3d', link: 'https://www.thingiverse.com/' },
            { name: 'Github', icon: 'mdi-github', link: 'https://github.com/LeonardoMayo' },
            { name: 'StackOverflow', icon: 'mdi-stack-overflow', link: 'https://stackoverflow.com/' },
            { name: 'Xing', icon: 'mdi-xing', link: 'https://www.xing.com/profile/Jan_Leppich/cv' },
            { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://de.linkedin.com/' },
        ],
    }),
    methods: {
        openLink(link) {
            window.open(link)
        }
    }
}
</script>

<style scoped lang="scss">
.footerLinks {
    color: grey !important;
    margin: 0.25em;
    text-underline: grey;
    text-decoration: underline;
}
</style>