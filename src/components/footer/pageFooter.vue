<template>
  <div>
    <footer class="text-center text-lg-start fixed-bottom">
      <div class="text-center p-3">
        © 2020
        <a href="" class="mr-2"
          ><img src="../../assets/linkedin.png" alt=""
        /></a>
        <a href="" class="mr-2"><img src="../../assets/gihub.png" alt="" /></a>
        <a href=""><img src="../../assets/facebook.png" alt="" /></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
};
</script>

<style scoped>
footer {
  background-image: url("../../assets/footer-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
footer img {
  width: 30px;
}
</style>
