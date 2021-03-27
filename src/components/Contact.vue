<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Kontakt</h2></v-card-title>
        <v-card-text>
            <v-row dense>
                <v-col cols="6">
                    <div>
                        Wenn Sie Fragen zu den Projekten haben, die ich bereits vollendet habe, weitere technische
                        Hintergründe benötigen oder einfach jemanden zum Reden brauchen,
                        können Sie mich gerne unter den Daten auf der nebenstehenden Visitenkarte erreichen.
                    </div>
                </v-col>
                <v-col cols="6">
                    <v-card outlined elevation="2">
                        <v-card-title>Kontakt unter:</v-card-title>
                        <v-card-text>
                            <div>
                                <v-row>
                                    <v-col cols="2">
                                        <p>Email: </p>
                                    </v-col>
                                    <v-col>
                                        <p>contact[at]jpl-photo-and.software</p>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped lang="scss">

</style>