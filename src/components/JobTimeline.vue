<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Wo war ich</h2></v-card-title>
        <v-card-text>

            <!-- Job Timeline -->
            <v-timeline>
                <v-timeline-item color="secondary">
                    <template v-slot:icon>
                        <v-icon size="20px" dark>mdi-briefcase-outline</v-icon>
                    </template>
                    <v-card outlined>
                        <v-card-title>Software Developer</v-card-title>
                        <v-card-subtitle>concept | hero UG</v-card-subtitle>
                        <v-card-text>
                            Entwicklung mit Schwerpunkt auf Webfrontend mit Vue, sowie Prototyping
                            <br/>
                            Frühling 2021 - heute
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="secondary">
                    <template v-slot:icon>
                        <v-icon size="20px" dark>mdi-briefcase-outline</v-icon>
                    </template>
                    <v-card outlined class="text-right">
                        <v-card-title style="display: block">Werkstudent Softwareentwicklung</v-card-title>
                        <v-card-subtitle>concept | hero UG</v-card-subtitle>
                        <v-card-text>
                            Verschiedene Projekte in den Bereichen Webentwicklung, Hardwareintegration und VR/AR
                            <br/>
                            Frühling 2019 - Frühling 2021
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="secondary">
                    <template v-slot:icon>
                        <v-icon size="20px" dark>mdi-briefcase-outline</v-icon>
                    </template>
                    <v-card outlined>
                        <v-card-title>Praxissemester Softwareentwicklung</v-card-title>
                        <v-card-subtitle>concept | hero UG</v-card-subtitle>
                        <v-card-text>
                            Entwicklung einer AR-Gastroanwendung, sowie Prototyping in verschiedenen Bereichen
                            <br/>
                            Herbst 2018 - Frühling 2019
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="secondary">
                    <template v-slot:icon>
                        <v-icon size="20px" dark>mdi-briefcase-outline</v-icon>
                    </template>
                    <v-card outlined class="text-right">
                        <v-card-title style="display: block">Wissenschaftl. Hilfskraft</v-card-title>
                        <v-card-subtitle>Hochschule Heilbronn</v-card-subtitle>
                        <v-card-text>
                            Stelle in Entwicklungsprojekt für eine AR-Gaming Anwendung auf dem BuGa Gelände Heilbronn
                            <br/>
                            Frühling 2018 - Herbst 2018
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="accent">
                    <template v-slot:icon>
                        <v-icon size="20px" dark>mdi-school-outline</v-icon>
                    </template>
                    <v-card outlined>
                        <v-card-title style="display: block">Software Engineering Bachelor</v-card-title>
                        <v-card-subtitle>Hochschule Heilbronn</v-card-subtitle>
                        <v-card-text>
                            Software Engineering Studium mit Schwerpunkten Games Engineering und IT Management
                            <br/>
                            Winter 2016 - Frühling 2021
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="accent">
                    <template v-slot:icon>
                        <v-icon size="20px" dark>mdi-school-outline</v-icon>
                    </template>
                    <v-card outlined class="text-right">
                        <v-card-title style="display: block">Abitur</v-card-title>
                        <v-card-subtitle>JKG Heilbronn</v-card-subtitle>
                        <v-card-text>
                            bis Winter 2016
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