var app = new Vue({
    el: '#app3',
    data: {
        cantCopias: "",
        total: ""

    },
    methods: {
        totalPagar() {
            if (this.cantCopias > 50) {
                this.total = this.cantCopias * 30;

            }
            else {
                this.total = this.cantCopias * 50;
            }
        },

    },
});