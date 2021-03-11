<template>
    <div class="sign_up_button">
        <button> <router-link to="/Login">sign up</router-link></button>
    </div>
</template>

<script>

export default {
  name: 'SignUpButton',
}

</script>

<style>
.sign_up_button button{
    background: transparent;
    border: 1px solid  black;
    border-radius: 50px;
    height: 40px;
    width: 90px;
    margin-left: 10px;
    color: white;
}
.sign_up_button button:focus{
    outline: none;

}
   
</style>