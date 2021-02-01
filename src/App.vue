<template>
  <div id="app">
    
    <languageSwitcher></languageSwitcher>
    <router-view/>
  </div>
</template>

<script>
import languageSwitcher from './components/languageSwitcher'


export default {
  name: 'App',
  components: {
    languageSwitcher
  }
}

</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


