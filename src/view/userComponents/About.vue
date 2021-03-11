<template>
  <div class="about">
 <div v-if="role == 'user'">
      <userNavbar/>
    </div>
    <div v-else>
      <Navbar/>
    </div>
    <div class="about_content">
      <div class="contaier">
        <div class="col-md-12 text-center">
          <div class="inside_content">
            <h1>About Us</h1>
            <p>racxa dacxa</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="container" style="display:flex">
        <div class="col-sm-6">
          <img src="../../assets/our-team.jpg" alt="">
        </div>
        <div class="col-sm-6">
          <div style="border-bottom:2px solid #eee;">
            <p>About Us</p>
            <h3>Background of our company</h3>
            <p>Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat. Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh.</p>
          </div>
          <div class="tabs" style="margin-top:40px;">
            <b-card no-body>
              <b-tabs card>
                <b-tab title="Tab 1" active>
                  <b-card-text>
                    Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus. Integer volutpat sapien in arcu fringilla, ac eleifend est facilisis.
                  </b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                  <b-card-text>
                    Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat.
                  </b-card-text>
                </b-tab>
                <b-tab title="Tab 3">
                  <b-card-text>
                    Fusce in semper velit, at tempus augue. Morbi quis auctor ipsum, ut accumsan neque. Vivamus dapibus ipsum placerat ante commodo, eget suscipit tortor hendrerit. Quisque lacinia sed velit et maximus.
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
        
      </div>
    </div>
    <div class="our_team">
      <div class="container">
        <div class="col-md-12 text-center">
          <p>our team</p>
          <h3>meet the greatest people</h3>
          <p>Integer blandit, tellus varius vulputate cursus, purus orci tincidunt tortor, eget tincidunt elit justo non leo. Donec mollis nulla id est suscipit, ut laoreet nibh faucibus.</p>
        </div>
        <div style="display:flex;">
        <div class="col-md-4 ">
          <div class="our_team_card">
            <b-card class="mb-2 text-center" >
            <img class="card-img img-fluid" src="../../assets/team-01.jpg">
              <b-card-text>
                <p>josep smart <br> co-founder</p>
              </b-card-text>
            </b-card>
         </div>
        </div>
        <div class="col-md-4 ">
          <div class="our_team_card">
            <b-card class="mb-2 text-center" >
            <img class="card-img img-fluid" src="../../assets/team-02.jpg">
              <b-card-text>
                <p>josep smart <br> co-founder</p>
              </b-card-text>
            </b-card>
         </div>
        </div>
        <div class="col-md-4 ">
          <div class="our_team_card">
            <b-card class="mb-2 text-center" >
            <img class="card-img img-fluid" src="../../assets/team-03.jpg">
              <b-card-text>
                <p>josep smart <br> co-founder</p>
              </b-card-text>
            </b-card>
         </div>
        </div>
        </div>
        
      </div>
    </div>

    <div class="about text-center" style="margin-top:100px; background:#f7f7f7;">
        <div class="container">
          <div class="row">
            <div style="margin:100px">
              <div class="col-md-12">
              <p>testimonials</p>
              <h4>what they say about us</h4>
            </div>
            <div class="col-md-12">
              <p>"Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."</p>
            <p>william smith <br> co-founder</p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
  <PageFooter/>
  </div>

</template>

<script>

import Navbar from '../../components/navbar/LandingPage'
import userNavbar from '../../components/navbar/userNavbar'
import PageFooter from '../../components/footer/pageFooter'

  export default {
    name:'about',
    components:{
      Navbar,
      userNavbar,
      PageFooter
    },
    data: function () {
      return{
        role : localStorage.getItem("role")
        
       
      }
    }
  }

</script>

<style scoped>

.about_content{
  background-image: url('../../assets/heading-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding:200px 0px;
  color: white;
}
.about-us{
  padding: 100px 0px;
  background-color: #f7f7f7;
}
.our_team{
  padding:100px 0px;
}
.our_team_card .card-body{
  padding:0px;
background-color: #f7f7f7  !important;
}

</style>