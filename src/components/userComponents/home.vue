<template>
  <div>
   
   
    <h1>{{$t('home')}}</h1>
  
   
  </div>

</template>

<script>


  import store from '../.././store'


if(localStorage.getItem("isLogin")) {
    store.getters["auth"]["loggedIn"] = true 
    
}

  export default {
    name:'home' 
  }
</script>

