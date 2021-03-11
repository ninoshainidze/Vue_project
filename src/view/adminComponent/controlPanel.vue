<template>
    <div style="margin-top:100px;">
        
       <Test/>
    </div>
</template>

<script>


import Test from '../../components/UserAddForm/test'

export default {
    name:'controlPanel',
    components:{
        Test
    }
}
</script>


<style scope>
    .modal-backdrop {
        opacity: 0.5;
    }

</style>