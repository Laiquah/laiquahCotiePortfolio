<template>
    <div>
        <div class="container">
            <div class="col" v-for="item in testimonials" :key="item.id">
                <div class="row">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img :src="item.image" class="img-fluid rounded-start" :alt="item.name">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{{ item.name }}</h5>
                              <p class="card-text"><small class="text-body-secondary">{{ item.role }}</small></p>
                              <p class="card-text">"{{ item.words }}"</p>
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

</style>