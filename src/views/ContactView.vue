<template>
    <div>
        <h1>Contact me:</h1>
        <Contact/>
    </div>
</template>

<script>
import Contact from '../components/ContactComp.vue'
    export default {
        components: {
            Contact
        }
    }
</script>

<style scoped>
h1{
    text-decoration: underline;
    font-weight: 700;
}

div{
    background-color: #FFE0F6;
    color: white;
  }
</style>