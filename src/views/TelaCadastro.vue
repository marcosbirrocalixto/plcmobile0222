<template>
  <div class="container">
      <div class="row justify-content-center">
     <div class="col-md-auto">
         <div class="card card-primary">
             <div class="box box-primary">

        <img src="@/assets/images/sign-in.png" class="img-fluid" alt="...">     
        </div>
        </div>
     </div>
     <div class="col-md-auto">
         <div class="card card-secundary" >
        <div class="box">
          <form @submit.prevent="enviar">
          <div class="boxletters">
              <br>
              <h3 style="color: green;   font-family: Tahoma, sans-serif; ">Cadastre-se</h3>
              <br>
              <input type="text" v-model="cadastro.nome" id="nome" name="nome" rows="1" placeholder="Nome">
            
          </div>
          <br>
          <div class="boxletters">
           <input type="text" v-model="cadastro.sobrenome"  id="sobrenome" name="sobrenome"  rows="1" placeholder="Sobrenome">        
          </div>
          <br>
        <div class="boxletters">
            <input type="email" v-model="cadastro.login"  id="email" name="email" rows="1"  placeholder="E-mail">        
         </div>
         <br>
          <div class="boxletters">
            <input type="password" v-model="cadastro.senha" name="senha" id="senha" rows="1" placeholder="Senha">
          </div>
          <br>
            <div class="boxletters">
                <div class="row">
             <label style="color: green; font-size: 15px; font-family: 'Noto Sans', sans-serif;">Checkbox: </label>
               <div class="col-md-3">
                <input type="checkbox" class="form-check-input" name="Verde" value="Verde" v-model="cadastro.check">
              <label for="Verde">Vue </label>
               </div>
             <div class="col-md-3">
            <input type="checkbox" class="form-check-input" name="Azul" value="Azul" v-model="cadastro.check">
            <label for="Azul">Azul </label>
               </div>
               <div class="col-md-3">
            <input type="checkbox" class="form-check-input" name="Vermelho" value="Vermelho" v-model="cadastro.check">
            <label for="Vermelho"  name="Vermelho">JavaScript </label>
               </div>
               <div class="col-md-3">
            <input type="checkbox" class="form-check-input" name="Roxo" value="Roxo" v-model="cadastro.check">
            <label for="Roxo">Roxo </label>
            </div>
               </div>
          </div>
          <br>
         <div class="boxletters">
            <input type="date" name="data-nascimento" v-model="cadastro.dataNascimento" id="data-nascimento" rows="1"  placeholder="Data de Nascimento">
          </div>
          <br>
         <div class="boxletters">
            <input type="submit" class="btn btn-primary" value="Cadastrar">
          </div>
<br>
        </form>
        </div>
         </div>
     </div>
  </div>
  </div>

</template>

<script>
export default {
  data(){
    return{ 
      cadastro: {
        nome: '',
        sobrenome: '',
        login: '',
        senha: '',
        check: [],
        dataNascimento: ''
      },
    }
  },
  methods: {
   enviar(){
      console.log(this.cadastro);
   } 
  }
}
</script>

<style scoped>

#data-nascimento{
    width: 25em;
    font-size: 16px;
    background-color: white;
    border-width: 0px;
}
::-webkit-datetime-edit { padding: 0em 0em 0em 0em; border: 0 none; border-bottom: 2px solid #a2c0d9; border-width:thin; 
    box-sizing: content-box; -webkit-appearance: none; background-color: white; }

input[type='text'] {
    position: relative;
    font-size: 16px;
    border: 0 none;
 border-bottom: 2px solid #a2c0d9;
     border-width: thin;
   width: 25em;

    box-sizing: content-box;
}

.card-primary{
    position: relative;
    top: 5%;
}

.box-primary{
    box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.2);
}

.container{
justify-content: center;
align-items: center;

}

.col-md-auto{
        padding-left: 10px;
    padding-right: 0px;

}

.card{
    display: grid;
 margin-top: 20px;
align-items: center;
    flex-wrap: wrap;
    border: 0 none;

}

img{
    width: 600px;
    height: 400px;
    border-radius: 10px 0px 0px 10px;
}

.box{
  flex: 1;
  width: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px 8px;
    border: 0 none;

  
}

.boxletters{
  flex: 1;
  position: relative;

}


input[type='email'] {
    position: relative;
    font-size: 16px;
    border: 0 none;
 border-bottom: 2px solid #a2c0d9;
     border-width: thin;
   width: 25em;

    box-sizing: content-box;
}
input[type='password'] {
    position: relative;
    font-size: 16px;
    border: 0 none;
 border-bottom: 2px solid #a2c0d9;
     border-width: thin;
   width: 25em;

    box-sizing: content-box;
}

input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

.card-secundary{
    text-align: center; width: 500px;
}

@media(max-width: 900px){
.card-primary{
    position: relative;
    top: 5%;
}

.card{
    display: grid;
    flex-direction: column;
    border: 0 none;
   
}

img{
    width: 100%;
    height: auto;
    border-radius: 10px 10px 10px 10px;
}

.box{
  display: flex;
      flex-direction: column;

width: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px 10px 10px 10px;
  border: 0 none;


}

.boxletters{
  flex: 1;
  position: relative;

}

input[type='text'] {
    position: relative;
    font-size: 16px;
    border: 0 none;
 border-bottom: 2px solid #a2c0d9;
     border-width: thin;
   width: 15em;
}

input[type='email'] {
    position: relative;
    font-size: 16px;
    border: 0 none;
 border-bottom: 2px solid #a2c0d9;
     border-width: thin;
   width: 15em;

}
input[type='password'] {
    position: relative;
    font-size: 16px;
    border: 0 none;
 border-bottom: 2px solid #a2c0d9;
     border-width: thin;
   width: 15em;

}

#data-nascimento{
 width: 15em;
     
    border-width: 0px;

}
::-webkit-datetime-edit { padding: 0em 0em 0em 0em; border: 0 none; border-bottom: 2px solid #a2c0d9; border-width:thin; 
    box-sizing: content-box; -webkit-appearance: none;}


.card-secundary{
    text-align: center;
     width: auto;
}
.col-md-auto{
        padding-left: 0px;
    padding-right: 0px;

}

}



</style>