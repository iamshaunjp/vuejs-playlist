<template>
    <div>
        <!-- use instead v-slot because slot syntax is deprecated -->
        <form-helper>
            <template v-slot:form-header>
                <h3>This is the title of a form</h3>
                <p>This is some info about the form</p>
            </template>
            <template v-slot:form-fields>
                <input type="text" placeholder="name" required />
                <input type="password" placeholder="password" required />
            </template>
            <template v-slot:form-controls>
                <button v-on:click="handleSubmit">Submit</button>
            </template>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './components/formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {

        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
