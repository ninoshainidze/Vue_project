<template>
  <div class="about">
    <Navbar/>
    <div class="about_content">
      <div class="nino">
      <div>
        <h2>{{$t('aboutHeader')}}</h2>
        <p>{{$t('aboutUs')}}</p>
        </div>
          <h4>{{$t('ourteam')}}</h4>
          <div class="profile_cards">
          <div class="card _card_">
            <img src="../../assets/timothee chalamet.jpg" alt="John" style="width:100%">
            <p>John Doe</p>
            <p>CEO & Founder, Example</p>
            
          </div>
          <div class="card _card_">
            <img src="../../assets/timothee chalamet.jpg" alt="John" style="width:100%">
            <p>John Doe</p>
            <p >CEO & Founder, Example</p>
          
          </div>
          <div class="card _card_">
            <img src="../../assets/timothee chalamet.jpg" alt="John" style="width:100%">
            <p>John Doe</p>
            <p >CEO & Founder, Example</p>
            
          </div>
        </div>
    </div>
  </div>
  <PageFooter/>
  </div>

</template>

<script>
  import  Navbar from '../../components/navbar/navbar'
  import PageFooter from '../../components/footer/pageFooter'

  export default {
    name:'about',
    components:{
      Navbar,
      PageFooter
    }
  }

</script>

<style>
  .about{
    width: 100%;
    height: 100%;
  }
  .about_content{
    margin: auto;
    height: auto;
    width: 800px;
    margin-top: 80px;
  }
  .nino{
    margin: 50px;
  }
  .profile_cards{
    display: flex;
    margin: auto;
  }
  ._card_ {
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 200px;
    max-height: 350px;
    text-align: center;
    margin-left: 50px;
    border-radius: 50px;
  }
  ._card_ img{
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
</style>