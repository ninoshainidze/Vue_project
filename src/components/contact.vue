<template>
    <div>
        <navbar/>
        <h1>{{$t('contact')}}</h1>
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