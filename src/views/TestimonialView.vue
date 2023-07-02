<template>
    <div>
        <h1>Testimonials:</h1>
        <Testimonials/>
    </div>
</template>

<script>
import Testimonials from '../components/TestimonialComp.vue'
    export default {
        components: {
            Testimonials
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