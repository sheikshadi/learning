var app = Vue.createApp({
    data(){
        return{
            name:'',
        };
    },
    methods:{
        handle(){
            this.name = 'Google';
        },
        
    }
});

app.mount('#app');
console.log('jjjj')