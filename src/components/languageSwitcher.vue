<template>
    <div class="language">
        <select @change="changeLocale($event)">  
            <option v-for="lan in languages" :key="lan.title" :value="lan.language">{{ lan.title }}</option>
        </select>
      
    </div>
</template>

<script>
import i18n from '.././i18n.js';
import { localize } from 'vee-validate'

export default {
  name: 'languageSwitcher',
  data() {   
     return {       
        languages: [      
          { language: 'en', title: 'English' },      
          { language: 'ka', title: 'ქართული' },
          { language: 'ru', title: 'Русский' }
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
    .language{
        text-align:right !important;
        /* height: 100px; */
    }
    .language select{
        border-radius: 20px;
        background-color: #7DCEA0;
        height: 40px;
        border: none;
    }
</style>