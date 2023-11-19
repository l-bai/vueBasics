<script setup>
import { ref , computed} from 'vue'
const counter = ref(0)

const increment = () => {
    counter.value++
}

const decrement = () => {
    counter.value--
}

const colorOfCounter = () => {
    if(counter.value >= 0 )
        return 'positive'
    else
        return 'negative'
}

const favourites = ref([])

const add = () => {
    favourites.value.push(counter.value)
}

const existAlready = computed(() => {
    return favourites.value.includes(counter.value)
})

const reset = () => {
    favourites.value = []
}

</script>

<template>
    <div class="container mt-3">

    
    <p>
        This is my counter  <span :class="colorOfCounter()" >{{  counter }}</span>
    </p>
    <div class="btn-group">
        <button @click="increment" class="btn btn-success">Increment</button>
    <button @click="decrement" class="btn btn-danger">Decrement</button>
    <button @click="add" :disabled="existAlready" class="btn btn-secondary">Add</button>
    <button @click="reset" class="btn btn-primary">resetArray</button>
    </div>
   
    <p>Array de favoritos</p>
    {{  favourites }}
</div>
</template>

<style scoped>
.positive{
    color: green;
}
.negative{
    color: red;
}
</style>