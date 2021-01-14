<template>
    <div>
        <h1>{{$t('welcomeMassage')}}</h1>
        <img alt="Vue logo" src="../assets/logo.png">
        <form @submit.prevent="onSubmit">
            <ValidationProvider name="username" rules="required|alpha|max:5|min:3" v-slot="{ errors }">
                <div class="form-group">
                    <label>{{$t('username')}}</label>
                    <input type="text" class="form-control" v-model="username">
                    <span>{{ errors[0] }}</span>
                </div>
            </ValidationProvider>

            <ValidationProvider name="password" rules="required|max:5|min:2" v-slot="{ errors }">
                <div class="form-group">
                    <label>{{$t('password')}}</label>
                    <input type="password" class="form-control" v-model="password">
                    <span>{{ errors[0] }}</span>
                </div>
            </ValidationProvider>

            <div class="error">
                <span>{{ incorrectDataMassage }}</span>
            </div>

            <button type="submit">{{$t('Submit')}}</button>
        </form>
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
            userAuthenthification: false,
            incorrectDataMassage: '',
            locale: 'en',
        }
    },
    methods:{
        onSubmit(){
            this.$store.getters["auth"]["loggedIn"] = false
            json.forEach(user => {
                if(this.username == user["userName"] && this.password == user["password"])
                {
                    this.$store.getters["auth"]["loggedIn"] = true
                    this.userAuthenthification = true
                }
            });
            if(this.$store.getters["auth"]["loggedIn"]){
                this.$router.push('dashboard'); 
                event.preventDefault()
            } else {
                this.incorrectDataMassage =`${this.$t("incorrectDataMassage")}`
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
        width: 50%;
        margin-left: 25%;
    }
</style>