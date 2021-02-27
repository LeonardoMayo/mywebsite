<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title>Hallo,</v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" style="display: inline-flex">
                    <p class="pr-1 mr-4">
                        ich bin Jan. Ich habe Software Engineering an der Hochschule Heilbronn studiert und mich auf Frontend und Mobile Lösungen spezialisiert.
                        In meiner Freizeit arbeite ich gerne an kleinen und großen Projekten, auch außerhalb meiner Spezialisierungen.
                        Seien es Microcontoller, Hardware Upcycling oder auch 3D / CAD Themen. Außerhalb der IT schneide ich gerne Videos, fahr Mountainbike und... so Zeugs eben.
                    </p>
                    <v-avatar size="7.5vw">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Introduction'
}
</script>

<style scoped lang="scss">

</style>