<template>
  <div class="homePage">
  <userNavbar/>
  <div style="margin-top: 100px;" class="ml-5">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
  
      <button  class="btn button  homeButton">go</button>
    </b-card>
  </div>
  <div style="margin-top: 100px;" class="ml-5">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
  
      <button  class="btn button  homeButton">go</button>
    </b-card>
  </div>
  <div style="margin-top: 100px;" class="ml-5">
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
  
      <button  class="btn button  homeButton">go</button>
    </b-card>
  </div>
  
   <PageFooter/>
  </div>
</template>

<script>

import userNavbar from '../../components/navbar/userNavbar'
import PageFooter from '../../components/footer/pageFooter'



  export default {
    name:'home',
    components:{
      userNavbar,
      PageFooter

    }
  }
</script>


<style>
  
 
.homePage{
  /* margin-top: 50px !important; */
  display: flex;
}

 

 
</style>

