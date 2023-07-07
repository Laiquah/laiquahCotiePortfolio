<template>
    <div>
        <center>
        <div class="card" id="card">
            <div class="card2">
              <form class="form" action="https://formspree.io/f/xrgwgzwd" method="POST" name="myForm">
              <p id="heading">Contact here</p>
              <div class="field">
                <input type="text" class="input-field" v-model="name" placeholder="First name" autocomplete="off" name="name" required oninvalid="this.setCustomValidity('invalid name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="field">
                <input type="text" class="input-field" placeholder="Last name" v-model="surname" name="name" autocomplete="off" required oninvalid="this.setCustomValidity('invalid surname')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="field">
                <input type="text" class="input-field" placeholder="+27 11 222 3333" v-model="number" name="number" autocomplete="off" required oninvalid="this.setCustomValidity('invalid number')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="field">
                <input type="text" class="input-field" placeholder="Email" name="email" v-model="email" autocomplete="off"  required oninvalid="this.setCustomValidity('invalid email')" oninput="this.setCustomValidity('')">
              </div>
              <div class="field">
                <input type="text" class="input-field" placeholder="Leave a message here..." name="text" v-model="text" autocomplete="off"  required oninvalid="this.setCustomValidity('message required')" oninput="this.setCustomValidity('')">
              </div>
              <div class="btn0">
              <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
              <button class="button2" type="reset">Clear</button>
              </div>
              
          </form>
            </div>
              </div>
              </center>
    </div>
</template>

<script>
    export default{
     
  }
</script>

<style scoped>
button{
    margin: 1rem;
    background-color: #FF95E1;
    padding: .5rem;
    width: 10rem;
    border-radius: 5rem;
}

button:hover{
    background-color: #FFE0F6;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #FFE0F6;
    border-radius: 20px;
  }
  
  #heading {
    font-weight: 700;
    text-align: center;
    margin: 1rem;
    color: black;
    font-size: 1em;
  }
  
  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #FF95E1;
    box-shadow: inset 2px 5px 10px #FFE0F6;
  }
  
  input {
    height: 1.3em;
    width: 1.3em;
    fill: black;
  }
  
  input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: black;
  }
  
  .form .btn0 {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.5em;
  }
  
  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #FF95E1;
    color: rgb(0, 0, 0);
  }
  
  .button1:hover {
    background-color: #FFE0F6;
    color:black;
  }
  
  .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #FF95E1;
    color: rgb(0, 0, 0);
  }
  
  .button2:hover {
    background-color: #FFE0F6;
    color: black;
  }
  
  .card {
    margin-top: 1rem;
    padding: .2rem;
    background-color: #FF95E1;
    border-radius: 22px;
    transition: all .3s;
    width: 30%;
  }
  
  .card2 {
    border-radius: 0;
    transition: all .2s;
  }
  
  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
  
  .card:hover {
    box-shadow: 0px 0px 30px 1px #FFE0F6;
  }

@media (width <= 300px) {
    #card{
        width: 300px !important;
    }

    .button1{
        padding: 0;
        margin: 1rem;
        border: 0;
    }

    .button2{
        padding: 0;
        margin: 1rem;
        border: 0;
    }

    .field{
      width: 230px;
    }

}

@media (width <= 700px) {
  .card{
      width: 600px !important;
  }

  .button1{
      padding: 0;
      margin: 1rem;
      border: 0;
  }

  .button2{
      padding: 0;
      margin: 1rem;
      border: 0;
  }
}
</style>