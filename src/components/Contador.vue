<script setup>
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
    <p>
        This is my counter  <span>{{  counter }}</span>
    </p>
</template>