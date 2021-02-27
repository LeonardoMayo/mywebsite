<template>
    <v-app>
        <!-- Navigation drawer on the left -->
        <NavBar v-if="false" />

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid class="pa-0">

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer padless>
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Footer from "@/components/Footer";
import NavBar from "@/components/navdrawer/NavBar";

export default {
    name: 'App',
    components: { NavBar, Footer },
    data: () => ({}),
    methods: {
        ...mapActions([ 'initAxiosInstance' ]),
    },
    created() {
        this.initAxiosInstance();
    },
    beforeMount() {},
    mounted() {},
};
</script>
