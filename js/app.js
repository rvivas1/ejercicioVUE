var app = new Vue({
    el: '#app',
    data: {
        name: "",
        phone: "",
        age: "",
        rta1:"",
        rta2: "",
        rta3:""
    },
    methods: {
        message() {
            this.rta1= 'Nombre: ' + this.name;
            this.rta2= 'Tel: ' + this.phone;
            this.rta3= 'Edad: ' + this.age;
        },
    },
});