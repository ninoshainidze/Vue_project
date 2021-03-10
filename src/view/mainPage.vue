<template>
  <div>
    <router-view/>
    <div v-if="spinnerStatus">
      <Spinner/>
    </div>
    <div v-if="role != 'user' && role != 'admin'">
      <Navbar/>
    </div>
    <div class="main_content">
      <div class="contaier">
        <div>
          <div class="col-md-8 offset-md-2">
            <div class="inside_content">
              <h2>SEARCH YOUR DOMAIN</h2>
              <div class="search">
                <input class="search_input" type="text" placeholder="Enter your domain here...">
                <input class="search_button" type="submit" value="SEARCH NOW">
                <ul class="checkbox">
                  <li>
                    <label for="">
                      <input type="checkbox">
                      <span>.com</span>
                    </label>
                  </li>
                  <li>
                    <label for="">
                      <input type="checkbox">
                      <span>.net</span>
                    </label>
                  </li>
                  <li>
                    <label for="">
                      <input type="checkbox">
                      <span>.org</span>
                    </label>
                  </li>
                  <li>
                    <label for="">
                      <input type="checkbox">
                      <span>.in</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
            
    </div>
     <div class="trusted_section">
        <div class="container">
          <div class="col-md-12"> 
            <br>
              <h4 class="text-center">TRUSTED BY 1,250+ HAPPY CUSTOMERS WORLDWIDE</h4>
              <br>
              <div class="carousel">
                <carousel>
                  <img src="../assets/trusted-01.png">
                  <img src="../assets/trusted-01.png">
                  <img src="../assets/trusted-01.png">
                  <img src="../assets/trusted-01.png">
              </carousel>
              </div>
              
          </div>
        </div>

      </div>
      <div class="services-section" style="margin-top:80px;">
        <div class="container">
          <div class="col-md-12"> 
            <br>
            <p>Hosting Services</p>
              <h4>Services we provide</h4>
              <p>Host Cloud is a professional Bootstrap 4 template by TemplateMo for your hosting company websites. There are 4 HTML pages included in this template. You can feel free to customize anything. Please share this template to your friends. Thank you.</p>
              <br>
              <div  style="display:flex; margin-left:10px;">
                <div class="col-sm-4 service_card">
                <img src="../assets/download.png" alt="">
                <h4>10x Light Cloud</h4>
                <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
              </div>
              <div class="col-sm-4 service_card">
                <img src="../assets/download.png" alt="">
                <h4>10x Light Cloud</h4>
                <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
              </div>
              <div class="col-sm-4 service_card">
                <img src="../assets/download.png" alt="">
                <h4>10x Light Cloud</h4>
                <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
              </div>
              </div>
              
          </div>
        </div>

      </div>
      <div class="pricing-section">
        <div class="pricing_bg"></div>
        <div class="containter">
            
            <div class="pricing_content">
          <div class="container">
          <div class="col-sm-12 text-center text-white">
              <h4>Cloud Hosting Plans</h4>
              <p>Lorem ipsum dolor amet taxidermy sriracha cardigan salvia actually vice migas enamel pin sustainable carry scenester lomo hot chicken farm table actually kinfolk.</p>
            </div>
          <div class="col-md-12"> 
              <div  style="display:flex; margin-left:10px;">
                <div class="col-sm-4 service_card">
                  <h4>basic cloud 5x</h4>
                <img src="../assets/download.png" alt="">
                <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
              <button>start</button>
              </div>
              <div class="col-sm-4 service_card">
                <h4>cloud vps 10x</h4>
                <img src="../assets/download.png" alt="">
                <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
              <button>select</button>
              </div>
              <div class="col-sm-4 service_card">
                <h4>advenced cloud</h4>
                <img src="../assets/download.png" alt="">
                <p>Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id.</p>
              <button>take it</button>
              </div>
              </div>
              
          </div>
        </div>
      </div>
          
      
      </div>
      </div>
      <div class="about text-center" style="margin-top:100px; background:#f7f7f7;">
        <div class="container">
          <div class="row">
            <div style="margin:50px">
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

import Navbar from '.././components/navbar/LandingPage'
import PageFooter from  '.././components/footer/pageFooter'
import carousel from 'vue-owl-carousel'
import Spinner from '../components/spinner/spinner'

  export default {
    name:'mainPage',
    components:{
      carousel,
      PageFooter,
      Navbar,
      Spinner
    },
    data: function () {
      return{
        role: localStorage.getItem("role"),
        spinnerStatus:true
      }
    },
    mounted(){
      setTimeout(() => this.spinnerStatus = false, 2000);
    }
    
  }

</script>


<style scoped>

.main_content{
  background-image:url("../assets/banner-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding:300px 0px;
  text-align: center;
  color: white;
}
.search .search_input {
   background: transparent;
   border:1px solid white;
   width: 500px;
   height: 50px;
}
.search .search_button{
  background: #00bcd4;
  border: none;
   height: 50px;
   width: 150px;
   margin-left: 10px;
   color: white;
}
.search input::placeholder{
  color:white;
}
.checkbox{
  list-style: none;
  display: flex;
  margin-left: 200px;
}
.checkbox li{
  margin: 10px;
}
.trusted_section{
  background: #f7f7f7;
}
.carousel img{
  width: 150px  !important;
}
.service_card{
  background: #f7f7f7;
  text-align: center;
  margin-left: 10px;
}
.service_card img{
  width: 100px;
  border-radius: 50px;
  align-items: center;
}
.pricing_content{
  margin-top: -300px  !important;
}
.pricing_bg{
  margin-top: 150px;
  background-image: url('../assets/pricing-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
}
</style>

