import { createStore } from 'vuex'

export default createStore({

    state: {
      newProducts:[],
      productoTotal:[],
      producto:[],
      usuarioConectado:'',
      contador:0

    },

    mutations: {
            //state = newProducts
            //payload = productos
            registrarProducto(state, payload){    
             console.log(payload)
             state.contador = state.contador+1
             console.log(state.contador)

                //retorna true o false si este objeto existe el arreglo
                let existe = state.newProducts.some((element)=>{ 
                    return payload.id == element.id
                });
               
            if(!existe){
                let product ={
                    id:payload.id,
                    name: payload.name,
                    description: payload.description,
                    price: payload.price,
                    stock: payload.stock,
                    image: payload.image,
                    cantidad: 1,
                    total: payload.price,
                }
                state.newProducts.push(product);
              
            }else{

              state.newProducts = state.newProducts.map((element)=>{

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
                if (window.confirm("¿Esta seguro que desea eliminar este producto?")){
                   state.newProducts = state.newProducts.filter((element)=>{
                    return element.id != payload.id;

                    })
                    state.contador = state.contador-1
                }
            },    

            vaciarCarro(state){
                if (state.newProducts.length){
                    if (window.confirm("¿Esta seguro de vaciar el carro de productos?")){
                    state.newProducts = []
                    }   
                }    
            },

            calcularProducto(state,payload){

            if (payload.cantidad > payload.stock){
                alert("Cantidad es mayor al stock del producto, stock máximo "+payload.stock)
                payload.cantidad = payload.stock
            }else {
              payload.total = payload.cantidad*payload.price;
    
            }
          
          },
          inputHandler(state, cantidad){
            console.log(cantidad);

          },

          cargarProducto(state, arreglo){
             state.productoTotal=arreglo;
          },

          cargarProducto2(state,arreglo){
            state.producto = arreglo;
          },

         procesarPago(state){
            let indice
            state.newProducts.forEach((element)=>{
                console.log(element);
                let existe = state.productoTotal.some((elemento, index)=>{
                    indice = index
                    return element.id === elemento.id;
                })
            
            if(existe){
                console.log(state.productoTotal[indice].stock+'='+ state.productoTotal[indice].stock+'-'+element.cantidad);
                state.productoTotal[indice].stock = state.productoTotal[indice].stock - element.cantidad;
            }
            })
            state.producto = state.productoTotal;
            state.newProducts = []
         },
 
         grabarUsuario(State,email){
            State.usuarioConectado = email
          
           }
      
    },
    
    action: {

    },    
    modules: {

    }

})