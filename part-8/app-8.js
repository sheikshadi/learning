var app = Vue.createApp({
    data(){
        return{
           num:'',
           result:'',
        };
    },
    methods:{
        getDouble(){
            this.result = this.num * 2;
        },
        getSqure(){
            this.result = this.num * this.num;
        },
        reset(){
            this.num = '';
            this.result = '';
        },
        addToTen(){
            this.result = this.num + 10;
        },
    }
});

app.mount('#app');
console.log('jjjj')