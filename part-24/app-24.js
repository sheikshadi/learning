var app = Vue.createApp({
    data(){
        return{}
    }, 
});

app.component('contact-details', {
    data(){
        return{
            name:'Rimon'
        }
    },
    
    template:`
    <h1>Contact Details</h1>
    <p><strong>Name:</strong>Rimon</p>
    <p><strong>website:</strong>www.Rimon.com</p>
    <p><strong>Adress:</strong>Dhaka</p>
    `
});

app.mount('#div');