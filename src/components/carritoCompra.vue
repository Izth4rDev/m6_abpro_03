<template>
    <headerComp></headerComp>
     <section class="carrito__compras modal" id="carrito__modal">
        <div class="container h-100 py-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <button type="button" class="btn-close" data-bs-target="carrito__modal" data-bs-dismiss="#carrito__modal" aria-label="Close"></button>
                        <h3 class="fw-normal mb-0 text-black">Carrito de compra</h3>
                    <!-- <div>
                        <p class="mb-0"><span class="text-muted">Ordenado por:</span> <a href="#!" class="text-body">precio <i
                            class="fas fa-angle-down mt-1"></i></a></p>
                    </div> -->
                    </div>

                    <div class="card rounded-3 mb-4">
                        <div v-for="carro in newProducts" :key="carro.id" class="card-body p-4">
                            <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-md-2 col-lg-2 col-xl-2">
                                <img v-bind:src="carro.image" class="img-fluid rounded-3" alt="Cotton T-shirt">
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-3">
                                <p class="lead fw-normal mb-2">{{carro.name}}</p>
                                <p><span class="text-muted">Descripcion: </span>{{ carro.description }}</p>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                <i class="fas fa-minus"></i>
                                </button>

                                <input id="form1" min="1" name="quantity" v-model="carro.cantidad" v-on:input="calcularProducto(carro)" type="number"
                                class="form-control form-control-sm" />
                                

                                <button class="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h5 class="precio--u">Unidad ${{carro.price}}</h5>
                                <h5 class="precio--t">Total ${{carro.total}}</h5>
                            </div>
                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" v-on:click="eliminarProducto(carro)" class="text-danger"><i class="fas fa-trash fa-lg"> X </i></a>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body d-flex gap-1">
                            <button v-on:click="vaciarCarro" type="button" class="btn-vaciar">Vaciar Carrito</button>
                            <button type="button" class="btn-procesar" v-on:click="procesarPago">Procesar el pago</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>    


<script>

import {mapState, mapMutations} from 'vuex'

export default {
data(){
    return{
        // productos: [],
        
    };
},

computed: {
    ...mapState(['newProducts']),
   
  },

methods: {
    ...mapMutations(['eliminarProducto']),
    ...mapMutations(['vaciarCarro']),
    ...mapMutations(['calcularProducto']),
    ...mapMutations(['procesarPago']),
    ...mapMutations(['inputHandler']),

}  


}

</script>
<style>

.precio--u{
color: #F082AC;
display: inline-block;
width: 100%;
font-size: 16px;
list-style: none;
padding: 10px 16px;
text-align: center;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
font-family: 'Montserrat', sans-serif;
}

.precio--t{
background-color: #F082AC;
border-radius: 8px;
color: #FFFFFF;
width: 100%;
display: inline-block;
font-size: 16px;
list-style: none;
padding: 10px 16px;
text-align: center;
transition: color 100ms;
vertical-align: baseline;
user-select: none;
-webkit-user-select: none;
font-family: 'Montserrat', sans-serif;
}
</style>