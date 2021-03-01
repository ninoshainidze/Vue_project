<template>
    <div class="contact">
      <Navbar/>
        <div class="contact_content">
            <div class="contact_form">
                <h3>Contact Us</h3>
                <p>Contact us for more information </p>
                <div class="container">
                    <form>
                      <label for="fname">First Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Your name..">
                  
                      <label for="lname">Last Name</label>
                      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                  
                      <label for="country">Country</label>
                      <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                      </select>
                  
                      <label for="subject">Subject</label>
                      <textarea id="subject" name="subject" placeholder="Write something.." style="height:100"></textarea>
                  
                      <input type="submit" value="Submit">

                    </form>
                  </div>
            </div>
            <div class="contact_information">
                <h5>Contact Details</h5>
                <p>simply dummy text of the printing and<br> typesetting industry.
                     Lorem Ipsum has been the<br> standard dummy text ev
                     er since the 1500s, when an unknown</p>
                     <p>101 bc 10B</p>
                     <p>+995 55 55 55</p>
                     <p>nino_55@gmail.com</p>
            </div>
        </div>
        <PageFooter/>
    </div>
</template>

<script>

import  Navbar from '../.././components/navbar/navbar'
import PageFooter from '../.././components/footer/pageFooter'

  export default {
    name:'contact',
    components:{
      Navbar,
      PageFooter
    }
  }
  
</script>



<style>
.contact{
    width: 100%;
    height: 600px;
  }
.contact_content{
    margin: auto;
    height: 500px;
    width: 100%;
    margin-top: 80px;
    display: flex;
  }
 
  .contact_form, .contaact_information{
      width: 50%;
      
  }
  .container form{
    height: 500px;
  }
  .container input[type=text], select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
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
.contact_information{
    margin: 100px;
}


</style>