<template>
  <headerComp></headerComp>
  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <img alt="Vue logo" src="../assets/logo.png" width="100"/>
        <!-- <p class="h3 display-3 text-muted">Te Vendo</p> -->
        <p class="fst-italic py-5">Encuentra todo lo que necesitas aca</p>
        <Button type="button" class="btn--ver" ><router-link class="nav-link px-3" to="/productoPage">Ver Productos</router-link></Button>
      </div>
    </div>
  </div>
  <footerComp></footerComp>
</template>


<script>
// @ is an alias to /src
import headerComp from '../components/headerComp.vue'
import footerComp from '../components/footerComp.vue'

export default {
  name: "Home-Root",
  components: {
    headerComp,
    footerComp
  }
};
</script>

<style>
.btn--ver{
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
  margin-top: auto;
  text-align: center;
  transition: color 100ms;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: 'Montserrat', sans-serif;
  }
</style>