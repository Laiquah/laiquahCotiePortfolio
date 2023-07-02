<template>
  <div>
    <h1>Landing Page</h1>
    <Home/>
  </div>
</template>

<script>
import Home from '../components/HomeComp.vue'
  export default {
    components: {
      Home
    }
  }
</script>

<style scoped>
h1{
  text-decoration: underline;
  font-weight: 700;
}
</style>
