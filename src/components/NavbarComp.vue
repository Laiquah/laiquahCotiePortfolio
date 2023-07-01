<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <router-link to="/"><img src="https://i.postimg.cc/sgBK837x/Screenshot-2023-05-26-093725-removebg-preview.png" alt="laiquah" loading="lazy"></router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                  <li class="nav-item" id="nav">
                    <router-link to="/">Home</router-link>
                  </li> |
                  <li class="nav-item" id="nav">
                    <router-link to="/about">About</router-link>
                  </li> |
                  <li class="nav-item" id="nav">
                    <router-link to="/resume">Resume</router-link>
                  </li> |
                  <li class="nav-item" id="nav">
                    <router-link to="/projects">Projects</router-link>
                  </li> |
                  <li class="nav-item" id="nav">
                    <router-link to="/testimonials">Testimonials</router-link>
                  </li> |
                  <li class="nav-item" id="nav">
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav{
    background-color: #FF95E1;
    color: white;
}

img{
  width:4rem;
}
</style>