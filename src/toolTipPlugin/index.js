
import { defineAsyncComponent } from "vue"
import {defu} from "defu"
import {hideAll } from "tippy.js"
export const toolTipOptionsInject = Symbol()
export function toolTipPlugin(app, options) {
options = defu(options, {
    arrow: false,
    
})

app.config.globalProperties.$hideAllTooltips = hideAll

    app.provide(toolTipOptionsInject, options)
    app.component("ToolTip", defineAsyncComponent(()=> import("./ToolTip.vue")))
    console.log("other pl", options)
}