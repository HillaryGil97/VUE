
//console.log(Vue) //demostrando que Vue es un objeto muy grande de recusoss

const app = Vue.createApp({
    template: `
        <h1>Hola mundo </h1>
        <p> Desde app.js </p>
    `
})

app.mount('#myApp') //# referencia a un ID como en CSS