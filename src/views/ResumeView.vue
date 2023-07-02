<template>
    <div>
        <h1>Resume:</h1>
        <Resume/>
    </div>
</template>

<script>
import Resume from '../components/ResumeComp.vue'
    export default {
        components: {
            Resume
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