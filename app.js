
//console.log(Vue) //demostrando que Vue es un objeto muy grande de recusoss

const app = Vue.createApp({
    //siempre tenemos diferentes opciones para mandar templates, methods, wach... etc y eso se conoce como
    //watching API

    //data es una función
    data () {
        return{
            quote: "Yo soy IronMan",
            author: "Tony Stark :D"
        }
    }

})

app.mount('#myApp') //# referencia a un ID como en CSS