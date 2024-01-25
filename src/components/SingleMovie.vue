<script>

export default {
    data() {
        return {
            
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
        convNumber(voteAvarage) {
            let finalVote = 0;
            if (voteAvarage > 0 && voteAvarage <= 2) {
                finalVote = 1
            }
            else if (voteAvarage > 2 && voteAvarage <= 4) {
                finalVote = 2
            }
            else if (voteAvarage > 4 && voteAvarage <= 6) {
                finalVote = 3
            }
            else if (voteAvarage > 6 && voteAvarage <= 8) {
                finalVote = 4
            }
            else if (voteAvarage > 8 && voteAvarage <= 10) {
                finalVote = 5
            }
            else {
                finalVote = 0
            }
            return finalVote;
        }
    }
}
</script>

<template>
    <section class="position-relative">
        <div class="img-container">
            <img :src="'http://image.tmdb.org/t/p/w342/' + poster" alt="titleOrName">
        </div>
        <div class="position-absolute font-weight-bold">
            {{ titleOrName }}
        </div>   
          
        <div class="position-absolute font-weight-bold">
            {{ originalTitleOrName }}
        </div>
        <div class="flag-container position-absolute">
            <img :src="getFlag(originalLanguage)" :alt="originalLanguage">
        </div>
        <div class="position-absolute">
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 1 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 2 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 3 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 4 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) == 5 ? 'text-warning' : 'text-white')"></i>
        </div>
        <div class="font-weight-bold">
            {{ titleOrName }}
        </div> 
    </section>
</template>

<style lang="scss" scoped>

section {
    .img-container {
        width: 350px;
        
        
        img {
            width: 300px;
            transition: 0.5s ease-in-out;
            overflow: hidden;
            object-fit: cover;
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
    }
    div:nth-of-type(3) {
        top: 40px;
        left: 5px;
    }
    div:nth-of-type(4) {
        top: 80px;
        left: 5px;
    }
    div:nth-of-type(5) {
        top: 140px;
        left: 5px;
    }

}
.flag-container {
    img {
        height: 50px;
    }
}
</style>
