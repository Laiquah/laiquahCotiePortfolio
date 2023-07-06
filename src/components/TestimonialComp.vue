<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in testimonials" :key="item.id" data-aos="zoom-in">
                    <div class="card mb-3" id="card">
                        <div class="row g-0" id="body">
                          <div class="col-md-4">
                            <img :src="item.image" class="img-fluid rounded-start" :alt="item.name">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title" id="name">{{ item.name }}</h5>
                              <p class="card-text"><small class="text-body-secondary">{{ item.role }}</small></p>
                              <p class="card-text" id="words"><small>"{{ item.words }}"</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            testimonials() {
                return this.$store.state.testimonials
            }
        },
        mounted() {
            this.$store.dispatch('fetchTestimonials')
        }
    }
</script>

<style scoped>

#card{
    margin-top: 1rem;
    width: 55rem;
    height: 16rem;
}

img{
    width: 10rem;
}

#name{
    font-weight: 800;
    text-decoration: underline;
}

#words{
    font-style: italic;
}

@media (width < 300px) {
    img{
        width: 4rem;
    }

    #card{
        width: 12rem !important;
        height: fit-content !important;
    }
}

@media (width < 700px) {
    img{
        width: 4rem;
    }

    #card{
        width: 25rem !important;
        height: fit-content !important;
    }
}
</style>