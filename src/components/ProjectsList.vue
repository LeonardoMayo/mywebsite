<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Projekt Blog</h2></v-card-title>
        <v-card-text>
            <v-carousel v-model="model" style="height: 500px"
                        hide-delimiter-background
                        show-arrows-on-hover>
                <v-carousel-item>
                    <div style="height: 100%; display: flex">
                        <v-card elevation="4" outlined color="white" style="width: 75%; align-self: center" class="ma-auto">
                            <v-card-text class="pa-0">
                                <v-row class="ma-0">
                                    <v-col cols="6" class="pa-0">
                                        <div class="projectImage"/>
                                    </v-col>
                                    <v-col cols="6"  style="color: black">
                                        <v-card-title class="pb-0">AR PvPlattform</v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-text>
                                            Ein Projekt für ein 1v1 Augmented Reality Game in dem Spieler sich
                                            ihren Weg zum Ziel bauen müssen, in einer AR Umgebung.
                                            Dieses Projekt war Teil meiner Bachelor-Thesis.
                                        </v-card-text>
                                        <v-card-actions class="pa-0">
                                            <v-spacer></v-spacer>
                                            <v-btn color="secondary" text style="align-self: end">
                                                Mehr >
                                            </v-btn>
                                        </v-card-actions>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'ProjectsList',
    data: () => ({
        model: true,
    }),
}
</script>

<style scoped lang="scss">
.projectImage {
    background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
    height: 250px !important;
    width: 100%;
    background-size: cover;
    overflow: hidden;
}
</style>