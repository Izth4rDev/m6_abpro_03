<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle'

<Button type="button" class="btn" ><router-link class="nav-link px-3" to="/productoPage">Productos</router-link></Button>



export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}




</script>
