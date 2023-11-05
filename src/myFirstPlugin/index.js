export const myFirstPlugin = {
    install(app, options){
        console.log("hello plugin", options)
    }
}

// es lo mismo que 
export function myFirstPlugin2(app, options) {
    console.log("other pl")
}