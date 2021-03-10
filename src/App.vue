<template>
  <div id="app">
      <!-- <Spinner/> -->
  
      <router-view/>
    
    
  </div>
</template>

<script>

// import Spinner from './components/spinner/spinner'

export default {
  name: 'App',
  components:{
    // Spinner
  }
}
console.log(localStorage.removeItem("role"));
</script>

<style scope>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

*{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>


