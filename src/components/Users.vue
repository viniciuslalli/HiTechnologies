<template>

<div class="container">
  



<form>
<h3>Empresas </h3>
  <div class="form-group">
    <label for="exampleInputEmpresa1">Nome da empresa</label>
    <input type="empresa" class="form-control" id="exampleInputEmpresa1" placeholder="Digitar o nome do estabelecimento">
  </div>

  <div class="form-group">
    <label for="exampleInputEndereco1">Endereço</label>
    <input type="Endereco" class="form-control" id="exampleInputEndereco1" placeholder="Digitar o nome da rua...">
  </div>
  <button type="submit" class="btn btn-primary">Salvar</button>
</form>


</div>
 
  
</template>

<script>

export default {
  name: 'Users',
  
  }
 
</script>

<style>

/*global*/

* {
  text-align: left;
  max-width: 100%;
  box-sizing: border-box
  
}



/* 
form {
  text-align: left;
  margin-right: 70px;
  max-width: 70%;
  position: relative;
  border-radius:4px;
} */

/*forms*/

form {
  max-width: 70%;
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



</style>