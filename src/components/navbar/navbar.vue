<template>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/" >{{$t('home')}}</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/about" >{{$t('about')}}</router-link></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="/contact" >{{$t('contact')}}</router-link></a>  
                    </li>
                </ul>
            </div>
            <languageSwitcher></languageSwitcher>
        </nav>
        <router-view/>
        <userFooter/>
    </div>
</template>


<script>

import userFooter from '.././footer/userFooter'

import languageSwitcher from '.././languageSwitcher'

export default {
    name:'userNavbar',
    components:{
        languageSwitcher,
        userFooter
    }
    
}
</script>

<style>
   .navbar {
  overflow: hidden;
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
}
    .navbar a{
        color: black;
    }
    .button a:hover{
        color: #3c5fa5 !important;
    }
    .button{
        border: 1px solid black;
        border-radius: 20px;
    }
    .navbar a:hover{
        color: #3c5fa5;
    }
</style>