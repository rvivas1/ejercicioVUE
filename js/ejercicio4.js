var app = new Vue({
    el: '#app4',
    data: {
        opcion:"0",
        pPera: 600,
        pPiña: 1800,
        cant: 1,
        total: 0,
        isPagar: 0,
        tEfectivo:0,
        tPagar: 0
    },
    methods:{
        calcularTotal(){
            if(this.opcion=="0"){
                this.total=this.cant * 0;
            }else if(this.opcion=="1"){
                this.total=this.cant*this.pPera;
            }else {
                this.total=this.cant*this.pPiña;
            }
            this.tPagar+=this.total;
            this.cont+= 1;
        },
        totalPagar(){
            this.isPagar=1;
        },
        efectivo(){
            var cambio=0;
           if (this.tEfectivo < this.tPagar){
            cambio=this.tPagar-this.tEfectivo;
            alert("Le falata plata papá, son: "+ cambio + " luks");
        }else{
               cambio=this.tEfectivo-this.tPagar;
               alert("Su cambio es de : " + cambio + " luks"); 

           }
           
        }
    },
  });