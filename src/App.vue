<template>
    <div>
        <add-blog></add-blog>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';

export default {
    components: {
        'add-blog': addBlog
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
