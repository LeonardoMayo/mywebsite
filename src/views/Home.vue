<template>
    <v-container fluid class="pa-0">
        <v-row class="pa-0">
            <v-col class="pa-0">
                <Header />
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class="pa-0">
                <QuoteOfTheMonth />
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class="pa-0">
                <Introduction />
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class="pa-0">
                <ProjectsList />
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class="pa-0">
                <Skills />
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class="pa-0">
                <JobTimeline />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import ProjectsList from "@/components/ProjectsList";
import Skills from "@/components/Skills";
import JobTimeline from "@/components/JobTimeline";
import QuoteOfTheMonth from "@/components/QuoteOfTheMonth";

export default {
    name: "Home",
    components: {
        QuoteOfTheMonth,
        JobTimeline,
        Skills,
        ProjectsList,
        Introduction,
        Header
    }
}
</script>

<style scoped lang="scss">

</style>
