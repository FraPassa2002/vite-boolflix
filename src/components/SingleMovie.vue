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
        <div>
            {{ voteAvarage }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 50px;
}
</style>
