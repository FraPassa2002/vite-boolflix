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
    <header class="bg-black">
        <div class="container w-100">
            <div class="row d-flex justify-content-between">
                <div class="col-md-4 align-self-center ">
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/2560px-Netflix_2014_logo.svg.png" alt="">
                    </a>
                </div>
                <div class="col-md-4 offset-md-4 align-self-center d-flex justify-content-end" >
                    <input class="w-75 bg-black text-white " v-model="store.searchText" type="text" placeholder="Inserisci il nome di un film" @keyup.enter="$emit('performSearch')">
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header {
        >.container {
            height: 15vh;
            width: 100%;

            .row {
                height: 100%;
                width: 100%;
            }

            img {
                width: 200px;
                transition: 0.3s;

                &:hover {
                    width: 220px;
                }
            }
        }
    }
</style>
