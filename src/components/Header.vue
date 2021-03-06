<template>
    <v-parallax class="pa-0" dark height="1000"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
        <v-row align="center" justify="center" class="pa-0">
            <v-col class="text-center pa-0" cols="12">
                <img :src="logoBunt" class="display-1" id="logo"/>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
import logoBunt from '@/assets/Bilder/jpl-f02-01.png'

export default {
    name: 'Header',
    data: () => ({
       logoBunt
    }),
}
</script>

<style scoped lang="scss">
#logo {
    width: 35%;
}
</style>