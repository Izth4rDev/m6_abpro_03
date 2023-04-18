<template>  
    <div class="container-fluid d-flex align-items-center border">
        <div id="logo">
            <a v-on:click="Home"><img src="../assets/logo-p.png" alt="" width="250"></a>
            <!-- hola <input id= "usuarioConectado" v-model= "usuarioConectado" type="text" readonly> -->
        </div>

        <div class="d-flex ms-auto me-3">
            <nav>
                <ul id="list-contenedor" class="d-flex justify-content-around align-items-center">
                    <router-link class="nav-link px-3" to="/HomeRoot">Inicio</router-link>
                    <router-link class="nav-link px-3" to="/productoPage">Productos</router-link>
                    <!-- <router-link class="nav-link px-3" to=""><img src="../assets/shopping-cart.png" width="18" alt="carrito"></router-link> -->

                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#carrito__modal">
                      <img src="../assets/shopping-cart.png" width="18" alt="carrito">
                    </button>


                    <!-- <router-link class="nav-link px-3" to="/HomeRoot">Hola usuario1</router-link> -->
                    <carritoCompra></carritoCompra>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Logout
                    </button>
                    <p class="mb-0">{{usuarioConectado}}</p>
                </ul>
            </nav>
        </div>
    </div>
    <!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Esta seguro que desea salir
        <p>{{usuarioConectado}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
        <button type="button" v-on:click="logout" class="btn btn-success" data-bs-dismiss="modal">Si</button>
      </div>
    </div>
  </div>
</div>
</template>

llenarUsuario()

<script>

import {mapState} from 'vuex'

export default {
  
    data: function(){
      return {
        usuarioConectado2: '',
       
      }
      },
     computed:{
     ...mapState(['usuarioConectado'])
     },
import carritoCompra from './carritoCompra.vue';
export default {
    data (){
    },
    components:{
      carritoCompra,
    },

    methods:{
       logout(){
        this.$router.push('/');
        
       },
    }
}

</script>


<style>
.titulo__pagina{
font-family: 'Montserrat', sans-serif;
padding-bottom: 1em;
}

#login{
    cursor: pointer;
}

#list-contenedor{
    list-style-type: none;

}

.list-item{

    cursor: pointer;

}
</style>