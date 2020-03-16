<template>

  <header>

    <div class="menu">
      <!-- <button type="button" class="btn btn-primary btn-lg">Criar Empresa</button>  -->
       <router-link to="/criar" class="btn btn-primary btn-lg" >Criar</router-link>
      <!-- <button type="button1" class="btn btn-secondary btn-lg">Listar Empresa</button> -->
       <router-link to="/listar" class="btn btn-secondary btn-lg">Listar</router-link>
    </div>

  </header>


</template>



<script>
export default {
  name: 'Header'

}
</script>

<style>
/*buttons*/

header .menu{
  text-align: center;
  margin-bottom: 50px;
}

.btn-secondary
{
  margin-left: 10px;
  position: relative;
}
</style>