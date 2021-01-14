<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" style="margin-left:10%;"><router-link to="dashboard" style="text-decoration:none; color:white">{{$t('dashboard')}}</router-link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" > <router-link to="about" style="text-decoration:none; color:white">{{$t('about')}}</router-link></a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="contact" style="text-decoration:none; color:white">{{$t('contact')}}</router-link></a>  
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link"><router-link to="service" style="text-decoration:none; color:white">{{$t('service')}}</router-link></a>     
                    </li>
                </ul>
            </div>
            <button v-on:click = "logout"> <router-link to="/" style="text-decoration:none; color:white">{{$t('logout')}}</router-link></button>
        </nav>
    </div>
</template>

<script>



export default {
    name:'navbar',
    methods: {
        logout(){
            localStorage.removeItem("isLogin")
            
        }
    }
}
</script>