<template>
  <div class="container">
      <div class="row justify-content-center">
     <div class="col-md-auto">
         <div class="card card-primary">
             <div class="box box-primary">

        <img src="@/assets/images/ads003.png" class="img-fluid" alt="...">     
        </div>
        </div>
     </div>
     <div class="col-md-auto">
         <div class="card card-secundary" >
        <div class="box">
        <form>
          <div class="boxletters">
              <br>
              <h3 style="color: green;   font-family: Tahoma, sans-serif; ">Reset Senha</h3>
              <br>            
          </div>
        <div class="boxletters">
            <input type="email" v-model="email" id="email" name="email" rows="1"  placeholder="E-mail">        
         </div>
         <br>
          <div class="boxletters">
            <input type="password" v-model='password' name="password" id="password" rows="1" placeholder="Senha">
          </div>
          <br>
          <div>
            <button 
                :class="[
                    'btn', 
                    'primary',
                    loading ? 'loading' : '',
                ]" 
                type="submit" @click.prevent="login">
                <span v-if="loading">Alterando...</span>
                <span v-else>Mudar Senha</span>
            </button>
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
import { ref } from 'vue'
import router from '@/router'

import ResetPasswordService from '@/services/password.reset.service'

export default {
    name: 'ResetPassword',
    props: {
        token: {
            require: true,
        }
    },
    setup(props) {
        const email     = ref("")
        const password  = ref("")
        const loading   = ref(false)


        const login = () => {
            loading.value = true

            ResetPasswordService.resetPassword({
                email: email.value,
                password: password.value,
                token: props.token,
            })
            .then(() => router.push({name: 'lacarte.login'}))
            .catch(() => alert('error'))
            .finally(() => loading.value = false)
        }

        return {
            login,
            email,
            password,
            loading,
        }
    }
}
</script>

<style scoped>
.card-primary{
    position: relative;
    top: 5%;
}

.container{
    justify-content: center;
    align-items: center;
}

.col-md-auto{
    padding-left: 2px;
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
    border: 0 none;
}

.box{
  flex: 1;
  width: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px 8px;
    border: 0 none;  
}

.box-primary{
    box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.2);
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
    width: 25em;
    box-sizing: content-box;
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
        top: 20%;
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
    border: 0 none;
}

.box{
    display: flex;
      flex-direction: column;
    width: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px 8px;
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
}

.card-secundary{
    text-align: center;
    width: auto;
    top: 5%;
}

.box-primary{
   box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
}
}
</style>