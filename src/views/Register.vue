<template>
  <div class="register">
      <form @submit.prevent="Register" >
      <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
      <input v-model=email type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus> 
      <input v-model=password type="password" id="inputPassword" class="form-control" placeholder="Password" required> <br> 
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button> <br>
      <p>You have an account ?  <router-link to="/login"> Login Here </router-link> </p>
      <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
    </form> 
  </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    setup() {
        const email = ref("");
        const password = ref("");

        const Register = () => {
            firebase.auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message))
        }

        return {
            Register,
            email,
            password
        }
    }
}
</script>

<style>
.register{
    margin-top: 80px;
}
</style>