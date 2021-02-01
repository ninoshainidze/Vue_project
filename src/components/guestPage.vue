<template>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="contact" >{{$t('contact')}}</router-link></a>  
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="service" >{{$t('service')}}</router-link></a>     
                    </li>
                </ul>
            </div>
            <button v-on:click = "logout" class="btn button"> <router-link to="/">{{$t('logout')}}</router-link></button>
        </nav>
        <div>Guest</div>
    </div>
  
</template>

<script>
export default {
    name:'guestPage',
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