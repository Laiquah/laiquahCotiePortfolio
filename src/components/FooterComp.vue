<template>
  <div>
    <center>
    <div class="socials">
      <div class="circle">
        <a target="_blank" href="https://github.com/Laiquah"><i class="fa-brands fa-github fa-xl" style="color: #000000;"></i></a>
      </div>
      <div class="circle">
        <a target="_blank" href="https://www.linkedin.com/in/laiquah-cotie-879a20275/"><i class="fa-brands fa-linkedin fa-xl" style="color: #000000;"></i></a>
      </div>
      <div class="circle">
        <a target="_blank" href="mailto:cotielaiquah@gmail.com"><i class="fa-solid fa-envelope fa-xl" style="color: #000000;"></i></a>
      </div>
    </div>
  </center>
     &copy;2023 Laiquah Cotie | All Rights Reserved
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
div{
  background-color: #FF95E1;
  color: white;
}
.socials {
  width: 14rem;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.circle {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.circle:hover {
  background-color: white;
}
</style>
