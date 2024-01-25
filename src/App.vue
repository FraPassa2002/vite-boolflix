<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from "./store.js";

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        search() {
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '7e9b068242bc3c0f2b98674f97fa71c2',
                        query: this.store.searchText
                    }
                })
                .then((response) => {
                    console.log(response.data.results);

                    this.store.movies = response.data.results;
                });

            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '7e9b068242bc3c0f2b98674f97fa71c2',
                        query: this.store.searchText
                    }
                })
                .then((response) => {
                    console.log('SERIES', response.data.results);

                    this.store.series = response.data.results;
                });
        }       
    }
}
</script>

<template>
    <AppHeader @performSearch="search()"/>
    <AppMain />
    <!-- <AppFooter /> -->
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
