<template>
    <div class="container">
      <div class="cont">
        <h2 class="animate__animated animate__rubberBand">Welcome to my portfolio</h2>
        <h2 class="animate__animated animate__rubberBand">I'm Laiquah Cotie</h2>
        <h2 class="animate__animated animate__rubberBand">An aspiring WEB DEVELOPER</h2>
        <a href="/about" class="btn">Get to know me!</a>
      </div>
        <img src="https://i.postimg.cc/rpW0pDSP/C12-Laiquah-Cotie-2.jpg." alt="picture" class="img-fluid animate__animated animate__rubberBand">
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
    border: 18px solid #FF95E1;
    border-radius: 100px;
    margin-top: 1rem;
}

.btn {
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 3px solid #FF95E1;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
  margin: 1rem;
}

.btn:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #FF95E1;
  z-index: -1;
  border-radius: 10px;
}

.btn:hover, .btn:focus {
  color: white;
}

.btn:hover:before, .btn:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.btn:active {
  transform: scale(0.9);
}

.cont{
  margin-top: 7rem;
}

h2 {
  margin: 0 0.5rem;
  animation: rubberBand;
  animation-duration: 2s;
}

.container{
  display: flex;
  justify-content: center;
  justify-content: space-around;
}

@media (width <= 300px) {
  .container{
    display: flex;
    flex-direction: column;
  }

  .cont{
    margin-top: 2rem;
  }
}

</style>