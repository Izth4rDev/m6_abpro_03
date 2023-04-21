import { createStore } from 'vuex'

export default createStore({

    state: {
        newProducts:[],
        valores: 0
    },

    mutations: {

        registrarProducto(state, payload){    
            //retorna true o false si este objeto existe el arreglo
            let existe =state.some((element)=>{ 
                return payload.id == element.id
            });

            if(!existe){

                let product ={
                    id:payload.id,
                    name: payload.name,
                    description: payload.description,
                    price: payload.price,
                    stock:payload.stock,
                    image: payload.image,
                    cantidad: 1,
                    total:payload.price,
                }

                state.push(product);

            }else{

                state = state.map((element)=>{

                    if(element.id === payload.id){

                        element.cantidad = element.cantidad+1; 
                        element.total = element.cantidad*element.price;
                        return element;

                    }else{
                        
                        return element;
                    }

                })
            }
        },
        
        eliminarProducto(state, payload){

            state = state.filter((element)=>{
            return element.id !=  payload.id;

             })
        },

        vaciarCarro(state, payload){
            state = []
         },
        

    



   


    
    action: {

    },    
    modules: {

    }
    }

})