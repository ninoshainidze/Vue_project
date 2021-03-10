<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/user" >{{$t('home')}}</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/user/about" >{{$t('about')}}</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="/about" >our service</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/user/contact" >{{$t('contact')}}</router-link></a> 
                    </li>
                   
                    <!-- <li class="nav-item">
                        <a class="nav-link" > <router-link to="/user/profile" >{{$t('profile')}}</router-link></a>
                    </li> -->
               
            
                </ul>
            </div>
            
            
            <languageSwitcher></languageSwitcher>
            <button v-on:click="logout" class="btn button ml-2"> <router-link to="/">{{$t('logout')}}</router-link></button>
            <img src="../../assets/user.png" alt="">
            <div>
                <b-dropdown text="Button text via Prop">
                    <b-dropdown-item href="#">An item</b-dropdown-item>
                    <b-dropdown-item href="#">Another item</b-dropdown-item>
                </b-dropdown>
            </div>
        </nav>
        <router-view/>
    </div>
</template>


<script>


import languageSwitcher from '.././LanguageSwitcheButton/languageSwitcher'

export default {
    name:'userNavbar',
    components:{
        languageSwitcher
        
    },
    methods: {
        logout(){
            this.$store.commit("logOut")
            if(localStorage.getItem("alreadyLogged")) {
                this.$router.go()
                localStorage.removeItem("alreadyLogged")
            }
            // console.log(this.$store.state.user.loggedIn)
            
        }
    }
}
</script>

<style scoped>

   .navbar {
       overflow: hidden;
        background-color: transparent;
        /* border-bottom: 1px solid #f7f7f7; */
        position: fixed;
        top: 0;
        width: 100%;
        /* height: 100px; */
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
    .navbar img{
        width: 40px;
    }
</style>