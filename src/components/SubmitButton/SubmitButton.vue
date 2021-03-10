<template>
    <div class="Submit_buttom">
        <button type="submit"  class="btn button  homeButton">{{$t('Submit')}}</button>
    </div>
</template>

<script>
export default {
  name: 'SubmitButton'
}

</script>

<style>
.Submit_buttom button{
    background: #00bcd4;
    border:none !important;
    border-radius: 50px;
    height: 40px;
    width: 90px;
}
   
</style>