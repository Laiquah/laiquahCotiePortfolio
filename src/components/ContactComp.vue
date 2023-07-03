<template>
    <div>
        <form action="https://formspree.io/f/mgejwqav" method="POST">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First name:</label>
                <center><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" required></center>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Last surname:</label>
                <center><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="surname" required></center>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                <center><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="person@gmail.com" required></center>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contact Number:</label>
                <center><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="065 819 0250" required></center>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                <center><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave your message here"></textarea></center>
            </div>
            <button>Submit</button>
            <button>Clear</button>
        </form>
    </div>
</template>

<script>
    export default {
        
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

form{
    margin-bottom: 1rem;
}

input{
    width: 20rem;
}

textarea{
    width: 20rem;
}
</style>