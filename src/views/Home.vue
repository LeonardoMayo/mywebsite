<template>
    <v-container fluid class="pa-0">
        <v-row class="pa-0">
            <v-col class="pa-0">
                <Header />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <HelloWorld />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Header from "@/components/Header";

export default {
    name: "Home",
    components: {
        HelloWorld,
        Header
    }
}
</script>

<style scoped lang="scss">

</style>
