<template>
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <router-link to="/"><img src="https://i.postimg.cc/sgBK837x/Screenshot-2023-05-26-093725-removebg-preview.png" alt="laiquah" loading="lazy"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="https://i.postimg.cc/sgBK837x/Screenshot-2023-05-26-093725-removebg-preview.png" alt="laiquah" loading="lazy"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link to="/" >Home</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link to="/about">About</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link to="/resume">Resume</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link to="/projects">Projects</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link to="/testimonials">Testimonials</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link to="/contact">Contact</router-link>
                </li>
               </ul>
            </div>
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
    height: 5rem;
}

.navbar:hover{
  color: black;
}

.nav-item{
  margin-bottom: 3rem;
}

img{
  width:4rem;
}

.offcanvas-body{
  background-color: #FF95E1;
}

.offcanvas-header{
  background-color: #FF95E1;
}
</style>