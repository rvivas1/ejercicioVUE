var app = new Vue({
  el: '#app',
  data: {
    bod1: 200,
    bod2: 460,
    isBoton: 1,
    isVenta: 0,
    opcion: 0,
    ventas1: 0,
    ventas2: 0,
    cant: null,
    mostrar: 0,
    msj: ""
  },
  methods: {
    verVentas() {
      this.isBoton = 0;
      this.isVenta = 1;
    },
    ocultarVentas() {
      this.isBoton = 1;
      this.isVenta = 0;
    },

    totalVenta() {
      if (this.opcion == "1") {
        if (this.bod1 == 0) {
          this.msj = "¡Ya no hay arroz en la bodega 1!";
        } else if (this.cant > this.bod1) {
          this.msj = "¡No tenemos toda esa cantidad de arroz";
        } else {
          this.bod1 = (this.bod1 - this.cant);
          this.ventas1 += this.cant;
        }
      } else {
        if (this.bod2 == 0) {
          this.msj = "¡Ya no hay arroz en la bodega 2!";
        } else if (this.cant > this.bod2) {
          this.msj = "¡No tenemos toda esa cantidad de arroz!";
        } else {
          this.bod2 = (this.bod2 - this.cant);
          this.ventas2 += this.cant;
        }
      }
    }

  }
});

