<template>
    <div class="Add_Form">
        <ValidationObserver  v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(AddUser)">
            <ValidationProvider :name="$t('username')" rules="required|alpha|max:5|min:3" v-slot="{ errors }">
                <div class="form-group">
                    <label>{{$t('username')}}</label>
                    <input type="text" class="form-control" v-model="username">
                    <span>{{ errors[0] }}</span>
                </div>
            </ValidationProvider>
            <ValidationProvider :name="$t('password')" rules="required|max:5|min:2" v-slot="{ errors }">
                <div class="form-group">
                    <label>{{$t('password')}}</label>
                    <input type="password" class="form-control" v-model="password">
                    <span>{{ errors[0] }}</span>
                    
                </div>
            </ValidationProvider>
            
            <select  v-model="role">
                <option disabled value="">Please select role</option>
                <option value="user">user</option>
                <option value="admin">admin</option>
            </select>
        </form>
    </ValidationObserver>
        
        <button type="submit"  class="btn button  homeButton" v-on:click="AddUser()">add</button>

    <table>
            <tbody>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>role</th>
                    <th>#</th>
                    <th>#</th>
                </tr>
                <tr v-for="item in items" :key="item.username">
                    <td>{{ item.username }}</td>
                    <td>{{ item.password }}</td>
                    <td>{{ item.role }}</td>
                    <td><img src="../../assets/delete.png" alt=""></td>
                    <td><img src="../../assets/edit.png" alt=""></td>
                </tr>
                
                
            </tbody>
        </table>
    </div>
</template>

<script>
import firebase from "../../firebase";
const db = firebase.firestore();

export default {
  name: 'SubmitButton',
  data(){
      return{
          username:"",
          password:"",
          role:"",
          items:[]

      }
  },
  mounted(){
        db.collection("members")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.items.push(doc.data())

                // console.log(doc.id);
                // console.log(doc.data());
                const obj = Object.assign({}, doc.data(), {"doc_id":doc.id})
               
                console.log(obj);
            })
                
        })
    },
  methods:{
      AddUser(){
        db.collection('members')
        .doc()
        .set({role:this.role, username:this.username, password:this.password})
        .then(() => {
            console.log("added user");
            this.items.push({role:this.role, username:this.username, password:this.password})
            // this.$router.push('/admin/controlPanel')
        })
      }
  }
}

</script>

<style scoped>
.form-group span, .error {
        color: red;
    }
   .Add_Form input{
       width: 50%;
   }

    table {
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
}
</style>