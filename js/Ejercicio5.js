var app = new Vue({
  el: '#app5',
  data: {
    aNac: 0,
    aAct: new Date().getFullYear(),
    mayEdad: 18,
    falEdad: 0,
    edad: 0
  },
  methods: {
    calcEdad() {
      this.edad = this.aAct - this.aNac;
      if (this.edad>=this.mayEdad){
        alert('Ud es mayor de edad , su edad es: '+ this.edad);

      }else{
        this.falEdad = this.mayEdad-this.edad;
        alert('Ud es menor de edad, le faltan '+ this.falEdad + 'año(s) para la mayoría de edad');
      }
    }
  }

});