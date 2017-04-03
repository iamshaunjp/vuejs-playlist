<template>
    <div>
        <show-blogs></show-blogs>
    </div>
</template>

<script>
// Imports
import showBlogs from './components/showBlogs.vue';

export default {
    components: {
        'show-blogs': showBlogs
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
