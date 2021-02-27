<template>
    <v-card flat class="px-10 py-2 mx-auto" style="max-width: 1000px">
        <v-card-title><h2>Skilltree</h2></v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="4"><v-progress-circular size="50" value="75" /></v-col>
                <v-col cols="4"><v-progress-circular size="50" value="75" /></v-col>
                <v-col cols="4"><v-progress-circular size="50" value="75" /></v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'Skills',
}
</script>

<style scoped lang="scss">

</style>