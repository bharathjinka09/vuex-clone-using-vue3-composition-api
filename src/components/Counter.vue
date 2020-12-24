<script>

import global from '@/global'

export default {
        setup(){
            const {state,times2,inc} = global
            return { state, times2, inc }

        }
    }
</script>


<template>
    <h4>Counter</h4>
    <h3>{{ state.count }} x 2 = {{times2}}</h3>  
    <button class="btn btn-primary" @click="inc(1)"> Increment</button>
</template>
