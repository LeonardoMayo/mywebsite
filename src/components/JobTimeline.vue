<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Wo war ich</h2></v-card-title>
        <v-card-text>
            <v-timeline>
                <v-timeline-item color="secondary">
                    <v-card outlined>
                        <v-card-title>Software Developer</v-card-title>
                        <v-card-text>
                            Entwicklung mit Schwerpunkt auf Webfrontend mit Vue, sowie Prototyping
                            <br/>
                            Frühling 2021 - heute
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="secondary">
                    <v-card outlined class="text-right">
                        <v-card-title style="display: block">Studium Software Engineering</v-card-title>
                        <v-card-text>
                            Studium mit Schwerpunkten Games Engineering und IT Management
                            <br/>
                            Winter 2016 - Frühling 2021
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'JobTimeline'
}
</script>

<style scoped lang="scss">

</style>