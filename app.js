
//console.log(Vue) //demostrando que Vue es un objeto muy grande de recusoss

const app = Vue.createApp({
    //siempre tenemos diferentes opciones para mandar templates, methods, wach... etc y eso se conoce como
    //watching API

    //data es una función
    data () {
        return{
            //todas las propiedades son reactivas, Vue no actualiza algo que no tuvo cambios
            quote: "Yo soy IronMan",
            author: "Tony Stark :D"
        }
    },
    methods: {
        changeQuote (){
            console.log('Hola mundo e.e')
            this.author = 'Hillary Gil'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp') //# referencia a un ID como en CSS