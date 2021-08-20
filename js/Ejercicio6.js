var app = new Vue({
    el: '#app6',
    data: {
     opcionP: "0",   
     opcionC: "0",
     res: 9000,
     cerdo: 8000,
     cant: 1,
     totalJuan: 0,
     totalVictoria: 0,
     subtotal: 0,
     rta: ""
    },
    methods:{
        totalCompra(){
            if(this.opcionP=="1"){
                this.subtotal=this.cant*this.res;
                if(this.opcionC=="1")
                {
                    this.totalJuan+=this.subtotal;
                    this.cont+= 1;
                }
                else{
                    this.totalVictoria+=this.subtotal;
                    this.cont+= 1;
                }
            }

            if(this.opcionP=="2"){
                this.subtotal=this.cant*this.cerdo;
                if(this.opcionC=="1")
                {
                    this.totalJuan+=this.subtotal;
                    this.cont+= 1;
                }
                else{
                    this.totalVictoria+=this.subtotal;
                    this.cont+= 1;
                }
            }
            if(this.totalJuan>this.totalVictoria){
                this.rta="Juan pagó más dinero por su compra";
            }
            else if (this.totalJuan<this.totalVictoria)
            {
                this.rta="Victoria pagó más dinero por su compra";
            }
            else{
                this.rta="Victoria y Juan pagaron lo mismo por su compra";
            }
        },
        
    }
  
}); 