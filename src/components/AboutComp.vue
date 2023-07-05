<template>
  <div class="about">
    <p>
      My name is Laiquah Cotie, and I am a driven and devoted professional who
      is deeply passionate about coding. My greatest satisfaction comes from
      thriving in fast-paced and demanding environments, leveraging my expertise
      to generate significant outcomes. I am recognized for my exceptional
      qualities such as communication, problem-solving and leadership. I possess
      an insatiable thirst for knowledge, continuously seeking avenues to expand
      my understanding and remain at the forefront of industry advancements.
      Alongside my technical proficiencies, I possess strong interpersonal
      skills, fostering effective collaboration with diverse teams and
      stakeholders. I am enthusiastic about the prospect of applying my
      expertise and energy to a fresh challenge.
    </p>
    <h3>Interests:</h3>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col">
          <div class="card" style="width: 18rem" id="card">
            <img
              src="https://i.postimg.cc/Zq0KthFV/florian-olivo-4hb-J-eym-Z1o-unsplash.jpg"
              class="card-img-top"
              alt="coding"
            />
            <div class="card-body">
              <p class="card-text">Coding</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem" id="card">
            <img
              src="https://i.postimg.cc/xdP3MbFF/thought-catalog-OJZB0-VUQKKc-unsplash.jpg"
              class="card-img-top"
              alt="reading"
            />
            <div class="card-body">
              <p class="card-text">Reading</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem" id="card">
            <img
              src="https://i.postimg.cc/FzhRc78G/marcela-laskoski-Yrt-Flr-Lo2-DQ-unsplash.jpg"
              class="card-img-top"
              alt="music"
            />
            <div class="card-body">
              <p class="card-text">Music</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>Hobbies:</h3>
    <div class="container">
      <div class="row rol-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col">
          <div class="card" style="width: 18rem" id="card">
            <img
              src="https://i.postimg.cc/T2CR9ZY3/theme-photos-Hx7xdwhj2-AY-unsplash.jpg"
              class="card-img-top"
              alt="baking"
            />
            <div class="card-body">
              <p class="card-text">Baking</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem" id="card">
            <img
              src="https://i.postimg.cc/nV46Y5Zw/fredrick-tendong-6ou8g-Wp-S9ns-unsplash.jpg"
              class="card-img-top"
              alt="gaming"
            />
            <div class="card-body">
              <p class="card-text">Gaming</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem" id="card">
            <img
              src="https://i.postimg.cc/D07JJDdb/neslihan-gunaydin-Bdu-Dcry-SLKM-unsplash.jpg"
              class="card-img-top"
              alt="gardening"
            />
            <div class="card-body">
              <p class="card-text">Gardening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <center><a href="/resume" class="btn">find out more</a></center>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 18rem;
  padding: 1rem;
}

.about {
  padding-bottom: 1rem;
}

.btn{
  border: 3px solid ;
}

@media screen and (max-width: 300px) {
  #card{
    display: flex !important;
    flex-direction: column;
  }
}
</style>
