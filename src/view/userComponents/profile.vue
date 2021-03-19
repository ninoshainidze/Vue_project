<template>
    <div class="profile">
      <div class="background"></div>
      <div class="user">
        <img src="../../assets/download.png" alt="">
        <div class="center_div">
            <b-table striped hover :items = "items"></b-table>
        </div>
      </div>
    </div>
</template>
  


<script>
    
export default {
  name:'profile',
  data(){
    return{
        items:[
            {  firstName: 'nino', lastName:'shano', age:'21'}
        ]
    }
  }
}
    
  </script>
  
<style>
  .background{
    background-color:#DDF1FF;
    width: 100%; 
    height: 150px;
  }
  .user{
    margin-top:-80px;
  }
  .user img{
    border-radius: 50%;
    width: 150px;
  }
  .center_div{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
</style>