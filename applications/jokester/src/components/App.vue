<template>
    <div id="app">
        <h3>Got jokes?</h3>
        <button class="btn btn-primary" @click="initJokes">Add ten random jokes</button>
        <br/>
        <br/>
        <div class="col-md-12">
            <joke
                    v-for="(joke, index) in $store.state.jokes"
                    :joke="joke"
                    key="index"
            />
        </div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import joke from './joke.vue'

        export default {
            methods: mapActions([
            'initJokes'
        ]),
            components: {
                joke
            }
    }
</script>


