import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import { myFirstPlugin } from './myFirstPlugin'
import { toolTipPlugin } from './toolTipPlugin'

createApp(App).use(toolTipPlugin, {
    placement: "right",
    // hace que aparezca al hacer click
    trigger: "click",
    
    hideOnClick: false,
}).mount('#app')
