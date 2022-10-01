var app = Vue.createApp({
    data(){
        return{
          show:false, 
          skills:[
            {name: 'HTML', Expreince: 3},
            {name: 'CSS', Expreince: 5},
            {name: 'JS', Expreince: 6},
            {name: 'NODEJs', Expreince: 9},
            {name: 'MoodJS', Expreince: 4},
            {name: 'php', Expreince: 2},
           ],
        };
    },
    methods:{
        toggle(){
            this.show = !this.show;
        }
    }
});

app.mount('#app');
console.log('jjjj')