var app = Vue.createApp({
    data(){
        return{
            name:'Luffy',
        }
    },
    methods:{
        updateName(){
            this.name = 'Raffe'
        }
    },
    
    beforeCreate() {
        console.log('before create');        
    },
    created(){
        console.log('running created');
    },
    beforeMount() {
        console.log('Running mount');
    },
    beforeUpdate(){
        console.log('update');
    },
    mounted(){
        console.log('mounted');
    },
    
})
app.mount('#div')