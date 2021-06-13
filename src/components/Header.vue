<template>
    <v-parallax class="pa-0" dark height="1000"
        :src="headerGround1"
    >
        <v-row align="center" justify="center" class="pa-0">
            <v-col class="text-center pa-0" cols="12">
                <img :src="logoBunt" class="display-1" id="logo"/>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
import logoBunt from '@/assets/Bilder/jpl-f02-01.png';
import headerGround1 from '@/assets/Bilder/headerBackground.jpg';

export default {
    name: 'Header',
    data: () => ({
       logoBunt,
        headerGround1,
    }),
}
</script>

<style scoped lang="scss">
#logo {
    width: 35%;
}
</style>