<template>

    <headerComp></headerComp>

    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Logout</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Nose"></button>
                 </div>
                <div class="modal-body">
                     <p>Modal body text goes here.</p>
                </div>
               <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar sesión</button>
                    <button type="button" class="btn btn-primary">Canecelar</button>
               </div>
           </div>
        </div>
    </div>

</template>
    
<script>
     import headerComp from '../components/headerComp.vue'

     
     export default {
   
        name: "LogoutPage",
        components:{
        headerComp,
        },
    }
</script>
    
<style>
  
</style>
    

