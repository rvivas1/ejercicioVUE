var app = new Vue({
    el: '#app7',
    data: {
        prestamo: "",
        numCuotas: "",
        opcion: "0",
        lInversion: 0.025,
        libranza: 0.029,
        descuento1: 0.002,
        descuento2: 0.004,
        descuento3: 0.007,
        interes: 0,
        tCuota: "0"

    },
    methods: {
        calCuotas(){
            //Libra inversión
            if(this.opcion=="1" && this.numCuotas < 6){
                this.interes=this.prestamo*(this.lInversion-this.descuento1);
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            else if(this.opcion=="1" && this.numCuotas > 12 && this.numCuotas < 24){
                this.interes=this.prestamo*(this.lInversion-this.descuento2);
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            else if(this.opcion=="1" && this.numCuotas > 24){
                this.interes=this.prestamo*(this.lInversion-this.descuento3);
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            else{
                this.interes=this.prestamo*this.lInversion;
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            //Libranza
            if(this.opcion=="2" && this.numCuotas < 6){
                this.interes=this.prestamo*(this.libranza-this.descuento1);
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            else if(this.opcion=="2" && this.numCuotas > 12 && this.numCuotas < 24){
                this.interes=this.prestamo*(this.libranza-this.descuento2);
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            else if(this.opcion=="2" && this.numCuotas > 24){
                this.interes=this.prestamo*(this.libranza-this.descuento3);
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
            else{
                this.interes=this.prestamo*this.libranza;
                this.tCuota=(this.prestamo+(this.interes*this.numCuotas))/this.numCuotas;
            }
        }

    }
});