<template>
    <div>
        <navbar/>
        <h1>{{$t('contact')}}</h1>
        <p>tt</p>
        <p>ID: {{ $route.params.id }}</p>
    </div>
</template>

<script>
import navbar from './navbar'

export default {
    name:'contact',
    components:{
        navbar
    }
}
</script>