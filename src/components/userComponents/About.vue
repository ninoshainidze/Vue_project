<template>
  <div class="about">

    <div class="about_content">
      <div class="nino">

      <div>
        <h2>we are the ragac ragac</h2>
        <p>We now work with 91 of the Fortune Global 100. As of 2020, we've made 18 consecutive appearances on the list of Fortune's
           "World's Most Admired Companies". And that's just the beginning.</p>
          
        </div>
          <h4>Our team</h4>
          <div class="profile_cards">
          <div class="card">
            <img src="../../assets/timothee chalamet.jpg" alt="John" style="width:100%">
            <p>John Doe</p>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
          </div>
          <div class="card">
            <img src="../../assets/timothee chalamet.jpg" alt="John" style="width:100%">
            <p>John Doe</p>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
          </div>
          <div class="card">
            <img src="../../assets/timothee chalamet.jpg" alt="John" style="width:100%">
            <p>John Doe</p>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
          </div>
        </div>
    </div>
  </div>
  </div>

</template>

<script>
  
  export default {
    name:'about'
  }
  
</script>

<style>
  .about{
    width: 100%;
    height: 700px;
  }
  .about_content{
    border-radius: 30px;
    background-color: #b8afc8 ;
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
  .card {
    margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  max-height: 350px;
  text-align: center;
  margin-left: 50px;
}
  
</style>