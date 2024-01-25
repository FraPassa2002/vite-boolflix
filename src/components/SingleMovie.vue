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
            console.log(finalVote);
        }
    }
}
</script>

<template>
    <div>
        <div>
            {{ titleOrName }}
        </div>   
        <div>
            {{ originalTitleOrName }}
        </div>
        <div>
            <img :src="getFlag(originalLanguage)" :alt="originalLanguage">
        </div>
        <div >
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 1 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 2 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 3 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) >= 4 ? 'text-warning' : 'text-white')"></i>
            <i class="fa-solid fa-star" :class="(convNumber(voteAvarage) == 5 ? 'text-warning' : 'text-white')"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 50px;
}
</style>
