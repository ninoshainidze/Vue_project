<template>
    <div class="Add_Button">
        <UserAddForm v-if="visible"/>
        <button type="submit"  class="btn button  homeButton" v-on:click="UserAddForm()">Add User</button>
        <!-- am clickze gamodiodes useris damatebis forma -->
    </div>
</template>

<script>

import UserAddForm from '../UserAddForm/UserAddForm'
export default {
  name: 'UserAddButton',
  components:{
      UserAddForm
  },
  data(){
      return{
          visible: false
      }
      
  },
  methods:{
      UserAddForm(){
        this.visible = true
      }
      
  }
}

</script>

<style>
.Add_Button button{
    background: #00bcd4;
    border:none !important;
    border-radius: 50px;
    height: 40px;
    width: 120px;
}
   
</style>