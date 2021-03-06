<template>
    <v-card elevation="4" outlined color="white" style="width: 75%; align-self: center" class="ma-auto">
        <v-card-text class="pa-0">
            <v-row class="ma-0">
                <v-col cols="6" class="pa-0">
                    <div class="projectImage"
                         :style="`background-image: url(${ titleImg });`"/>
                </v-col>
                <v-col cols="6"  style="color: black">
                    <v-card-title class="pb-0">{{ title }}</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        {{ smallDescription }}
                    </v-card-text>
                    <v-card-actions class="pa-0">
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" text style="align-self: end"
                               @click="routeToArticle">
                            Mehr >
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        title: { required: true, type: String },
        smallDescription: { required: true, type: String },
        titleImg: { required: true, type: String },
        linkToArticle: { required: true, type: String }
    },
    methods: {
        routeToArticle() {
            this.$router.push(this.linkToArticle);
        }
    }
}
</script>

<style scoped>
.projectImage {
    height: 250px !important;
    width: 100%;
    background-size: cover;
    overflow: hidden;
}
</style>