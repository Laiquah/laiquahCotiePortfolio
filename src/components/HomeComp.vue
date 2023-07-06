<template>
    <div>
      <div class="line">
        <h2 class='lineUp'>Welcome to my portfolio</h2>
        <h2 class='lineUp'>I'm Laiquah Cotie</h2>
        <h2 class='lineUp'>An aspiring WEB DEVELOPER</h2>
      </div>
        <img src="https://i.postimg.cc/rpW0pDSP/C12-Laiquah-Cotie-2.jpg." alt="picture" class="img-fluid">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
    margin-bottom: 1rem;
    width: 15rem;
    border: 18px solid black;
    border-radius: 10px;
}

.lineUp {
  animation: 2s anim-lineUp ease-out infinite;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

</style>