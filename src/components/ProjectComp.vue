<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in projects" :key="item.id">
                    <div class="card img-fluid" style="width: 13rem;" loading="lazy">
                        <img :src="item.image" class="card-img-top" :alt="item.name" loading="lazy">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.name }}</h5>
                          <p class="card-text">{{ item.description }}</p>
                          <a :href="item.github" class="btn" target="_blank">Github</a>
                          <a :href="item.netlify" class="btn" target="_blank">Netlify</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       computed : {
        projects() {
            return this.$store.state.projects
        }
       },
       mounted () {
        this.$store.dispatch('fetchProjects')
       }
    }
</script>

<style scoped>
h1{
    text-decoration: underline;
    font-weight: 700;
}

.card{
    height: 110vh;
    margin-bottom: 1rem;
}

h5{
    text-decoration: underline;
    font-weight: 700;
}

img{
    padding: .5rem;
}

@media (width < 300px) {
    .card{
        height : 75vh;
    }
}
</style>