<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Welcome!</h1>
        <br><br><br>
        <form @submit="login">
            <input type="text" placeholder="Enter Username" v-model="username"><br><br>
            <input type="text" placeholder="Enter Password" v-model="password"> <br><br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
var userAuthenthification = false
import store from './store'
var json_example = {
                    'users':
                    [
                            {
                                "userName":"qwert", 
                                "password":"qwert"
                            }, 
                            {
                                "userName":"nino", 
                                "password":"nino"
                            },
                            {
                                "userName":"lilo", 
                                "password":"lilo"
                            }
                    ]
                    }
export default {
    name:'Login',
    data()
    {
        return {
            username:null,
            password:null}
    },
    methods:{
        login(event)
        { 
            for(const  user in json_example["users"])
            {
             if(this.username == json_example["users"][user]["userName"] && this.password == json_example["users"][user]["password"])
                {
                    // console.log(this.username)
                    // console.log(this.password)
                    store.getters["auth"]["loggedIn"] = true
                    userAuthenthification = true
                }   
            }

            if(!userAuthenthification) window.location.reload() 
            else this.$router.push('dashboard')
            event.preventDefault()
        }
    }   
}

</script>