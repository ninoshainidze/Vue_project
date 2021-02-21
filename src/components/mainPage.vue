<template>
  <div>
     
    <div class="mainPage">
      
        <img class="img1" src="../assets/img1.jpg">
        <div class="centered">
          Live long and prosper 
          <img class="img2" style="width: 30px;" src="../assets/icons8-spock-50.png">
        <br>
        <button  class="btn button  homeButton"> <router-link to="/Login">Login</router-link></button>
        </div>
        
       
    </div>
   
  </div>

</template>

<script>


  export default {
    name:'mainPage'
  }

</script>


<style>
  *{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
  .mainPage{
    width: 100%;
    height: auto;
  }
 
  .centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

 .mainPage .img1{
   width: 100%;
   height: 600px;
 }
 .homeButton{
   margin-top: 50px;
 }
 .homeButton a{
  color: black ;
 }
 .homeButton a:hover{
  color: #3c5fa5 !important;
 }
</style>

