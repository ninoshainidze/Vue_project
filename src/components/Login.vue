<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Welcome!</h1><br>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider name="Name" rules="required|alpha|max:5|min:3" v-slot="{ errors }">
                    <div class="form-group">
                        <label>username</label>
                        <input type="text" class="form-control" v-model="username">
                        <span>{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider name="password" rules="required|max:5|min:2" v-slot="{ errors }">
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                        <span>{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <div class="error">
                    <span>{{ incorrectDataMassage }}</span>
                </div>

                <input type="submit" class="btn btn-primary mt-3" text="Submit">

            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import json from '.././users.json'

export default {
    name:'Login',
    data()
    {
        return {
            username:'',
            password:'',
            userAuthenthification: false,
            incorrectDataMassage: ''
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
                this.incorrectDataMassage = 'username or password is incorrect!'
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