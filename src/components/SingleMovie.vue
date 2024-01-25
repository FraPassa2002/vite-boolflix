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
            {{ originalLanguage }}
        </div>
        <div>
            <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
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
