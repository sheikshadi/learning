var app = Vue.createApp({
    data(){
        return{
            msg:'Vue Bangla Programming',
            title:{
                googleLink:'http://www.google.com',
                htmlCode:`<a :href="title.googleLink">Google</a>`,
            }
        }
    }
})

app.mount('#app');