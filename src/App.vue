<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/NavbarComp.vue'
import Footer from './components/FooterComp.vue'
export default {
  components : {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Englebert', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #FFE0F6;
  color: white;
}

@import url('https://fonts.cdnfonts.com/css/englebert');
nav a {
  font-weight: bold;
  color: white;
  margin: .8rem;
}

</style>
