<template>
    <v-card flat tile class="grey lighten-1 white--text text-center">
        <v-card-text>
            <v-tooltip bottom v-for="icon in icons" :key="icon">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="mx-4 white--text" icon v-bind="attrs" v-on="on">
                        <v-icon size="24px">
                            {{ icon.icon }}
                        </v-icon>
                    </v-btn>
                </template>
                <span>{{ icon.name }}</span>
            </v-tooltip>

        </v-card-text>

        <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Powered by Vuetify</strong>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        icons: [
            { name: 'Youtube', icon: 'mdi-youtube' },
            { name: 'Twitter', icon: 'mdi-twitter' },
            { name: 'Instagram', icon: 'mdi-instagram' },
            { name: 'Thingiverse', icon: 'mdi-printer-3d' },
            { name: 'Github', icon: 'mdi-github' },
            { name: 'StackOverflow', icon: 'mdi-stack-overflow' },
            { name: 'Xing', icon: 'mdi-xing' },
            { name: 'LinkedIn', icon: 'mdi-linkedin' },
        ],
    }),
}
</script>

<style scoped lang="scss">

</style>