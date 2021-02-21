<template>
    <div>
        
        <h1>{{$t('welcomeMassage')}}</h1>
        <img alt="Vue logo" src="../assets/logo.png">
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
            
            <button type="submit"  class="btn buttton">{{$t('Submit')}}</button>

        </form>
    </ValidationObserver>
    </div>
</template>

<script>


import json from '.././users.json'

export default {
    name:'Login',
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
        console.log("ss",this.$store.state.user.loggedIn)
            
            json.forEach(user => {
                if(this.username == user["userName"] && this.password == user["password"])
                {
                
                    this.$store.state.user.role = user["role"]
                    this.$store.commit("logIn",true)
                    console.log(this.$store.state.user.loggedIn)
                    // console.log(this.$store.getters["auth"]["role"])
                    // localStorage.setItem("role",user["role"])
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