<template>
    <div>
        <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" style="margin-left:10%;"><router-link to="dashboard" style="text-decoration:none; color:white">DashBoard</router-link></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
           <a class="nav-link" > <router-link to="about" style="text-decoration:none; color:white">About</router-link></a>
        </li>
        <li class="nav-item ">
            <a class="nav-link"><router-link to="contact" style="text-decoration:none; color:white">Contact</router-link></a>  
        </li>
        <li class="nav-item ">
            <a class="nav-link"><router-link to="service" style="text-decoration:none; color:white">Service</router-link></a>     
        </li>
        </ul>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    name:'navbar'
}
</script>