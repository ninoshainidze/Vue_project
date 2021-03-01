<template>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/admin">{{$t('dashboard')}}</router-link></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="/admin/controlPanel" >{{$t('controlPanel')}}</router-link></a>     
                    </li>
                </ul>
            </div>
            <languageSwitcher></languageSwitcher>
            <button v-on:click = "logout" class="btn button ml-2"> <router-link to="/">{{$t('logout')}}</router-link></button>
            <img src="../../assets/admin.png" alt="" style="width: 4    0px;">
            
        </nav>
        <router-view/>
        
    </div>
</template>

<script>



import languageSwitcher from '.././languageSwitcher'



export default {
    name:'adminNavbar',
    components:{
        languageSwitcher
    },
    methods: {
        logout(){
            this.$store.commit("logOut")
            console.log(this.$store.state.user.loggedIn)
            
        }
    }
}
</script>

<style>
    .navbar{
        
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