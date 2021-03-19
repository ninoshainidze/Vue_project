<template>
    <div class="contact">
<div class="contanct_content" >
      <div class="contaier">
        <div class="col-md-12 text-center">
          <div class="inside_content">
            <h1>contact us</h1>
            <p>racxa dacxa</p>
          </div>
        </div>
      </div>
  </div>
            <div class="contact_form">
                <div class="container" style="display:flex;">
                  <div class="col-sm-6">
                    <form class="m-5">
                      <input type="text" id="fname" name="firstname" placeholder="Your name..">
                      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                      <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                      </select>
                      <textarea id="subject" name="subject" placeholder="Write something.." style="height:100"></textarea>
                      <button type="submit"  class="btn button  homeButton">{{$t('Submit')}}</button>
                    </form>
                  </div>
                  <div class="col-sm-6" >
                    <div class="contact_information m-5" style="border-bottom:2px solid #eee;">
                      <p>Contact us<p>
                      <h3>lets keep in touch</h3>
                      <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
                        
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
    </div>
</template>

<script>

  export default {
    name:'contact'
  }
  
</script>



<style  scoped>

.contanct_content{
  background-image: url('../../assets/heading-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding:200px 0px;
  color: white;
}

  .contact_form input, select, textarea{
    margin-bottom: 30px;
      
  }

 
  .container input[type=text], select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  /* border-radius: 30px; */
  box-sizing: border-box;
  resize: vertical;
}

input[type=submit] {
    background: transparent; 
    padding: 12px 20px;
    border-radius: 50px;
    cursor: pointer;
}

input[type=submit]:hover {
    background: transparent;
}

.container {
  border-radius: 5px;
  padding: 20px;
}

.contact_form button{
    background: #00bcd4;
    border:none !important;
    border-radius: 50px;
    height: 40px;
    width: 90px;
}

</style>