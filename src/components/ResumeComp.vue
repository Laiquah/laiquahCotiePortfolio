<template>
  <div>
    <div class="container">
      <h1>Education:</h1>
      <center>
      <div class="row d-flex justify-content-center" id="education">
      <div class="col" v-for="item in education" :key="item.id" data-aos="zoom-in">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="item.image" class="img-fluid rounded-start" :alt="item.place" id="image">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.place }}</h5>
                <p class="card-text">{{ item.qualification }}</p>
                <p class="card-text"><small class="text-body-secondary">{{ item.year }}</small></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </center>
      <h1>Soft skills:</h1>
      <div class="row row-cols-1">
      <div class="col" v-for="item in softskills" :key="item.id" data-aos="zoom-in">
          <div class="card" id="skills">
            <div class="card-body">
              <h2>{{ item.soft }}</h2>
              <p id="des">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Hard skills:</h1>
      <div class="row">
      <div class="col" v-for="item in hardskills" :key="item.id" data-aos="zoom-in">
          <div class="card mb-3" style="width: 18rem" id="card">
            <p class="card-text" id="love">{{ item.name }}</p>
            <div class="card-body">
              <img :src="item.icon" id="icon" class="card-img-top" :alt="item.name" />
              <p class="card-text" id="text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Experience:</h1>
      <div class="row">
        <div class="col" v-for="item in experience" :key="item.id" data-aos="zoom-in">
          <center>
          <div class="card mb-3" id="experience card">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="item.image"
                  class="img-fluid rounded-start"
                  :alt="item.place" id="para"
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
          </center>
        </div>
      </div>
    </div>
    <a href="https://drive.google.com/file/d/1o15K-VOjBi1sun9mzMGNjpGd7dW0ySLl/view?usp=drive_link" class="btn" target="_blank">Download CV here</a>
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
h1 {
  text-decoration: underline;
  font-weight: 700;
}

.btn {
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 3px solid #FF95E1;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
  margin: 1rem;
}

.btn:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #FF95E1;
  z-index: -1;
  border-radius: 10px;
}

.btn:hover, .btn:focus {
  color: white;
}

.btn:hover:before, .btn:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.btn:active {
  transform: scale(0.9);
}

#icon{
    width: 7rem;
}

#love{
  font-weight: 900;
}

#para{
  margin-top: 2rem;
}

#experience:hover{
  transform: scale(1.05);
  transition: ease-in .2s;
}

#image{
  height: 10rem;
}

#image:hover{
  transform: scale(1.05);
  transition: ease-in .2s;
}

#skills{
  margin-bottom: 1rem;
}

#card:hover{
  transform: scale(1.05);
  transition: ease-in .2s;
}

#experience{
  height: 15rem;
  font-size: smaller;
  width: 30rem !important;
}

#skills:hover{
  background-color: #FF95E1;
  box-shadow: inset 2px 2px 2px 2px #FFE0F6;
}

h4{
  margin-top: 2rem;
}

h2{
  text-decoration: underline;
  font-weight: 800;
}

#text{
  font-size: small;
}

#des{
  font-size: smaller;
}

@media screen and (max-width: 300px) {
  #card{
     width: 280px !important;
     display: inline-block;
  }
  
  #para{
    margin: 0;
  }
}
</style>
