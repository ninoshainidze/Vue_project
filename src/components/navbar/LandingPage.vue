<template>
    <div>
        <nav class="navbar navbar-expand-lg  fixed-top" :class="{change_color: scrollPosition > 50}">
        <a class="navbar-brand"><router-link to="/" ><h3>HOST cloud</h3></router-link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" > <router-link to="/" >{{$t('home')}}</router-link></a>
            </li>
            <li class="nav-item">
                 <a class="nav-link" > <router-link to="/about" >{{$t('about')}}</router-link></a>
            </li>
            <li class="nav-item">
                 <a class="nav-link" > <router-link to="/about" >our service</router-link></a>
            </li>
             <li class="nav-item">
                 <a class="nav-link"><router-link to="/contact" >{{$t('contact')}}</router-link></a> 
            </li>
            
            </ul>
              
        </div>
        <LoginButton/>
        <SignUp/>
        <languageSwitcher></languageSwitcher>
        </nav>
    </div>
</template>


<script>
import languageSwitcher from '.././LanguageSwitcheButton/languageSwitcher'
import LoginButton from '.././LoginButton/LoginButton'
import SignUp from '.././SignUp/SignUp'


export default {
    name:'userNavbar',
    data(){
        return{
            scrollPosition: null
        }
    },
    components:{
        languageSwitcher,
        LoginButton,
        SignUp
        
    },
    methods:{
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
    
}
</script>

<style scope>
    .navbar {
        overflow: hidden;
        background-color: transparent;
        border-bottom: 1px solid #f7f7f7;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .change_color {
       background-color:white;
   }
    .collapse .navbar-nav{
        margin-left: auto;
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