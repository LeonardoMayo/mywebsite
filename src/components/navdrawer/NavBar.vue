<template>
    <v-navigation-drawer fixed dark color="transparent" permanent>
        <v-list>
            <v-list-item
                v-for="([icon, text], i) in items"
                :key="i"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        items: [
            ['mdi-email', 'Inbox'],
            ['mdi-account-supervisor-circle', 'Supervisors'],
            ['mdi-clock-start', 'Clock-in'],
        ],
    }),
}
</script>

<style scoped>

</style>