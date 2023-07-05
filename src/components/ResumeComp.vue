<template>
  <div>
    <div class="container">
      <h4>Education:</h4>
      <center>
      <div class="row d-flex justify-content-center" id="education">
      <div class="col" v-for="item in education" :key="item.id" data-aos="zoom-in">
          <div class="card" style="width: 18rem" id="card">
            <img :src="item.image" style="height: 18rem;" class="card-img-top" :alt="item.place" />
            <div class="card-body">
              <p class="card-text">{{ item.place }}</p>
              <p class="card-text">{{ item.qualification }}</p>
              <p class="card-text">{{ item.year }}</p>
            </div>
          </div>
        </div>
      </div>
      </center>
      <h4>Soft skills:</h4>
      <div class="row">
      <div class="col" v-for="item in softskills" :key="item.id" data-aos="zoom-in">
          <div class="card" id="skills">
            <div class="card-body">
              {{ item.soft }}
            </div>
          </div>
        </div>
      </div>
      <h4>Hard skills:</h4>
      <div class="row">
      <div class="col" v-for="item in hardskills" :key="item.id" data-aos="zoom-in">
          <div class="card mb-3" style="width: 18rem">
            <p class="card-text">{{ item.name }}</p>
            <div class="card-body">
              <img :src="item.icon" id="icon" class="card-img-top" :alt="item.name" />
            </div>
          </div>
        </div>
      </div>
      <h4>Experience:</h4>
      <div class="row">
        <div class="col" v-for="item in experience" :key="item.id" data-aos="zoom-in">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="item.image"
                  class="img-fluid rounded-start"
                  :alt="item.place"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.place }}</h5>
                  <p class="card-text">{{ item.role }}</p>
                  <p class="card-text">{{ item.description }}</p>
                  <p class="card-text">
                    <small class="text-body-secondary">{{ item.year }}</small>
                  </p>
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
    education() {
      return this.$store.state.education;
    },
    softskills() {
      return this.$store.state.softskills;
    },
    hardskills() {
      return this.$store.state.hardskills;
    },
    experience() {
      return this.$store.state.experience;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSoftskills");
    this.$store.dispatch("fetchHardskills");
    this.$store.dispatch("fetchExperience");
  },
};
</script>

<style scoped>
h4 {
  text-decoration: underline;
  font-weight: 700;
}

#icon{
    width: 10rem;
}

#card:hover {
  transform: scale(1.05);
  transition: ease-in .6s;
  box-shadow: 0 0 5px #FF95E1,
              0 0 20px #FF95E1,
              0 0 50px #FF95E1,
              0 0 100px #FF95E1;
}

#skills:hover{
  background-color: #FF95E1;
  box-shadow: inset 2px 2px 2px 2px #FFE0F6;
}

h4{
  margin-top: 2rem;
}

@media screen and (max-width: 300px) {
  #card{
     width: 280px !important;
     display: inline-block;
  }
  
}
</style>
