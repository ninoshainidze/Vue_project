

<template>
    <div>
      
    </div>
  </template>


<script>

import {mapState, mapActions, mapMutations} from 'vuex'


export default {
methods: {

getLoginInfo() {
  http.getLoginInfo({userToken}).then(data => {
      
    this.setUserInfo({userInfo: data});
    this.updateUserInfo(data);
  
         This.$message('login successful');
  }).catch(e => {
    this.$message(e)
 })
},



...mapActions(`user`,[`updateToken`,`updateUserInfo`,`updateRoleInfoList`]),
...mapMutations(`user`, [`setUserInfo`, `setToken`,  `setRoleInfoList`])
}
}

var obj = { name:'Jim' };
var str = JSON.stringify(obj);
 

sessionStorage.obj = str;

str = sessionStorage.obj;

obj = JSON.parse(str);
</script>
