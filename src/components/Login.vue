<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Welcome!</h1><br>
        <form @submit="login">
            <div class="form-group">
                <label>username</label><br>
                <input type="text" v-model="username" class="form-control">
                <span v-if="!$v.username.required && $v.username.$dirty" class="text-danger">username is required</span>
                <span v-if="(!$v.username.minLength || !$v.username.maxLength) && $v.username.$dirty" class="text-danger">username must be between {{ $v.username.$params.minLength.min }} and {{ $v.username.$params.maxLength.max }} characters</span>
            </div><br>

            <div class="form-group">
                <label>password</label><br>
                <input type="password" v-model="password" class="form-control clearform">
                <span v-if="!$v.password.required && $v.password.$dirty" class="text-danger">password is required</span>
                <span v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty" class="text-danger">password must be between {{ $v.password.$params.minLength.min }} and {{ $v.password.$params.maxLength.max }} characters</span>
            </div><br>

            <div class="incorrect" style="display: none; color: red;">username or password is incorrect</div><br>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>

import { required,  minLength, maxLength } from 'vuelidate/lib/validators'

import store from '.././store'

import json from '.././users.json'

export default {
    name:'Login',
    data()
    {
        return {
            errorMassage: 'username or password is incorect',
            username:'',
            password:'',
            userAuthenthification: false

        }
    },
    validations:{
        username:{
            required,
            maxLength: maxLength(6), 
            minLength: minLength(3) 
        
        },
        password:{
            required,
            maxLength: maxLength(6), 
            minLength: minLength(3) 
        }
    },
    methods:{
        
        login: function (event)
        {   
            for(const  user in json['users'])
            {
                
             if(this.username == json['users'][user]["userName"] && this.password == json['users'][user]["password"])
                {
                    store.getters["auth"]["loggedIn"] = true
                    this.userAuthenthification = true
                    localStorage.setItem("isLogin", true)
                    console.log(localStorage.getItem("isLogin"))
                }   
            }
            if(this.$v.$anyError){
                document.querySelector(".form-control").value = "";
                document.querySelector(".clearform").value = "";
            }

            else if(this.userAuthenthification && this.$v.$anyError)  {
                document.querySelector(".incorrect").style.display = "block";
            
            } else if( this.userAuthenthification) this.$router.push('dashboard'); event.preventDefault()

            this.$v.$touch();
        }
    }
}
</script>