<script>
import SingleMovie from "./SingleMovie.vue";
import { store } from "../store.js";


export default {
    data() {
        return {
            store
        };
    },
    methods: {
        getFlag(lang) {
            let finalLink = '';
            if (lang == 'en') {
                finalLink = 'https://flagicons.lipis.dev/flags/4x3/gb.svg';
            }
            else if (lang == 'ja') {
                finalLink = 'https://flagicons.lipis.dev/flags/4x3/jp.svg';
            }
            else {
                finalLink = 'https://flagicons.lipis.dev/flags/4x3/' + lang + '.svg';
            }
            return finalLink;
        }
    },
    components: { 
        SingleMovie
    }
}
</script>

<template>
    <main>
        <div>
            <h2>
                MOVIES
            </h2>
            <ul>
                <li v-for="(movie, i) in store.movies" :key="i">
                    <SingleMovie 
                        :titleOrName="movie.title"
                        :originalTitleOrName="movie.original_title"
                        :originalLanguage="movie.original_language"
                        :voteAvarage="movie.vote_avarage"
                    />
                </li>
            </ul>
        </div>

        <hr>

        <!-- <div>
            <h2>
                SERIES
            </h2>
            <ul>
                <li v-for="(singleSeries, i) in store.series" :key="i">
                    <SingleMovie 
                        :titleorName="singleSeries.name"
                        :originalTitleOrName="singleSeries.original_name"
                        :originalLanguage="singleSeries.original_language"
                        :voteAvarage="singleSeries.vote_avarage"
                    />
                </li>
            </ul>
        </div> -->
    </main>
</template>

<style lang="scss" scoped>
img {
    height: 50px;
}
</style>
