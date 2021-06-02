<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Skilltree</h2></v-card-title>
        <v-card-text>
            <h3 style="margin-left: 0.5em">Informatik Skills</h3>

            <v-row>
                <v-col cols="4" class="topCol">
                    <v-progress-circular size="100" width="8" value="95" color="accent">C#</v-progress-circular>
                </v-col>
                <v-col cols="4" class="topCol">
                    <v-progress-circular size="100" width="8" value="95" color="accent">JS</v-progress-circular>
                </v-col>
                <v-col cols="4" class="topCol">
                    <v-progress-circular size="100" width="8" value="95" color="accent">Unity</v-progress-circular>
                </v-col>
            </v-row>

            <div style="height: 2em"></div>

            <!-- Other languages -->
            <v-row dense class="skillRows">
                <v-col>
                    <v-progress-linear height="20" value="90" color="accent" dark>HTML/CSS</v-progress-linear>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col>
                    <v-progress-linear height="20" value="90" color="accent" dark>VueJS</v-progress-linear>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col>
                    <v-progress-linear height="20" value="80" color="accent" dark>Java</v-progress-linear>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col>
                    <v-progress-linear height="20" value="70" color="accent" dark>NodeJS</v-progress-linear>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col>
                    <v-progress-linear height="20" value="50" color="accent" dark>Python</v-progress-linear>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col>
                    <v-progress-linear height="20" value="45" color="accent" dark>C++</v-progress-linear>
                </v-col>
            </v-row>

            <div style="height: 2em"></div>

            <!-- more Buzzwords -->
            <v-row dense class="skillRows">
                <v-col>
                    <v-chip
                        dark
                        color="secondary"
                        class="buzzwordChip"
                        v-for="buzzword in suplementaryBuzzwords"
                        :key="buzzword.index"
                    >
                        {{ buzzword }}
                    </v-chip>
                </v-col>
            </v-row>

            <div style="height: 2em"></div>


            <h3 style="margin-left: 0.5em">Weitere Skills</h3>
            <!-- Human languages -->
            <v-row dense class="skillRows">
                <v-col cols="10">
                    <v-progress-linear height="20" value="100" color="accent" dark>Muttersprache</v-progress-linear>
                </v-col>
                <v-col>
                    <span>Deutsch</span>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col cols="10">
                    <v-progress-linear height="20" value="75" color="accent" dark>Fließend</v-progress-linear>
                </v-col>
                <v-col>
                    <span>Englisch</span>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col cols="10">
                    <v-progress-linear height="20" value="50" color="accent" dark>Gut</v-progress-linear>
                </v-col>
                <v-col>
                    <span>Französisch</span>
                </v-col>
            </v-row>
            <v-row dense class="skillRows">
                <v-col cols="10">
                    <v-progress-linear height="20" value="25" color="accent" dark>Grundlagen</v-progress-linear>
                </v-col>
                <v-col><span>Chinesisch</span></v-col>
            </v-row>

            <div style="height: 2em"></div>

            <!-- more Buzzwords -->
            <v-row dense class="skillRows">
                <v-col>
                    <v-chip
                        dark
                        color="secondary"
                        class="buzzwordChip"
                        v-for="buzzword in suplementaryGenericBuzzwords"
                        :key="buzzword.index"
                    >
                        {{ buzzword }}
                    </v-chip>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Skills',
    data: () => ({
        suplementaryBuzzwords: [ 'socket.io', 'ARCore & ARKit', 'SolidEdge' ],
        suplementaryGenericBuzzwords: [ 'Office-Anwendungen', '3D Design', 'Scrum Erfahrung', 'Modellbau', 'Adobe-Anwendungen' ],
    }),
}
</script>

<style scoped lang="scss">
.topCol {
    justify-content: center !important;
    display: inline-flex !important;
}

.skillRows {
    margin: auto;
    padding: 0.5em;
}

.buzzwordChip {
    margin: 0.5em;
}
</style>