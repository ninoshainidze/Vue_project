<template>
    <div>
        <navbar/>
        <h1>{{$t('service')}}</h1>
    </div>
</template>

<script>
import navbar from './navbar'

export default {
    name:'service',
    components:
    {
        navbar
    }
}
</script>