<template>
    <div>
        <h1>Projects:</h1>
        <Projects/>
    </div>
</template>

<script>
import Projects from '../components/ProjectComp.vue'
    export default {
       components: {
        Projects
       } 
    }
</script>

<style scoped>
h1{
    text-decoration: underline;
    font-weight: 700;
}
</style>