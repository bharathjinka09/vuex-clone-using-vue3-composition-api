import {reactive,computed, readonly } from 'vue'

const state = reactive({
    count: 1
})

// Getters
const times2 = computed( () => state.count * 2)

// Mutation
const inc = amount => (state.count += amount)

export default { state: readonly(state), times2, inc }