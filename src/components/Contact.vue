<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Kontakt</h2></v-card-title>
        <v-card-text>
            <v-row dense>
                <v-col cols="6">
                    <div>
                        Haben Sie noch Fragen zu meinen vollendeten Projekten?
                        Benötigen Sie weitere technische Hintergründe?
                        Oder brauchen Sie einfach nur jemanden zum Reden?
                        Dann können Sie mich gerne unter den Daten auf der nebenstehenden Visitenkarte erreichen.
                    </div>
                </v-col>
                <v-col cols="6">
                    <v-card outlined elevation="2">
                        <v-card-text>
                            <div>
                                <v-row no-gutters>
                                    <v-col cols="3" class="mr-2">
                                        <v-avatar size="100">
                                            <img :src="logoOhneText" alt="Logo">
                                        </v-avatar>
                                    </v-col>
                                    <v-col>
                                        <h3 class="mb-2">JPL Photo and Software</h3>
                                        <p class="mb-1"><span class="font-italic">“We all need people who will give us feedback. That’s how we improve.”</span> - Bill Gates</p>
                                        <p>So if you have feedback, feel free to tell me at:</p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="3" class="mr-2">
                                    </v-col>
                                    <v-col>
                                        <a
                                            href="mailto:contact@jpl-photo-and.software"
                                            id="mailToLink"
                                        >contact[at]jpl-photo-and.software</a>
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
import logoOhneText from '@/assets/Bilder/JPL-F02-04.png'

export default {
    name: 'Contact',
    data: () => ({
        logoOhneText,
    }),
}
</script>

<style scoped lang="scss">
#mailToLink {
    text-decoration: none !important;
    color: grey !important;
}

#mailToLink:hover {
    text-decoration: underline !important;
}
</style>