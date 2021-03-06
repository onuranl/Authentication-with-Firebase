<template>
  <div class="login">
    <form @submit.prevent="Login" >
      <h1 class="h3 mb-3 font-weight-normal">Please login</h1>
      <input v-model=email type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus> 
      <input v-model=password type="password" id="inputPassword" class="form-control" placeholder="Password" required> <br> 
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button> <br>
      <p>Need an account ?  <router-link to="/register"> Register Here </router-link> </p>
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

        const Login = () => {
            firebase.auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(err => alert(err.message));
        }

        return {
            Login,
            email,
            password
        }
    }
}
</script>

<style>
.login{
    margin-top: 80px;
}
</style>