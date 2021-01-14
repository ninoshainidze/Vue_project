<template>
  <div id="app">

    <select @change="changeLocale($event)">  
      <option v-for="lan in languages" :key="lan.title" :value="lan.language">{{ lan.title }}</option>
    </select>

    <router-view/>
  </div>
</template>

<script>
import i18n from './i18n.js';
import { localize } from 'vee-validate'

export default {
  name: 'App',
  data() {   
     return {       
        languages: [      
          { language: 'en', title: 'English' },      
          { language: 'ka', title: 'ქართული' }
        ]    
      };
  },
  methods: { 
    changeLocale(event) {    
      i18n.locale = event.target.value;
      localize(event.target.value)

    }
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


