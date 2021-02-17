<template>
    <div>
        
        <nav class="navbar navbar-expand-lg ">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/guest" >{{$t('home')}}</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/guest/about" >{{$t('about')}}</router-link></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="/guest/contact" >{{$t('contact')}}</router-link></a>  
                    </li>
                </ul>
            </div>
            <languageSwitcher></languageSwitcher>
            <button v-on:click = "logout" class="btn button"> <router-link to="/">{{$t('logout')}}</router-link></button>
            
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
    },
    methods: {
        logout(){
            localStorage.removeItem("isLogin")
            
        }
    }
}
</script>

<style>
    .navbar{
        background-color: #7DCEA0;
    }
    .navbar a{
        color: black;
    }
    .button a:hover{
        color: royalblue;
    }
    .button{
        border: 1px solid black;
        border-radius: 20px;
    }
</style>