// var app = Vue.createApp({
//     data(){
//         return{
//          name:'',
//         }
//     },
//     methods:{
//         clear(){
//             this.name = '';
//         }
//     }
// });

// app.mount('#div');

var data = {
    name:''
};

var handler = {
    set(target, key, value){
        if(key === 'name'){
            var outputName = document.querySelector('#outputName')
            outputElement.innerHTML = value;
        }
    }
};

var proxyData = new Proxy(data, handler)

proxyData.name = 'Rimon';