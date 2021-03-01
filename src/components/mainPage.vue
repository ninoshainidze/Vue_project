<template>
  <div>
    <router-view/>
    <Navbar/>
    <div class="mainPage">
      <img class="img1" src="../assets/img2.jpg">
        <div class="centered cent">
         <h3 style="color: #DDF1FF;"> {{$t('postyourideashere')}}</h3>
          <button  class="btn button  homeButton"> <router-link to="/Login">{{$t('login')}}</router-link></button>
      </div>
    </div>
    <PageFooter/>
  </div>
</template>

<script>

import Navbar from './navbar/navbar'
import PageFooter from './footer/pageFooter'



  export default {
    name:'mainPage',
    components:{
      PageFooter,
      Navbar
    }
  }

</script>


<style>
 
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

  .cent {
  margin-top: 50px !important;
}

 .mainPage .img1{
   width: 100%;
   height: 600px;
 }

 .homeButton a{
  color: black ;
 }
 .homeButton {
  margin-top: 50px;
  background-color: #DDF1FF !important ;
 }
 .homeButton a:hover{
  color: #3c5fa5 !important;
 }
</style>

