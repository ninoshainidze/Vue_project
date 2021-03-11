<template>
    <div>
        <div  class="container">
            <h1>Add members</h1>
            <div v-if="!isEditing">
                <input type="text" v-model="username" placeholder="Enter Username">
                <input type="text" v-model="password" placeholder="Enter pasword">
                <select  v-model="role">
                    <option disabled value="">Please select role</option>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
                <input type="submit" style="width:100px;" value="Add" v-on:click="storeTodo">
            </div>
            <div v-else>
                <input type="text" v-model="username" >
                <input type="text" v-model="password">
                <select  v-model="role">
                    <option disabled value="">Please select role</option>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
                <input type="submit" value="Update" v-on:click="updateData">
            </div>


            <table>
            <tr>
                <th>username</th>
                <th>password</th>
                <th>role</th>
                <th></th>
            </tr>
            <tr v-for="(customer, idx) in items" :key="idx">
                <td>{{ customer["username"] }} </td>
                <td>{{ customer["password"] }}</td>
                <td>{{ customer["role"] }}</td>
                <td>
                    <button v-on:click="editData( customer['username'], customer['password'], customer['role'] , customer['doc_id'])">Edit</button>
                    <button v-on:click="removeData(customer['doc_id'])">Delete</button>
                </td>
            </tr>
            
            </table>
        </div>
    </div>
</template>

<script>

import firebase from "../../firebase";
const db = firebase.firestore();

    export default {
        name:'test',
        data() {
            return{
                isEditing: false,
                username: '',
                password:'',
                role:'',
                items: [],
                updateDocId:''
            }
        },
        
        methods: {
            storeTodo() {
                db.collection('members')
                .doc()
                .set({role:this.role, username:this.username, password:this.password})
                .then(() => {
                        this.getData()
                        this.username = ''
                        this.password = ''
                        this.role = ''
                })
                
            },
            removeData(doc_id) {
                db.collection("members")
                .doc(doc_id)
                .delete()
                .then(() =>{
                    this.getData()
                })
                

            },
            updateData() {
                db.collection('members')
                .doc(this.updateDocId)
                .update({role:this.role, username:this.username, password:this.password})
                .then(() => {
                    this.username = ''
                    this.password = ''
                    this.role = ''
                    this.updateDocId = ''
                    this.isEditing = false
                    this.getData()
                })
            },
            editData( username, password, role, doc_id) {
                this.isEditing = true
                this.username = username
                this.password = password
                this.role = role
                this.updateDocId = doc_id
            },
            getData(){
                this.items = []
                db.collection("members")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const obj = Object.assign({}, doc.data(), {"doc_id":doc.id})
                        this.items.push(obj)
                    })
                    
                })
            }
        },
        mounted(){
            this.getData()
        }
    }

     
</script>

<style scoped>

    .container {
        max-width: 960px;
        margin: 0 auto;
    }
    .container input, .container select{
    background: #00bcd4;
    border:0;
    width: 200px;
    height: 50px;
    padding: 0 20px;
    margin: 20px;
    font-size: 18px;
    border-radius: 10px;
    /* color: #fff; */
    }
    .container select{
        width: 260px;
    }
    .container input:focus{
        outline: none;
    } 
    .container input::placeholder{
        color: black;
    }  
    h1 {
        padding-top: 40px;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
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