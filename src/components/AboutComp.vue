<template>
  <div class="about">
    <div class="container">
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
    </div>
    <h1>Interests:</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col" data-aos="zoom-in">
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
        <div class="col" data-aos="zoom-in">
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
        <div class="col" data-aos="zoom-in">
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
    <h1 id="h2">Hobbies:</h1>
    <div class="container">
      <div class="row rol-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col" data-aos="zoom-in">
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
        <div class="col" data-aos="zoom-in">
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
        <div class="col" data-aos="zoom-in">
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
  border-radius: 10px !important;
}

img:hover{
  transform: scale(1.05);
  transition: ease-out .2s;
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

#h2{
  margin-top: 1rem;
}

h1{
  text-decoration: underline;
  font-weight: bold;
}

p{
  font-weight: 800;
  margin-top: 1rem;
}

@media screen and (max-width: 300px) {
  #card{
    display: flex !important;
    flex-direction: column;
    width: 270px !important;
    margin-bottom: .4rem;
  }

  img{
    width: 270px;
  }
}

@media screen and (max-width: 700px) {
  #card{
    display: flex !important;
    flex-direction: column;
    width: 270px !important;
    margin-bottom: .4rem;
  }

  img{
    width: 270px;
  }
}
</style>
