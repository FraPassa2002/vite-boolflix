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
        
    },
    components: { 
        SingleMovie
    }
}
</script>

<template>
    <main class="bg-black text-white">
        <div class="container">
            <div>
                <h2>
                    MOVIES
                </h2>
                    
                <ul class="d-flex flex-wrap ">
                    <li class="mx-4 mb-5" v-for="(movie, i) in store.movies" :key="i">
                        <SingleMovie 
                            :titleOrName="movie.title"
                            :originalTitleOrName="movie.original_title"
                            :originalLanguage="movie.original_language"
                            :voteAvarage="movie.vote_average"
                            :poster="movie.poster_path"
                        />
                    </li>
                </ul>
                
            </div>

            <hr>    

            <div>
                <h2>
                    SERIES
                </h2>
                <ul class="d-flex flex-wrap justify-content-between">
                    <li class="mx-1" v-for="(singleSeries, i) in store.series" :key="i">
                        <SingleMovie 
                            :titleOrName="singleSeries.name"
                            :originalTitleOrName="singleSeries.original_name"
                            :originalLanguage="singleSeries.original_language"
                            :voteAvarage="singleSeries.vote_average"
                            :poster="singleSeries.poster_path"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height:600px
}
ul {
list-style-type: none;

    li {
        width: 350px;
        
    }
}
img {
    height: 50px;
}
</style>
