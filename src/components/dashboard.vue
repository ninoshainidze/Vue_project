<template>
    <div>
        <navbar/>
        <h1>{{$t('dashboard')}}</h1>
    </div>
</template>

<script>
import navbar from './navbar'
import store from '.././store'

if(localStorage.getItem("isLogin")) {
    store.getters["auth"]["loggedIn"] = true 
    
}

export default {
    name:'dashboard',
    components: {
        navbar
    }
}
</script>