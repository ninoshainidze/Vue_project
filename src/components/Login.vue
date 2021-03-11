<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top:100px;">
            <div class="col-sm-12 text-center">
                <h1>{{$t('welcomeMassage')}}</h1>
                <img alt="Vue logo" src="../assets/icons8-whois-100.png" >
            </div>
        </div>
        
        <div class="container text-center" style="margin-bottom:100px;">

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
           <SubmitButton/>
        </form>
    </ValidationObserver>
    </div>
    <PageFooter/>
    </div>
</template>

<script>

import Navbar from './navbar/LandingPage'   
import PageFooter from './footer/pageFooter'
import SubmitButton from './SubmitButton/SubmitButton'

import firebase from "../firebase";
const db = firebase.firestore();

export default {
    name:'Login',
    components:{
        Navbar,
        PageFooter,
        SubmitButton
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
            users:{}
        }
    },
    methods:{
        onSubmit(){
            db.collection("members")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.users = doc.data()
                    if(this.username == this.users["username"] && this.password == this.users["password"])
                        {
                            this.$store.state.user.role = this.users["role"]
                            localStorage.setItem("role",this.users["role"])
                            this.$store.commit("logIn",true)
                            console.log(this.users);
                        }
                    if(this.$store.state.user.loggedIn)
                        {
                        
                            this.$router.push(this.$store.state.user.role).catch(()=>{}); 
                        }
                
                });
            });
        
        }

    }
     
}
</script>

<style scoped>

    .form-group span, .error {
        color: red;
    }
    .form-group input{
        width: 25%;
        margin-left: 37.5%;
    }
    
</style>