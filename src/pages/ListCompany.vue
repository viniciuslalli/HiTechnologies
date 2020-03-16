<template>

<div class="container">
  
<main>
      <div class="container">
        
      <div class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Nome do estabelecimento</h5>
          <p class="card-text">informações de endereço...</p>
          <router-link to="/listar" class="btn btn-primary btn-sm">editar</router-link>
        </div>
      </div>
    </div>
</main>

</div>
 
  
</template>

<script>

export default {
  name: 'ListCompany',
  
  }
 
</script>

<style>

/*global*/

* {
  text-align: left;
  max-width: 100%;
  box-sizing: border-box
  
}





/*forms*/

form {
  max-width: 100%;
  display: grid; 
  grid-gap: 45px;
  align-items: left;
  border-top-left-radius: 1%;
  border-top-right-radius: 1%;
  border-bottom-left-radius: 1%;
  border-bottom-right-radius: 1%;
   margin: 0 auto 70px;

  background-color: #e1e5e9;

  padding: 16px 64px;
  
}

h5 {
  font-weight: bold;
}



</style>