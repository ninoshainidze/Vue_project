<template>
    <div class="profile">
      <userNavbar/>
      <div class="background"></div>
      <div class="user">
        <img src="../../assets/download.png" alt="">
        <div class="center_div">
            <b-table striped hover :items = "items"></b-table>
        </div>
      </div>
      <PageFooter/>
    </div>
</template>
  


<script>
import userNavbar from '../.././components/navbar/userNavbar'
import PageFooter from '../.././components/footer/pageFooter'
    
export default {
  name:'profile',
  components:{
    userNavbar,
    PageFooter
  },
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