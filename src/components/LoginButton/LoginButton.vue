<template>
    <div class="login_button">
        <button> <router-link to="/Login">{{$t('login')}}</router-link></button>
    </div>
</template>

<script>

export default {
  name: 'LoginButton',
}

</script>

<style>
.login_button button{
    background: #00bcd4;
    border: none;
    border-radius: 50px;
    height: 40px;
    width: 80px;
    margin-left: 10px;
    color: white;
}
   
</style>