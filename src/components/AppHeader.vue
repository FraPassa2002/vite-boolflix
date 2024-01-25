<script>
    import { store } from "../store.js";

    export default {
        data() {
            return {
                store
            };
        },
        methods: {
            
        }
    }
</script>

<template>
    <header>
        <input v-model="store.searchText" type="text" placeholder="Inserisci il nome di un film">
        <button @click="$emit('performSearch')">
            Cerca
        </button>
    </header>
</template>

<style lang="scss" scoped>
</style>
