<template>
    <div style="margin-top:100px;">
        <!-- <h1>User List</h1> -->
        <!-- <UserAddButton/> -->
        <!-- <button v-on:click="ragac()">user</button> -->
        <!-- <v-btn>Add User</v-btn> -->

        <!-- <div v-for="user in user" :key="user.id"></div> -->
        
        <!-- <adminNavbar/> -->
        <!-- <button  class="btn button  homeButton">delete user</button>
        <button  class="btn button  homeButton">eidt user</button> -->
        <!-- <table>
            <tbody>
                <tr>
                    <th>username</th>
                    <th>role</th>
                </tr>
                <tr v-for="item in items" :key="item.username">
                    <td>{{ item.username }}</td>
                    <td>{{ item.password }}</td>
                </tr>
            </tbody>
        </table> -->
       <Test/>
        <!-- <UserAddForm/> -->
    </div>
</template>

<script>

// import UserAddButton from '../../components/UserAddButton/UserAddButton'
// import UserDeleteButton from '../../components/UserDeleteButton/UserDeleteButton'

// import firebase from "../../firebase";
// const db = firebase.firestore();

// import UserAddForm from '../../components/UserAddForm/UserAddForm'


import Test from '../../components/UserAddForm/test'

export default {
    name:'controlPanel',
    components:{
        Test
        // UserAddForm
        // UserAddButton
    }
    // data(){
    //     return{
    //         items:[]
            
    //     }
        
    // }
    // mounted(){
       
    //     db.collection("members")
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 this.items.push(doc.data())
    //             })
                
    //         })
        
    // }


    
}
</script>


<style scope>
    .modal-backdrop {
        opacity: 0.5;
    }
    /* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
} */
</style>