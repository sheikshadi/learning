var app1 = Vue.createApp({
    data(){
        return{
         name:'',
        }
    },
    template:` <h1>Enter your name</h1>
    <input type="text" v-model="name"><br>
    <span>Your name is:{{name}}</span>
    `
});

app1.mount('#div1');


var app2 = Vue.createApp({
    data(){
        return{
         message:'Hello',
        }
    },
    template: '<h1>{{message}}</h1>',
});

app2.mount('#div2');


console.log('part17')