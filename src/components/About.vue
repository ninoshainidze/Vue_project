<template>
  <div>
    <navbar/>
    <h1>{{$t('about')}}</h1>
  </div>

</template>

<script>
  import navbar from './navbar'

  export default {
    name:'about',
    components:{
        navbar
    }
  }
</script>