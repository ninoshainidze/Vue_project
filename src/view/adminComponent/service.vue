<template>
    <div class="mt-5">
        <adminNavbar/>
        <h1>{{$t('service')}}</h1>

        
        

        <div>
            <b-table striped hover :items = "items"></b-table>
        </div>
        <PageFooter/>
    </div>
</template>

<script>

import adminNavbar from '../../components/navbar/adminNavbar'
import PageFooter from '../../components/footer/pageFooter'

export default {
    name:'service',
    components:{
        adminNavbar,
        PageFooter
    },
    data(){
        return{
            items:[
                { age: 50, firstName: 'nino', lastName:'shano'},
                { age: 50, firstName: 'nino', lastName:'shano'},
                { age: 50, firstName: 'nino', lastName:'shano'}
            ]
            
        }
    },


    
}
</script>


<style>
    .modal-backdrop {
        opacity: 0.5;
    }
    .table{
        width: 50% !important;
    }
</style>