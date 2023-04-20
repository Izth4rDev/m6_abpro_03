<template>
    <headerComp></headerComp>
   <!-- Buscar productos    -->
   <div class="seccion__buscar">
         <input id="inputBuscador" v-model="inputBuscador" v-on:keyup="buscarProducto()" type="Buscar" class="form-control rounded" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-addon"  />
        <button type="button" class="btn-buscar" v-on:click="buscarProducto()">Buscar</button>
    </div>

<div class="container-fluid row justify-content-center gap-3 ">
 <template  v-for="fila in $store.state.producto" :key="fila.name">
        <div class="card col-3 mx-2 mt-4" v-if="fila.stock > 0" style="width: 18rem; margin: 3em;" >  
                <img v-bind:src="fila.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{fila.name}}</h5>
                    <p class="card-text">Material:{{fila.description}}</p>
                    
                    <!-- <p class="card-text">$ {{fila.price}}</p>  -->

                    <p class="mb-3"> Precio:  {{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency' }).format(fila.price)}}</p>
                    <p class="card-text">Stock: {{fila.stock}}</p>
                    <button class = "btn btn-outline-success" data-bs-toggle="modal" :data-bs-target="'#myModal' + fila.id" >Ver descripción </button> 
                    <a href="#" v-on:click="registrarProducto(fila)" class="btn-agregar">Agregar</a>
                </div>

                <!-- Ventana modal descripcion de producto-->
                <div class="modal fade" :id="'myModal' + fila.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                   <h5 class="modal-title" id="exampleModalLabel">{{fila.name}}</h5>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                               </div>
                               <div class="modal-body">
                                   {{fila.description}}
                               </div>
                            </div>
                     </div>
                </div>
                <!-- Fin Ventana modal -->                     
                
        </div>
    </template>
</div>
<footerComp></footerComp>
</template>

<script>

import headerComp from '../components/headerComp.vue'
import footerComp from '../components/footerComp.vue'

//inicio 19-04-2023
//import {mapState, mapMutations} from 'vuex'
// fin 19-04-2023

import { mapMutations} from 'vuex'
//import store from 'store';

export default {
   
    name: "productoPage",
    components:{
        headerComp,
        footerComp,
    },
    data: function() {
        return {
        // newProducts:[],

        //inicio 19-04-2023
        // producto2: [],//inicio 19-04-2023
        // productoTotal2:[]
        // fin 19-04-2023

        inputBuscador: ''
        };
        },

    computed: {
    //inicio 19-04-2023
    // ...mapState(['newProducts']),
    // ...mapState(['productoTotal']),
    // fin 19-04-2023

    //...mapState(['producto'])

    },
    watch:{

    },    
    methods:{
        ...mapMutations(['registrarProducto']),
 
            buscarProducto: function (){
                if (this.inputBuscador === ''){
                this.$store.state.producto = this.$store.state.productoTotal;
                }else {            
                
                const searchTerm = this.inputBuscador.toLowerCase();
                this.$store.state.producto = this.$store.state.producto.filter(element => {
                const name1 = element.name.toLowerCase();
                const description1 = element.description.toLowerCase();
            
            
                return name1.includes(searchTerm) || description1.includes(searchTerm) ;
                })
                }
                
            },
  
            async extraerData() {
                let resultado;
            try {
                const response = await fetch("../../data.json");
                if (!response.ok) {
                    throw new Error("No se pudo obtener el archivo de datos");
                }
                resultado = await response.json();
                return resultado;

                } catch (error) {
                    console.error(error);
                }
            }
        },
        async mounted() {
            this.$store.state.producto = await this.extraerData();
            this.$store.state.productoTotal = this.$store.state.producto
            //19-04-2023
            // this.producto2 = await this.extraerData();
            // this.$store.commit('cargarProducto', this.producto2)
            // this.$store.commit('cargarProducto2', this.producto2)
             // fin 19-04-2023
        }

    }
  
</script>

<style>
.card-title{
padding-top: 40px;
text-align: left;
font-family: 'Montserrat', sans-serif;
}

.card-body{
padding-top: 40px;
text-align: left;
font-family: 'Montserrat', sans-serif;
}

.btn-agregar{
background-color: #EA4C89;
border-radius: 8px;
border-style: none;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: inline-block;
font-size: 14px;
font-weight: 500;
height: 40px;
line-height: 20px;
list-style: none;
margin: 0;
margin-top: auto;
outline: none;
padding: 10px 16px;
position: relative;
text-align: center;
text-decoration: none;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
font-family: 'Montserrat', sans-serif;
}

.btn-agregar:hover,
.btn-agregar:focus {
background-color: #F082AC;
color: #424242;
font-family: 'Montserrat', sans-serif;
}

.seccion__buscar{
display: flex;
padding-left: 5.5em;
padding-right: 7em;
}

.btn-buscar{
width: 10em;
border-radius: 2px;
background-color: #F082AC;
color: #ffffff;
text-align: center;
/* padding: 1.1em; */
/* margin-bottom: 5em; */
font-family: 'Montserrat', sans-serif;
cursor: pointer;
}

.btn-procesar,
.btn-vaciar{
width: 30em;
border-radius: 2px;
background-color: #F082AC;
color: #ffffff;
text-align: center;
font-family: 'Montserrat', sans-serif;
cursor: pointer;
}

.btn-buscar:hover,
.btn-buscar:focus,
.btn-procesar:hover,
.btn-procesar:focus{
background-color: #ef8db3;
color: #424242; 
}

.btn-vaciar{
    margin-right: 18em;
}

.carrito__compras{
font-family: 'Montserrat', sans-serif;
}

</style>