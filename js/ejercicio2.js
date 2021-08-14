var app = new Vue({
    el: '#app2',
    data: {
      desc: 0.2,
      compra: "",
      total: ""
    },
    methods: {
        totalPagar() {
            if (this.compra>= 1000000){
                this.total=this.compra-(this.compra*this.desc);
            }
            else {
                this.total= this.compra;
            }
        },
    },
  });