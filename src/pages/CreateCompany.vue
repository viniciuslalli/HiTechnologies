<template>
<div class="container">
  
  <form>
    <h3>Empresas </h3>
    <div class="form-group">
      <label for="exampleInputEmpresa1">Nome da empresa</label>
      <input v-model="empresa" class="form-control" placeholder="Digitar o nome do estabelecimento ">     
    </div>
    <div class="form-group">
      <label for="exampleInputEndereco1">Endereço</label> 
      <input v-model="endereco" class="form-control" placeholder="Digitar o nome da rua..."> 
    </div> 
    <button @click="persist" class="btn btn-primary">Salvar</button>
  </form>
</div>
</template>

<script>

export default {
name: 'CreateCompany',
    datas: {
    empresa: [],
    endereco:[],
    },
    mounted() {
        if (localStorage.endereco) {
        this.endereco = localStorage.endereco;
      }
        if (localStorage.empresa) {
        this.empresa = localStorage.empresa;
      }
    },
    methods: {
    persist(){
    localStorage.endereco = this.endereco;
    localStorage.empresa = this.empresa;
    console.log('Agora finja que fiz mais coisas...')
    }
  }
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


















