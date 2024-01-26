<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        };
    },
    props: {
        titleOrName: String,
        originalTitleOrName: String,
        originalLanguage: String,
        voteAvarage: Number,
        poster: Object
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
        },
        // convNumber(voteAvarage) {
        //     let finalVote = 0;
        //     if (voteAvarage > 0 && voteAvarage <= 2) {
        //         finalVote = 1
        //     }
        //     else if (voteAvarage > 2 && voteAvarage <= 4) {
        //         finalVote = 2
        //     }
        //     else if (voteAvarage > 4 && voteAvarage <= 6) {
        //         finalVote = 3
        //     }
        //     else if (voteAvarage > 6 && voteAvarage <= 8) {
        //         finalVote = 4
        //     }
        //     else if (voteAvarage > 8 && voteAvarage <= 10) {
        //         finalVote = 5
        //     }
        //     else {
        //         finalVote = 0
        //     }
        //     return finalVote;
        // }
    },
    computed : {
        fullUrlImg() {
            let finalPoster = '';

            if (this.poster == null) {
                finalPoster = store.baseUrlImg + '/2SFOIitSR4V8Gcp6ZldbOeKwx8h.jpg';
            }
            else {
                finalPoster = store.baseUrlImg + this.poster;
            }

            return finalPoster;
        },
        transposedVote(voteAvarage) {
            return Math.ceil(this.voteAvarage / 2);
        }
    }
}
</script>

<template>
    <section class="position-relative">
        <div class="img-container">
            <!-- <img :src="'http://image.tmdb.org/t/p/w342/' + this.poster" :alt="titleOrName"> -->
            <img :src="fullUrlImg" :alt="titleOrName">
        </div>

        <div class="position-absolute font-weight-bold">
            {{ titleOrName }}
        </div>   
        
        <div class=" font-weight-bold">
            {{ originalTitleOrName }}
        </div>
        <div class="flag-container ">
            <img :src="getFlag(originalLanguage)" :alt="originalLanguage">
        </div>
        <!-- <div class="position-absolute">
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 1 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 2 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 3 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 4 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) == 5 ? 'text-warning' : 'text-white')"></i>
        </div> -->
        <!-- <div>
            voto voto {{ transposedVote }}
        </div> -->
        <div>
            <i v-for="i in transposedVote" :key="i" class="fa-solid fa-star"></i>
            <i v-for="j in (5 - transposedVote)" :key="j" class="fa-regular fa-star"></i>
        </div>
    </section>
</template>

<style lang="scss" scoped>

section {
    .img-container {
        width: 350px;

        &:hover + div {
            display: block;
        }
        
        img {
            width: 300px;
            transition: 0.5s ease-in-out;
            display: block;
            
            
            &:hover {
                opacity: 0.2;
                width: 360px;    
                            
            }
        }
               
    }

    div:nth-of-type(2) {
        top: 10px;
        left: 5px;
        display: none;
    }

}
.flag-container {
    img {
        height: 50px;
    }
}
</style>
