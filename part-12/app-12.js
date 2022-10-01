var app = Vue.createApp({
    data(){
        return{
           skills:[
            {name: 'HTML', Expreince: 3},
            {name: 'CSS', Expreince: 5},
            {name: 'JS', Expreince: 6},
            {name: 'NODEJs', Expreince: 9},
           ],
           newSkill:{name: '', Expreince: 0},
        };
    },
    methods:{
        addSkill(){
            this.skills.push(this.newSkill);
            this.newSkill = {};
        },
        removeSkill(i){
            this.skills.splice(i , 1);
        }
    }
});

app.mount('#app');
console.log('jjjj')