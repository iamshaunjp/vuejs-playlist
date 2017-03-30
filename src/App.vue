<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ greeting() }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
          title: 'Your first Vue file, wooo!'
        }
    },
    methods: {
        greeting: function(){
            return 'heeey cowboy'
        }
    }
}
</script>

<style>
</style>
