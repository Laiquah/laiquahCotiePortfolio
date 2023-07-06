<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in projects" :key="item.id">
                    <div class="card img-fluid" loading="lazy">
                        <img :src="item.image" class="card-img-top" :alt="item.name" loading="lazy">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.name }}</h5>
                          <p class="card-text">"{{ item.description }}"</p>
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
    height: 95vh;
    margin-bottom: 1rem;
    width: 13rem;
    height: 21rem;
    margin-top: 1rem;
}

.card-text {
    height: 120px;
    overflow: auto;
}


h5{
    text-decoration: underline;
    font-weight: 700;
    font-size: small;
}

.btn{
    background-color: #FF95E1;
    margin: .2rem;
    font-weight: 700;
    font-size: smaller;
    height: 1.9rem;
}

img{
    padding: .5rem;
}

p{
    font-size: .7rem;
    font-style: italic;
}

 

.btn:hover{
    background-color: #FFE0F6;
}

@media (width < 300px) {
    .card{
        height : fit-content;
    }
}

@media (width < 700px) {
    .card{
        margin-bottom: 1rem;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
}

</style>