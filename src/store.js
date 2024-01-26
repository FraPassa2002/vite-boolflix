import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    baseUrlImg: 'http://image.tmdb.org/t/p/w342/',
});