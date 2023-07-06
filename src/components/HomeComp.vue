<template>
    <div>
        <h1>Welcome to my Portfolio</h1>
        <h2>I am Laiquah Cotie.</h2>
        <h4>An aspiring full-stack developer</h4>
        <img src="https://i.postimg.cc/hjnxTvxW/image.png" alt="picture" class="img-fluid">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
    margin-bottom: 1rem;
}

h1, h2, h4 {
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    animation: typing 1.5s steps(20), cursor 0.4s step-end infinite alternate;
  }

  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
</style>