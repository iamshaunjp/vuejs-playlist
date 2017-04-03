<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
    components: {
        'show-blogs': showBlogs,
        'list-blogs': listBlogs
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
