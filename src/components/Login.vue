<template>
    <div>
        <Navbar/>
        <h1>{{$t('welcomeMassage')}}</h1>
        <img alt="Vue logo" src="../assets/logo.png" style="width: 300px;">
        <ValidationObserver  v-slot="{ handleSubmit }">
            
        <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider :name="$t('username')" rules="required|alpha|max:5|min:3" v-slot="{ errors }">
                <div class="form-group">
                    <label>{{$t('username')}}</label>
                    <input type="text" class="form-control" v-model="username">
                    <span>{{ errors[0] }}</span>
                </div>
            </ValidationProvider>

            <ValidationProvider :name="$t('password')" rules="required|max:5|min:2" v-slot="{ errors }">
                <div class="form-group">
                    <label>{{$t('password')}}</label>
                    <input type="password" class="form-control" v-model="password">
                    <span>{{ errors[0] }}</span>
                    
                </div>
            </ValidationProvider>
            
            <button type="submit"  class="btn button  homeButton" style="margin: 0px !important">{{$t('Submit')}}</button>
            <!-- <button  > <router-link to="/Login">{{$t('login')}}</router-link></button> -->

        </form>
    </ValidationObserver>
    <PageFooter/>
    </div>
</template>

<script>

import Navbar from './navbar/navbar'   
import PageFooter from './footer/pageFooter'
import json from '../users.json'

export default {
    name:'Login',
    components:{
        Navbar,
        PageFooter
    },
    props:{
        msg: String
    },
    data()
    {
        return {
            username:'',
            password:'',
            role: '',
            locale: 'en',
        }
    },
    methods:{
        
     onSubmit(){
        console.log(this.$store.state.user.role);
            json.forEach(user => {
                if(this.username == user["userName"] && this.password == user["password"])
                {
                    this.$store.state.user.role = user["role"]
                    this.$store.commit("logIn",true)
                }
            });
            if(this.$store.state.user.loggedIn){
                this.$router.push(this.$store.state.user.role); 
                event.preventDefault()
            } 
          
            
        }

    }
}
</script>

<style>
    .form-group span, .error {
        color: red;
    }
    .form-group input{
        width: 25%;
        margin-left: 37.5%;
    }
    .buttton {
        background-color: #7DCEA0;
    }
</style>