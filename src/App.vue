<script setup>
import { ref } from 'vue'
import Contador from './components/Contador.vue'
const counter = ref(0)
const tooltipText = ref("this is my tooltip")
</script>

<template>
  <h1>Ejercicios</h1>
  
  <div>
    <h2>Contador con clase dinámica</h2>
    <Contador/>
  </div>

  <div>
    <h2>Ejemplo plugin tooltip</h2>
    <input type="text" v-model="tooltipText"/> <br>
  <span>Hover me <ToolTip :text="tooltipText" :options="{placement: 'bottom'}" /></span>

  <br/>
  <span>Hover me <ToolTip :text="tooltipText" /></span>

  <br/>
  <button @click="$hideAllTooltips()">hide all</button>
  </div>


</template>


