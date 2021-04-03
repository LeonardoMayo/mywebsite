<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Meine Projekte</h2></v-card-title>
        <v-card-subtitle>Hier sind meine aktuellsten Projekte aufgelistet. Dazu zählen Updates zu alten Projekten,
            kleinere Ideen für Zwischendurch oder auch Nicht-IT-Themen wie Fototrips.</v-card-subtitle>
        <v-card-text>
            <v-carousel v-model="model" style="height: 500px"
                        hide-delimiter-background
                        show-arrows-on-hover>
                <v-carousel-item>
                    <div style="height: 100%; display: flex">
                        <ProjectCard
                            :title="'AR PvPlattform'"
                            :title-img="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
                            :small-description="'Ein Projekt für ein 1v1 Augmented Reality Game in dem ' +
                             'Spieler sich ihren Weg zum Ziel bauen müssen, in einer AR Umgebung. ' +
                             'Dieses Projekt war Teil meiner Bachelor-Thesis.'"
                            :link-to-article="'/ar-pvplatform/datenschutz'"
                        />
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card-text>
    </v-card>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    data: () => ({
        model: true,
    }),
}
</script>

<style scoped lang="scss">

</style>