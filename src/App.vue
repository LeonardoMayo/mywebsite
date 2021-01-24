<template>
  <v-app>
    <v-navigation-drawer>
      <!-- -->
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    ...mapActions([ 'initAxiosInstance' ]),
  },
  created() {
    this.initAxiosInstance();
  },
  beforeMount() {
  },
  mounted() {

  },
};
</script>
